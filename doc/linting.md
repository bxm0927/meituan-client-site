# 静态校验工具的集成

使用 ESLint 对 JS 代码进行校验；

使用 Stylelint 对 CSS 代码进行校验；

使用 Prettier 对代码风格进行校验和格式化；

另外，使用支持 Git pre-commit hook 的插件 husky + lint-staged，对将要提交到 Git 仓库的代码进行 **强制校验**。

Then, 💩 will never slip into your code base!

```
graph LR
ESLint-->Prettier
Stylelint-->Prettier
Prettier-->husky
husky-->lint-staged
```

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4cbdff1bba7c43399dd3806a564496d1~tplv-k3u1fbpfcp-zoom-1.image)

## 相关文档

- [ESLint](https://github.com/eslint/eslint)
- [Stylelint](https://github.com/stylelint/stylelint)
- [Prettier](https://github.com/prettier/prettier)
- [husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)

## 配置过程

### ESLint

> 基于 `@nuxtjs/eslint-module`: https://github.com/nuxt-community/eslint-module

安装依赖：

```
npm install --save-dev \
    eslint \
    babel-eslint \
    eslint-loader \
    eslint-config-prettier \
    eslint-plugin-prettier

npm install --save-dev --save-exact prettier # 安装精确的版本
```

配置文件 `.eslintrc.js`：

```js
/*
 * ESLint Configuration
 * https://github.com/eslint/eslint
 */

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': isDev ? 'off' : 'error',
    'no-debugger': isDev ? 'off' : 'error',
  },
}
```

配置 webpack rules，实现 Run ESLint on save：

```js
rules: [
  {
    // Run ESLint on save
    enforce: 'pre',
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    exclude: /node_modules/,
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  },
],
```

### Stylelint

> 基于 `@nuxtjs/stylelint-module`: https://github.com/nuxt-community/stylelint-module

安装依赖：

```
npm install --save-dev \
    stylelint \
    stylelint-config-standard \
    stylelint-config-prettier \
    stylelint-order \
    stylelint-config-rational-order
```

配置文件 `.stylelintrc.js`：

```js
/*
 * Stylelint Configuration
 * https://github.com/stylelint/stylelint
 */

module.exports = {
  ignoreFiles: ['**/iconfont.css'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  rules: {
    // 屏蔽一些 scss @mixin 等语法的检查
    'at-rule-no-unknown': [true, { ignoreAtRules: ['mixin', 'include'] }],
  },
}
```

### Prettier

> Prettier 的依赖和部分配置已经在 ESLint/Stylelint 中进行了。

配置文件 `.prettierrc.js`：

```js
module.exports = {
  semi: false,
  printWidth: 100,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
}
```

### husky + lint-staged

安装依赖：

```
npm install --save-dev husky lint-staged
```

在 `package.json` 中进行如下配置：

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.{js,vue}": "eslint",
  "*.{css,scss,vue}": "stylelint"
}
```

### VS Code 配置

- 在 VS Code 中开启对 ESLint 的支持 —— [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- 在 VS Code 中开启对 Stylelint 的支持 —— [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- 在 VS Code 中开启对 Prettier 的支持 —— [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

在 `settings.json` 中进行如下配置：

```json
"editor.defaultFormatter": "esbenp.prettier-vscode",

"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
  "source.fixAll.stylelint": true,
}
```
