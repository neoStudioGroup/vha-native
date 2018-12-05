const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.cordova.getAppVersion != 'undefined') {
          Vue.prototype.$vha.appversion = window.cordova.getAppVersion
        } else {
          throw "cordova-plugin-app-version"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha