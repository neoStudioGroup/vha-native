const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.navigator.notification != 'undefined') {
          Vue.prototype.$vha.dialogs = window.navigator.notification
        } else {
          throw "cordova-plugin-dialogs"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha