FROM node:12.18-alpine

LABEL maintainer="xiaoming.bai" email=80583600@qq.com

WORKDIR /app/meituan-client-site

# 先安装依赖，可以利用镜像层缓存机制 (Layer Caching)，获得更快的构建速度
COPY package*.json ./

# 使用国内镜像和 cnpm 提升依赖包下载速度
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install -g cnpm
RUN cnpm install

# 然后把项目下所有文件复制到 Docker 的中，拷贝的内容受 .dockerignore 影响
COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
