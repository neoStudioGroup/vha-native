const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.zip != 'undefined') {
          Vue.prototype.$vha.zip = window.zip
        } else {
          throw "cordova-plugin-zip"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha