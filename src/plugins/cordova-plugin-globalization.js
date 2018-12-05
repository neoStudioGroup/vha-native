const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.navigator.globalization != 'undefined') {
          Vue.prototype.$vha.globalization = window.navigator.globalization
        } else {
          throw "cordova-plugin-globalization"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha