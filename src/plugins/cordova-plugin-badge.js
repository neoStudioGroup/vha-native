const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.cordova.plugins.notification.badge != 'undefined') {
          Vue.prototype.$vha.badge = window.cordova.plugins.notification.badge
        } else {
          throw "cordova-plugin-badge"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha