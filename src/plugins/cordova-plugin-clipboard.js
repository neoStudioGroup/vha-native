const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.cordova.plugins.clipboard != 'undefined') {
          Vue.prototype.$vha.clipboard = window.cordova.plugins.clipboard
        } else {
          throw "cordova-plugin-vha-clipboard"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha