const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof ProgressIndicator != 'undefined') {
          Vue.prototype.$vha.progress = ProgressIndicator
        } else {
          throw "cordova-plugin-progress undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha