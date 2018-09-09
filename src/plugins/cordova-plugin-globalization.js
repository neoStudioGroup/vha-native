const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof navigator.globalization != 'undefined') {
          Vue.prototype.$vha.globalization = navigator.globalization
        } else {
          throw "cordova-plugin-globalization undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha