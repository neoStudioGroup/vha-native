const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.navigator.vibrate != 'undefined') {
          Vue.prototype.$vha.vibration = window.navigator
        } else {
          throw "cordova-plugin-vibration"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha