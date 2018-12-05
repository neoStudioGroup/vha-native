const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.Keyboard != 'undefined') {
          Vue.prototype.$vha.keyboard = window.Keyboard
        } else {
          throw "cordova-plugin-keyboard"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha