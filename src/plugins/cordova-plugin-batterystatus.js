const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof StatusBar != 'undefined') {
          Vue.prototype.$vha.batterystatus = StatusBar
        } else {
          throw "cordova-plugin-battery-status undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha