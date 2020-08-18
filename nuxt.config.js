console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',

  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',

  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
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

  /*
   ** Global CSS
   */
  css: ['element-ui/lib/theme-chalk/index.css'],

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '@/plugins/element-ui',

    // 扩展 Axios
    // https://axios.nuxtjs.org/extend.html
    '@/plugins/axios',
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',

    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // 如何发起跨域资源请求:
    //    - https://zh.nuxtjs.org/faq/http-proxy
    //    - https://axios.nuxtjs.org/options.html#proxy
    //    - https://github.com/nuxt-community/proxy-module
    '@nuxtjs/axios',
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    proxy: true,
  },

  /*
   ** Proxy module configuration
   */
  proxy: {
    '/api': {
      target: 'http://localhost:3010',
      pathRewrite: {
        '^/api': '/',
      },
    },
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: [/^element-ui/],
  },
}
