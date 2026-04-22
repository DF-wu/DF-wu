package model

import (
	"gorm.io/datatypes" // 匯入 GORM 的 datatypes
	"gorm.io/gorm"
)

// Endpoint 代表一個可供外部請求的 API 端點
type Endpoint struct {
	gorm.Model
	Path    string   `gorm:"uniqueIndex;not null" json:"path"`
	Targets []Target `gorm:"foreignKey:EndpointID" json:"targets"`
}

// Target 代表一個實際的後端伺服器實體
type Target struct {
	gorm.Model
	EndpointID    uint           `json:"endpoint_id"`
	URL           string         `gorm:"not null" json:"url"`
	Weight        int            `gorm:"not null;default:1" json:"weight"`
	// 使用 datatypes.JSON 來儲存 JSON 物件，GORM 會自動處理序列化
	HeaderRewrite datatypes.JSON `gorm:"type:json" json:"header_rewrite"`
	BodyRewrite   datatypes.JSON `gorm:"type:json" json:"body_rewrite"`
}