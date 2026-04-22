// frontend/src/services/apiClient.js
import axios from 'axios';

// 建立一個 Axios 實例
const apiClient = axios.create({
  // baseURL 會自動指向 Vite proxy 設定的後端伺服器
  // 我們後端的所有 API 路由都以 /api/v1 開頭
  baseURL: '/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;