// How to deploy using PM2 cluster mode?
// https://nuxtjs.org/faq/deployment-pm2

module.exports = {
  apps: [
    {
      name: 'meituan-client-site',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
    },
  ],
}
