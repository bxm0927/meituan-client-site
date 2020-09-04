# 部署

使用 Docker 手动部署：

```
docker build -t meituan-client-site .

docker run -d -p 3000:3000 meituan-client-site
```

使用 Docker Compose 实现自动化部署：

```
docker-compose up -d --build
```
