const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof cordova.InAppBrowser != 'undefined') {
          Vue.prototype.$vha.inappbrowser = cordova.InAppBrowser
        } else {
          throw "cordova-plugin-inappbrowser undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha