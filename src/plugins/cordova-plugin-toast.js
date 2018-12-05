const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.plugins.toast != 'undefined') {
          Vue.prototype.$vha.toast = window.plugins.toast
        } else {
          throw "cordova-plugin-x-toast"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha