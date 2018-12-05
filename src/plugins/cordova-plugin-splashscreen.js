const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.navigator.splashscreen != 'undefined') {
          Vue.prototype.$vha.splashscreen = window.navigator.splashscreen
        } else {
          throw "cordova-plugin-splashscreen"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha