const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.cordova.InAppBrowser != 'undefined') {
          Vue.prototype.$vha.inappbrowser = window.cordova.InAppBrowser
        } else {
          throw "cordova-plugin-inappbrowser"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha