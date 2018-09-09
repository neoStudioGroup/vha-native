const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof StatusBar != 'undefined') {
          Vue.prototype.$vha.statusbar = StatusBar
        } else {
          throw "cordova-plugin-statusbar undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha