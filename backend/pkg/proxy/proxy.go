// backend/pkg/proxy/proxy.go
package proxy

import (
	"bytes"
	"encoding/json"
	"io/ioutil"
	"log"
	"math/rand"
	"net/http"
	"net/http/httputil"
	"net/url"
	"strings"
	"sync"
	"urlbalancer/backend/pkg/database"
	"urlbalancer/backend/pkg/model"
)

// ConfigCache 用於快取從資料庫讀取的路由設定
var ConfigCache = make(map[string]*model.Endpoint)
var mu sync.RWMutex

// LoadConfig 定期從資料庫重新載入設定到快取中
func LoadConfig() {
	var endpoints []model.Endpoint
	if err := database.DB.Preload("Targets").Find(&endpoints).Error; err != nil {
		log.Printf("Error loading config: %v", err)
		return
	}

	mu.Lock()
	defer mu.Unlock()
	ConfigCache = make(map[string]*model.Endpoint)
	for i := range endpoints {
		ConfigCache[endpoints[i].Path] = &endpoints[i]
	}
	log.Println("Configuration reloaded successfully.")
}

// selectTarget 根據權重選擇一個目標
func selectTarget(targets []model.Target) *model.Target {
    if len(targets) == 0 {
        return nil
    }
    totalWeight := 0
    for _, t := range targets {
        totalWeight += t.Weight
    }
    if totalWeight <= 0 {
        // 如果權重總和為0，則隨機選擇一個
        return &targets[rand.Intn(len(targets))]
    }

    r := rand.Intn(totalWeight)
    for _, t := range targets {
        r -= t.Weight
        if r < 0 {
            return &t
        }
    }
    return nil // Should not happen
}


// ProxyRequestHandler 是處理所有代理請求的 http.Handler
func ProxyRequestHandler(w http.ResponseWriter, r *http.Request) {
	mu.RLock()
	endpoint, ok := ConfigCache[r.URL.Path]
	mu.RUnlock()

	if !ok || len(endpoint.Targets) == 0 {
		http.NotFound(w, r)
		return
	}

	target := selectTarget(endpoint.Targets)
        if target == nil {
            http.Error(w, "No available target", http.StatusServiceUnavailable)
            return
        }

	targetURL, err := url.Parse(target.URL)
	if err != nil {
		http.Error(w, "Invalid target URL", http.StatusInternalServerError)
		return
	}

	proxy := httputil.NewSingleHostReverseProxy(targetURL)
	proxy.Director = func(req *http.Request) {
		req.URL.Scheme = targetURL.Scheme
		req.URL.Host = targetURL.Host
		req.URL.Path = singleJoiningSlash(targetURL.Path, req.URL.Path)
		req.Host = targetURL.Host

            // 處理 Header 改寫 (現在更簡潔)
            if len(target.HeaderRewrite) > 0 {
                var headers map[string]string
                // 直接 Unmarshal datatypes.JSON (它本質上是 []byte)
                if json.Unmarshal(target.HeaderRewrite, &headers) == nil {
                    for key, val := range headers {
                        req.Header.Set(key, val)
                    }
                }
            }
	}
        
        // 處理 Body 改寫 (現在更簡潔)
        if len(target.BodyRewrite) > 0 && r.Body != nil {
            var bodyRewriteRules map[string]interface{}
            if json.Unmarshal(target.BodyRewrite, &bodyRewriteRules) == nil {
                bodyBytes, _ := ioutil.ReadAll(r.Body)
                var originalBody map[string]interface{}
                if json.Unmarshal(bodyBytes, &originalBody) == nil {
                    for key, val := range bodyRewriteRules {
                        originalBody[key] = val
                    }
                    newBodyBytes, _ := json.Marshal(originalBody)
                    r.Body = ioutil.NopCloser(bytes.NewBuffer(newBodyBytes))
                    r.ContentLength = int64(len(newBodyBytes))
                } else {
                    r.Body = ioutil.NopCloser(bytes.NewBuffer(bodyBytes))
                }
            }
        }
	proxy.ServeHTTP(w, r)
}

func singleJoiningSlash(a, b string) string {
    aslash := strings.HasSuffix(a, "/")
    bslash := strings.HasPrefix(b, "/")
    switch {
    case aslash && bslash:
        return a + b[1:]
    case !aslash && !bslash:
        return a + "/" + b
    }
    return a + b
}