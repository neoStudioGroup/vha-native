const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.cordova.plugins.barcodeScanner != 'undefined') {
          Vue.prototype.$vha.barcodescanner = window.cordova.plugins.barcodeScanner
        } else {
          throw "phonegap-plugin-barcodescanner"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha