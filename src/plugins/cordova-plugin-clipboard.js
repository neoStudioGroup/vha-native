const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof cordova.plugins.clipboard != 'undefined') {
          Vue.prototype.$vha.clipboard = cordova.plugins.clipboard
        } else {
          throw "cordova-plugin-vha-clipboard undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha