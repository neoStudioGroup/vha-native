const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.StatusBar != 'undefined') {
          Vue.prototype.$vha.statusbar = window.StatusBar
        } else {
          throw "cordova-plugin-statusbar"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha