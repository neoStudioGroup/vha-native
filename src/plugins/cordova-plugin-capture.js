const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof navigator.device.capture != 'undefined') {
          Vue.prototype.$vha.capture = navigator.device.capture
        } else {
          throw "cordova-plugin-media-capture undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha