// backend/pkg/database/database.go
package database

import (
    "fmt"
    "urlbalancer/backend/pkg/model"

    "gorm.io/driver/sqlite"
    "gorm.io/gorm"
)

var DB *gorm.DB

// ConnectDatabase 負責連接到 SQLite 資料庫並初始化
func ConnectDatabase() {
    var err error
    // 我們使用 SQLite，它是一個輕量級的檔案型資料庫，非常適合開發和簡單部署
    // "urlbalancer.db" 是資料庫檔案的名稱
    DB, err = gorm.Open(sqlite.Open("urlbalancer.db"), &gorm.Config{})
    if err != nil {
        panic("Failed to connect to database!")
    }

    fmt.Println("Database connection successfully opened")

    // AutoMigrate 會自動檢查並創建/更新資料庫 schema
    // 這裡它會為我們的 Endpoint 和 Target模型 創建對應的資料表
    err = DB.AutoMigrate(&model.Endpoint{}, &model.Target{})
    if err != nil {
        panic("Failed to migrate database!")
    }

    fmt.Println("Database migrated")
}