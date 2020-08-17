export default function ({ $axios, redirect }) {
  /**
   * 拦截请求
   */
  $axios.onRequest((config) => {
    if (process.client) {
      // 浏览器执行的客户端代码
    }
    if (process.server) {
      // Node.js 执行的服务端代码
      // config.headers.host = req.headers.host // host 穿透
    }

    console.log('> Making request to ' + config.url)
  })

  /**
   * 拦截响应
   */
  $axios.onResponse((response) => {
    // 可以添加处理代码
    // 或者不处理直接返回
    return response
  })

  /**
   * 拦截错误
   */
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
    if (code === 404) {
      redirect('/404')
    }
    if (code === 500) {
      redirect('/sorry')
    }
  })
}
