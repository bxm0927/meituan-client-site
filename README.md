# meituan-client-site

使用 Nuxt.js + Koa2 + MongoDB + Redis 开发美团网 PC 站。

学习目的：熟悉大前端技术，了解前后端分离设计，了解更全面的大前端项目架构。

学习地址：https://coding.imooc.com/class/280.html

## 技术栈

客户端：

- Vue 全家桶
- Nuxt：Vue SSR 框架
- Element-UI：Vue 生态圈最流行的组件库

服务端：

- Koa2：Node.js Web 开发框架
- Redis：服务端开发不可或缺数据缓存工具
- MongoDB：一款流行的 NoSQL 数据库
- Mongoose：MongoDB 的一个对象模型工具，傻瓜式的数据库操作大大提升效率

服务器部署：

- PM2
- Nginx
- Jenkins
- Docker

## 主要功能模块

## 安装引导

```
> npx create-nuxt-app meituan-client-site

create-nuxt-app v3.2.0
✨  Generating Nuxt.js project in meituan-client-site
? Project name: meituan-client-site
? Programming language: JavaScript
? Package manager: Npm
? UI framework: Element
? Nuxt.js modules: Axios
? Linting tools: ESLint, Prettier, Lint staged files, StyleLint
? Testing framework: None
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Server (Node.js hosting)
? Development tools: jsconfig.json (Recommended for VS Code if you're not using typescript)
```

## 快速开始

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
