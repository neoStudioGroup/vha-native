const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof cordova.plugins.barcodeScanner != 'undefined') {
          Vue.prototype.$vha.barcodescanner = cordova.plugins.barcodeScanner
        } else {
          throw "phonegap-plugin-barcodescanner undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha