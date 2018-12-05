const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.device != 'undefined') {
          Vue.prototype.$vha.device = window.device
        } else {
          throw "cordova-plugin-device"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha