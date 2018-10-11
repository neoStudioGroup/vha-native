
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  baseUrl: 'vha-native',
  outputDir: path.join(__dirname, '..') + '\\docs',
  productionSourceMap: false,
  
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, '..') + '\\docs',
        routes: [ 
          '/', 
          '/aaa', 
          '/bbb' 
        ]
      })
    ]  
  }  
}


