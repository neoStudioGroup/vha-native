const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof navigator.compass != 'undefined') {
          Vue.prototype.$vha.deviceorientation = navigator.compass
        } else {
          throw "cordova-plugin-device-orientation undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha