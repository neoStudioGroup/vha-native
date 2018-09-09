const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof navigator.vibrate != 'undefined') {
          Vue.prototype.$vha.vibration = navigator
        } else {
          throw "cordova-plugin-vibration undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha