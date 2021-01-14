const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(proxy.createProxyMiddleware('/test', {
    target: 'http://vs.5eplay.com/?mod=vs&action=ajax&op=vslist&vsquery=game:&page=0&_=1610592235407',
    changeOrigin: true
  }))
}
