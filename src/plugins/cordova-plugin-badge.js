const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof cordova.plugins.notification.badge != 'undefined') {
          Vue.prototype.$vha.badge = cordova.plugins.notification.badge
        } else {
          throw "cordova-plugin-badge undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha