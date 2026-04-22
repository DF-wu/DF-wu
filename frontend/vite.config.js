// frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 使用正規表示式來匹配所有 /api 開頭的路徑
      '^/api': {
        target: 'http://localhost:8080', // 後端 API 伺服器的位址
        changeOrigin: true, // 必須設為 true，伺服器才會相信這個請求是來自同一個源
        rewrite: (path) => path.replace(/^\/api/, '/api') // 重寫路徑，保持 /api 前綴
      }
    }
  }
})
