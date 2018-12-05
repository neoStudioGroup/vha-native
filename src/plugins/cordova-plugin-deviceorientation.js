const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.navigator.compass != 'undefined') {
          Vue.prototype.$vha.deviceorientation = window.navigator.compass
        } else {
          throw "cordova-plugin-device-orientation"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha