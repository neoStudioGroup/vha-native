const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.navigator.device.capture != 'undefined') {
          Vue.prototype.$vha.capture = window.navigator.device.capture
        } else {
          throw "cordova-plugin-media-capture"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha