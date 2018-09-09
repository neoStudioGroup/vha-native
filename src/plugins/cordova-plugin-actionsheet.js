const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof plugins.actionsheet != 'undefined') {
          Vue.prototype.$vha.actionsheet = plugins.actionsheet
        } else {
          throw "cordova-plugin-actionsheet undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha