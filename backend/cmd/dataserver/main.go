// backend/cmd/dataserver/main.go
package main

import (
	"log"
	"net/http"
	"time"
	"urlbalancer/backend/pkg/database"
	"urlbalancer/backend/pkg/proxy"
)

func main() {
	log.Println("Starting Data Plane Server...")

	// Data Plane 也需要連接資料庫以讀取設定
	database.ConnectDatabase()

	// 立即載入一次設定，然後啟動一個 goroutine 定期重載
	proxy.LoadConfig()
	go func() {
		ticker := time.NewTicker(10 * time.Second) // 每 10 秒重載一次設定
		for range ticker.C {
			proxy.LoadConfig()
		}
	}()

	// 建立 HTTP 伺服器
	server := &http.Server{
		Addr:    ":8081", // Data Plane 監聽在 8081 port
		Handler: http.HandlerFunc(proxy.ProxyRequestHandler),
	}

	log.Println("Data Plane listening on :8081")
	if err := server.ListenAndServe(); err != nil {
		log.Fatalf("could not listen on :8081: %v\n", err)
	}
}