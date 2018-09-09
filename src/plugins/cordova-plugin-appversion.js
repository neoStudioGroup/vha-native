const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof cordova.getAppVersion != 'undefined') {
          Vue.prototype.$vha.appversion = cordova.getAppVersion
        } else {
          throw "cordova-plugin-app-version undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha