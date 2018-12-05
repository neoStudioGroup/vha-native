const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.cordova.plugins.fileOpener2 != 'undefined') {
          Vue.prototype.$vha.fileopener2 = window.cordova.plugins.fileOpener2
        } else {
          throw "cordova-plugin-file-opener2"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha