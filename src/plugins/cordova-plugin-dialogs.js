const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof navigator.notification != 'undefined') {
          Vue.prototype.$vha.dialogs = navigator.notification
        } else {
          throw "cordova-plugin-dialogs undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha