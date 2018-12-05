const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.plugins.flashlight != 'undefined') {
          Vue.prototype.$vha.flashlight = window.plugins.flashlight
        } else {
          throw "cordova-plugin-flashlight"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha