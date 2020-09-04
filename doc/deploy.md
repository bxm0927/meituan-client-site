# 部署

使用 Nginx + Jenkins + Docker 进行部署

```
docker build -t meituan-client-site .
docker run -d -p 3000:3000 meituan-client-site
```
