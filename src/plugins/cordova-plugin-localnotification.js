const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      if (typeof notification.local != 'undefined') {
        Vue.prototype.$vha.localnotification = notification.local
      } else {
        throw "de.appplant.cordova.plugin.local-notification undefined"
      }
    }, false)
  }
}
export default vha