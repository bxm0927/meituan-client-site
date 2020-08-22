/*
 * ESLint Configuration
 * https://github.com/eslint/eslint
 *
 * @Author: xiaoming.bai
 * @Date: 2020-08-22 14:54:47
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-08-22 15:07:19
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
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  rules: {
    'no-console': isDev ? 'off' : 'error',
    'no-debugger': isDev ? 'off' : 'error',
  },
}
