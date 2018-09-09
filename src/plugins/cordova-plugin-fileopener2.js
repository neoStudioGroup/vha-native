const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof cordova.plugins.fileOpener2 != 'undefined') {
          Vue.prototype.$vha.fileopener2 = cordova.plugins.fileOpener2
        } else {
          throw "cordova-plugin-file-opener2 undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha