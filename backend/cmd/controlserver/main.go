package main

import (
	"fmt"
	"net/http"
	"strings"
	"urlbalancer/backend/pkg/api"
	"urlbalancer/backend/pkg/database"

	"github.com/gin-gonic/gin"
)

func main() {
	fmt.Println("Starting Control Plane Server...")

	database.ConnectDatabase()

	r := gin.Default()

	// --- API 路由 ---
	v1 := r.Group("/api/v1")
	{
		endpoints := v1.Group("/endpoints")
		{
			endpoints.POST("/", api.CreateEndpoint)
			endpoints.GET("/", api.GetEndpoints)
			endpoints.GET("/:id", api.GetEndpoint)
			endpoints.PUT("/:id", api.UpdateEndpoint)
			endpoints.DELETE("/:id", api.DeleteEndpoint)
			endpoints.POST("/:id/targets", api.CreateTargetForEndpoint)
		}
		targets := v1.Group("/targets")
		{
			targets.PUT("/:id", api.UpdateTarget)
			targets.DELETE("/:id", api.DeleteTarget)
		}
	}
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "pong"})
	})

	// --- 靜態檔案服務 ---
	// 使用 Gin 的 StaticFS 來服務 frontend/dist 目錄下的檔案
	// 這會將 http://localhost:8080/ 指向 ./frontend/dist/index.html
	r.StaticFS("/", http.Dir("./frontend/dist"))

	// 處理路由回退 (Fallback for SPA)
	// 當瀏覽器刷新一個非根路徑 (例如 /endpoints/1) 時，請求會打到後端
	// 這個 NoRoute 處理可以確保任何未匹配到 API 的路由都回傳 index.html
	// 讓 React Router 能夠接管路由
	r.NoRoute(func(c *gin.Context) {
		// 只對非 API 的請求回傳 index.html
		if !strings.HasPrefix(c.Request.URL.Path, "/api/") {
			c.File("./frontend/dist/index.html")
		}
	})

	r.Run(":8080")
}