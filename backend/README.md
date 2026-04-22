# Backend Service for URL Balancer

本目錄包含 URL Balancer 的後端服務，使用 Go 語言開發。

## 結構說明

*   `/cmd`: 存放主程式的進入點。
    *   `/controlserver`: 控制平面，提供管理用的 RESTful API，基於 Gin 框架。
    *   `/dataserver`: 資料平面，高效能的反向代理伺服器。
*   `/pkg`: 存放可供外部呼叫的套件 (Package)。
    *   `/api`: API 的處理函式 (Handlers)。
    *   `/database`: 資料庫連線與遷移。
    *   `/model`: GORM 資料模型 (Structs)。
    *   `/proxy`: 反向代理的核心邏輯。
*   `/internal`: 僅供內部使用的套件 (未來可擴充，例如設定管理)。
*   `go.mod`, `go.sum`: Go Module 的依賴管理檔案。
*   `urlbalancer.db`: 開發用的 SQLite 資料庫檔案。

## 獨立運行

1.  **安裝依賴**
    ```bash
    go mod tidy
    ```

2.  **運行控制平面 (API Server)**
    ```bash
    go run ./cmd/controlserver
    ```

3.  **運行資料平面 (Proxy)**
    ```bash
    go run ./cmd/dataserver