# URL Balancer

本專案是一個功能完整的 URL Balancer / API Gateway，包含一個 Go 語言開發的高效能後端，以及一個 React 打造的現代化管理介面。整個應用程式被設計為可透過 Docker 輕鬆部署。

您不僅可以透過網頁介面輕鬆設定請求的分流路徑，還能對轉發的請求動態改寫其 Header 和 Body。

詳細的技術架構設計，請參閱 [`ARCHITECTURE.md`](./ARCHITECTURE.md)。

## 🚀 功能特色

*   **動態路由設定**: 透過 Web UI 即可新增、修改、刪除需要進行分流的 API 端點 (Endpoint)。
*   **權重分流 (Weighted Round-Robin)**: 可為每一個後端目標 (Target) 設定權重，實現按比例的流量分配。
*   **請求改寫**: 在請求轉發至後端目標前，可動態覆寫或新增 Header 和 Body 的內容。
*   **前後端分離**:
    *   **後端 (Go)**:
        *   **控制平面**: 基於 Gin 框架，提供 RESTful API 進行所有設定的管理。
        *   **資料平面**: 基於 Go 原生 `net/http`，提供高效能的反向代理服務，並透過定期輪詢自動載入最新設定。
    *   **前端 (React)**:
        *   基於 Vite 和 React，提供快速的開發體驗。
        *   使用 Ant Design 元件庫，打造美觀且專業的管理介面。
*   **容器化部署**: 提供一個最佳化的多階段 `Dockerfile`，可將整個應用程式打包成一個輕量級的生產環境映像檔。

## 🛠️ 開發環境啟動

您需要在本機安裝 Go (v1.20+), Node.js (v18+) 和 Docker。

1.  **啟動後端控制平面 (API Server)**
    在一個終端機中執行：
    ```bash
    cd backend
    go mod tidy
    go run ./cmd/controlserver
    ```
    此服務將會在 `http://localhost:8080` 上運行。

2.  **啟動後端資料平面 (Proxy Server)**
    在**另一個**終端機中執行：
    ```bash
    cd backend
    go run ./cmd/dataserver
    ```
    此服務將會在 `http://localhost:8081` 上運行。

3.  **啟動前端開發伺服器**
    在**第三個**終端機中執行：
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
    此服務將會在 `http://localhost:5173` (或另一個可用埠) 上運行。

現在，您可以開啟瀏覽器訪問 `http://localhost:5173` 來使用管理介面。

## 🐳 使用 Docker 建置與運行

1.  **建置 Docker 映像檔**
    在專案根目錄下，執行：
    ```bash
    docker build -t urlbalancer:latest .
    ```

2.  **運行 Docker 容器**
    ```bash
    docker run -d -p 8080:8080 -p 8081:8081 --name urlbalancer-app urlbalancer:latest
    ```
    *   `-d`: 在背景分離模式下運行。
    *   `-p 8080:8080`: 將主機的 8080 埠映射到容器的 8080 埠 (控制平面)。
    *   `-p 8081:8081`: 將主機的 8081 埠映射到容器的 8081 埠 (資料平面)。
    *   `--name urlbalancer-app`: 為容器指定一個名稱。

    運行後，管理介面將可透過 `http://localhost:8080` 訪問 (在 Docker 環境中，前端靜態檔案由後端伺服器提供服務，這部分我們會在後續步驟中完成)。

## ⚙️ API 使用範例

一旦您在管理介面上設定好 Endpoint 和 Target，就可以開始透過 **資料平面 (Port 8081)** 發送請求。

**範例:**
1.  在 UI 上建立一個 Endpoint，路徑為 `/v1/users`。
2.  為此 Endpoint 新增一個 Target，URL 為 `http://my-backend-service.com/api/users`，權重為 1。
3.  現在，您可以透過 `curl` 指令來測試：
    ```bash
    curl -X GET http://localhost:8081/v1/users
    ```
    URL Balancer 會將此請求代理到 `http://my-backend-service.com/api/users`。