const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof plugins.toast != 'undefined') {
          Vue.prototype.$vha.toast = plugins.toast
        } else {
          throw "cordova-plugin-x-toast undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha