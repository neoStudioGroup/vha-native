const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

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
          '/GettingStarted', 
          
          // 系统 System
          '/Splashscreen', 
          '/StatusBar', 
          '/Network', 
          '/Clipboard', 
          '/JPush', 
          '/Toast', 
          '/Dialogs', 
          '/File', 
          '/FileTransfer', 
          '/FileOpener2', 
          '/NativeAudio', 
          '/ImagePicker', 
          '/SMS', 
          '/Contacts', 
          '/InAppBrowser', 
          '/AppVersion', 
          '/AppAvailability', 
          '/AppRate', 
          '/AppPreferences', 

          // 设备 Device
          '/Device', 
          '/BatteryStatus', 
          '/Globalization', 
          '/Geolocation', 
          '/Camera', 
          '/Capture', 
          '/Media', 
          '/BarcodeScanner', 
          '/DeviceOrientation', 
          '/DeviceMotion', 
          '/Flashlight', 
          '/Vibration', 
          '/iBeacon', 
          '/Bluetooth', 

          // 其它 Other
          '/AppLogin', 
          '/SQLite'
        ],
        postProcess(context) {
          // 在这里配置每个页面的标题
          let titles = {
            '/': 'vha-native 接口文档',
            '/GettingStarted': '快速开始 - vha-native 接口文档'
          }
          
          let temp_title = titles[context.route]
          // 如果在titles内没找到title就用context.route里的title
          if (!temp_title) {
            temp_title = context.route.replace(/\//g, '').replace(/-/g, ' ') + ' - vha-native 接口文档'
          }
          
          context.html = context.html.replace(
            /<title>[^<]*<\/title>/i,
            `<title>${temp_title}</title>`
          )
          return context
        }
      })
    ]
  }
}