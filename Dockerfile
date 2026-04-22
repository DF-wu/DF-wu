# Dockerfile

# ---- 第一階段: 建置前端靜態檔案 ----
# 使用一個包含 Node.js 的映像檔作為建置環境
FROM node:18-alpine AS build-frontend
WORKDIR /app/frontend

# 複製 package.json 和 package-lock.json 並安裝依賴
COPY frontend/package*.json ./
RUN npm install

# 複製所有前端原始碼
COPY frontend/ ./

# 執行建置命令，產生靜態檔案
RUN npm run build


# ---- 第二階段: 編譯後端應用程式 ----
# 使用一個包含 Go 的映像檔作為建置環境
FROM golang:1.20-alpine AS build-backend
WORKDIR /app/backend

# 複製 go.mod 和 go.sum 並下載依賴
COPY backend/go.* ./
RUN go mod download

# 複製所有後端原始碼
COPY backend/ ./

# 編譯控制平面 (Control Plane) 伺服器
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o /app/controlserver ./cmd/controlserver/main.go

# 編譯資料平面 (Data Plane) 伺服器
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o /app/dataserver ./cmd/dataserver/main.go


# ---- 第三階段: 組合最終的生產環境映像檔 ----
# 使用一個極簡的 Alpine Linux 作為基礎映像檔，以獲得最小的體積
FROM alpine:latest
WORKDIR /app

# 從後端建置階段複製編譯好的執行檔
COPY --from=build-backend /app/controlserver .
COPY --from=build-backend /app/dataserver .

# 從前端建置階段複製建置好的靜態檔案
COPY --from=build-frontend /app/frontend/dist ./frontend/dist

# 建立一個存放資料庫檔案的目錄
RUN mkdir -p /app/data

# 環境變數，指定資料庫檔案的路徑
ENV DATABASE_PATH=/app/data/urlbalancer.db

# 暴露控制平面和資料平面的連接埠
EXPOSE 8080
EXPOSE 8081

# 由於我們有兩個伺服器，我們需要一個腳本來同時啟動它們。
# 建立一個啟動腳本
RUN echo '#!/bin/sh' > /app/start.sh && \
    echo './controlserver &' >> /app/start.sh && \
    echo './dataserver' >> /app/start.sh && \
    chmod +x /app/start.sh

# 映像檔啟動時執行的命令
CMD ["/app/start.sh"]