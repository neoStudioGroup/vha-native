const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof navigator.accelerometer != 'undefined') {
          Vue.prototype.$vha.devicemotion = navigator.accelerometer
        } else {
          throw "cordova-plugin-device-motion undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha