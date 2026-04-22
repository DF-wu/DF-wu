package api

import (
	"net/http"
	"urlbalancer/backend/pkg/database"
	"urlbalancer/backend/pkg/model"

	"github.com/gin-gonic/gin"
)

// CreateEndpoint 處理建立新 Endpoint 的請求
func CreateEndpoint(c *gin.Context) {
	var endpoint model.Endpoint
	if err := c.ShouldBindJSON(&endpoint); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := database.DB.Create(&endpoint).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create endpoint"})
		return
	}

	c.JSON(http.StatusCreated, endpoint)
}

// GetEndpoints 處理查詢所有 Endpoints 的請求
func GetEndpoints(c *gin.Context) {
	var endpoints []model.Endpoint
	// Preload("Targets") 會在查詢 Endpoint 時，一併把關聯的 Target 也查詢出來
	if err := database.DB.Preload("Targets").Find(&endpoints).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve endpoints"})
		return
	}
	c.JSON(http.StatusOK, endpoints)
}

// GetEndpoint 處理查詢單一 Endpoint 的請求
func GetEndpoint(c *gin.Context) {
	var endpoint model.Endpoint
	id := c.Param("id")
	if err := database.DB.Preload("Targets").First(&endpoint, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Endpoint not found"})
		return
	}
	c.JSON(http.StatusOK, endpoint)
}

// UpdateEndpoint 處理更新 Endpoint 的請求
func UpdateEndpoint(c *gin.Context) {
	var endpoint model.Endpoint
	id := c.Param("id")
	if err := database.DB.First(&endpoint, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Endpoint not found"})
		return
	}

	if err := c.ShouldBindJSON(&endpoint); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	database.DB.Save(&endpoint)
	c.JSON(http.StatusOK, endpoint)
}

// DeleteEndpoint 處理刪除 Endpoint 的請求
func DeleteEndpoint(c *gin.Context) {
	var endpoint model.Endpoint
	id := c.Param("id")
	if err := database.DB.First(&endpoint, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Endpoint not found"})
		return
	}

	database.DB.Delete(&endpoint)
	c.JSON(http.StatusNoContent, nil)
}
// CreateTargetForEndpoint 處理為指定 Endpoint 建立新 Target 的請求
func CreateTargetForEndpoint(c *gin.Context) {
	var target model.Target
	endpointID := c.Param("id")

	// 檢查 Endpoint 是否存在
	var endpoint model.Endpoint
	if err := database.DB.First(&endpoint, endpointID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Endpoint not found"})
		return
	}

	if err := c.ShouldBindJSON(&target); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// 將 target 與 endpoint 關聯
	target.EndpointID = endpoint.ID

	if err := database.DB.Create(&target).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create target"})
		return
	}

	c.JSON(http.StatusCreated, target)
}

// UpdateTarget 處理更新 Target 的請求
func UpdateTarget(c *gin.Context) {
	var target model.Target
	targetID := c.Param("id")

	if err := database.DB.First(&target, targetID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Target not found"})
		return
	}

	if err := c.ShouldBindJSON(&target); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	database.DB.Save(&target)
	c.JSON(http.StatusOK, target)
}

// DeleteTarget 處理刪除 Target 的請求
func DeleteTarget(c *gin.Context) {
	var target model.Target
	targetID := c.Param("id")
	if err := database.DB.First(&target, targetID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Target not found"})
		return
	}

	database.DB.Delete(&target)
	c.JSON(http.StatusNoContent, nil)
}