const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof StatusBar != 'undefined') {
          Vue.prototype.$vha.media = StatusBar
        } else {
          throw "cordova-plugin-media undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha