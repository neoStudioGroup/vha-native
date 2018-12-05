const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.navigator.accelerometer != 'undefined') {
          Vue.prototype.$vha.devicemotion = window.navigator.accelerometer
        } else {
          throw "cordova-plugin-device-motion"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha