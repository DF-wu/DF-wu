# Frontend UI for URL Balancer

本目錄包含 URL Balancer 的前端管理介面，使用 React (搭配 Vite) 和 Ant Design UI 元件庫進行開發。

## 結構說明

*   `/public`: 存放靜態資源，例如 `favicon.ico`。
*   `/src`: 存放所有前端原始碼。
    *   `/assets`: 存放圖片、字體等資源。
    *   `/components`: 可重用的 React 元件 (例如 `EndpointList`, `TargetList`)。
    *   `/pages`: 頁面級別的元件 (例如 `EndpointDetails`)。
    *   `/services`: 與外部服務溝通的模組 (例如 `apiClient.js`)。
    *   `App.jsx`: 應用程式的根元件，負責路由設定與佈局。
    *   `main.jsx`: 應用程式的進入點。
*   `vite.config.js`: Vite 的設定檔，包含了開發伺服器的代理設定。
*   `package.json`: Node.js 的專案設定與依賴列表。

## 開發環境啟動

1.  **安裝依賴**
    ```bash
    npm install
    ```

2.  **啟動開發伺服器**
    ```bash
    npm run dev
    ```
    此指令會啟動一個帶有熱重載 (HMR) 功能的開發伺服器。

## 生產環境建置

```bash
npm run build
```
此指令會將所有程式碼打包並優化到 `dist` 目錄下，這些是最終要部署的靜態檔案。
