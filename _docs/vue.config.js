const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

let title = 'vha-native 文档';

module.exports = {
  baseUrl: 'vha-native',
  outputDir: path.join(__dirname, '..') + '\\docs',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      stylus: {
        import: path.resolve(__dirname, './src/assets/stylus/mixin.styl')
      }
    }
  },
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, '..') + '\\docs',
        routes: [
          '/', 
          '/Getting-Started', 
          '/Splashscreen'
        ],
        postProcessHtml: function (context) {
          var titles = {// 在这里配置每个页面的标题
            '/': title,
            '/Getting-Started': '快速开始' + ' ' + title
          }
          return context.html.replace(
            /<title>[^<]*<\/title>/i,
            '<title>' + titles[context.route] + '</title>'
          )
        }
      })
    ]
  }
}