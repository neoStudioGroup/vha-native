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
        postProcessHtml: function (context) {
          var titles = {// 在这里配置每个页面的标题
            '/': title,
            '/Getting-Started': '快速开始' + ' ' + title, 
            
            // 系统 System
            '/Splashscreen': 'Splashscreen' + ' ' + title, 
            '/StatusBar': 'StatusBar' + ' ' + title, 
            '/Network': 'Network' + ' ' + title, 
            '/Clipboard': 'Clipboard' + ' ' + title, 
            '/JPush': 'JPush' + ' ' + title, 
            '/Toast': 'Toast' + ' ' + title, 
            '/Dialogs': 'Dialogs' + ' ' + title, 
            '/File': 'File' + ' ' + title, 
            '/FileTransfer': 'File Transfer' + ' ' + title, 
            '/FileOpener2': 'FileOpener2' + ' ' + title, 
            '/NativeAudio': 'Native Audio' + ' ' + title, 
            '/ImagePicker': 'Image Picker' + ' ' + title, 
            '/SMS': 'SMS' + ' ' + title, 
            '/Contacts': 'Contacts' + ' ' + title, 
            '/InAppBrowser': 'In App Browser' + ' ' + title, 
            '/AppVersion': 'App Version' + ' ' + title, 
            '/AppAvailability': 'App Availability' + ' ' + title, 
            '/AppRate': 'App Rate' + ' ' + title, 
            '/AppPreferences': 'App Preferences' + ' ' + title, 

            // 设备 Device
            '/Device': 'Device' + ' ' + title, 
            '/BatteryStatus': 'Battery Status' + ' ' + title, 
            '/Globalization': 'Globalization' + ' ' + title, 
            '/Geolocation': 'Geolocation' + ' ' + title, 
            '/Camera': 'Camera' + ' ' + title, 
            '/Capture': 'Capture' + ' ' + title, 
            '/Media': 'Media' + ' ' + title, 
            '/BarcodeScanner': 'Barcode Scanner' + ' ' + title, 
            '/DeviceOrientation': 'Device Orientation' + ' ' + title, 
            '/DeviceMotion': 'Device Motion' + ' ' + title, 
            '/Flashlight': 'Flashlight' + ' ' + title, 
            '/Vibration': 'Vibration' + ' ' + title, 
            '/iBeacon': 'iBeacon' + ' ' + title, 
            '/Bluetooth': 'Bluetooth' + ' ' + title, 

            // 其它 Other
            '/AppLogin': 'App Login' + ' ' + title, 
            '/SQLite': 'SQLite' + ' ' + title
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