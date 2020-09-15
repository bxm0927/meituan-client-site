/*
 * Nuxt Configuration
 * @Author: xiaoming.bai
 * @Date: 2020-09-14 19:52:22
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-09-14 23:38:24
 */

const isDev = process.env.NODE_ENV === 'development'

export default {
  /**
   * define the server connection variables
   * See https://zh.nuxtjs.org/api/configuration-server
   * See https://zh.nuxtjs.org/faq/host-port
   */
  server: {
    port: 3000, // default: 3000
    host: isDev ? 'localhost' : '0.0.0.0', // default: localhost
  },

  /**
   * Headers of the page
   * See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  /**
   * Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/stylesheets/myreset.scss',
    '@/assets/stylesheets/common.scss',
    '@/assets/fonts/iconfont/iconfont.css',
    '@/assets/fonts/iconfontNew/iconfontNew.css',
    '@/assets/fonts/MFShangHei-Regular/MFShangHei-Regular.css',
  ],

  /**
   * Plugins to load before mounting the App
   * https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '@/plugins/element-ui',

    // 扩展 Axios
    // https://axios.nuxtjs.org/extend.html
    '@/plugins/axios',
  ],

  /**
   * Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',

    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',

    // Doc: https://zh.nuxtjs.org/api/configuration-build/#styleresources
    '@nuxtjs/style-resources',
  ],

  /**
   * styleResources module configuration
   */
  styleResources: {
    scss: [
      '@/assets/stylesheets/variables.scss',
      '@/assets/stylesheets/mixins.scss',
      '@/assets/stylesheets/functions.scss',
    ],
  },

  /**
   * Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // 如何发起跨域资源请求:
    //    - https://zh.nuxtjs.org/faq/http-proxy
    //    - https://axios.nuxtjs.org/options.html#proxy
    //    - https://github.com/nuxt-community/proxy-module
    '@nuxtjs/axios',
  ],

  /**
   * Axios module configuration
   */
  axios: {
    proxy: true,
  },

  /**
   * Proxy module configuration
   */
  proxy: {
    '/api': {
      target: 'http://localhost:4000',
      // target: 'http://api.meituan.bxmsite.com',
      pathRewrite: {
        '^/api': '/',
      },
    },
  },

  /**
   * Build configuration
   * See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: [/^element-ui/],

    /**
     * You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
