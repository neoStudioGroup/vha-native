const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof plugins.pinDialog != 'undefined') {
          Vue.prototype.$vha.pindialog = plugins.pinDialog
        } else {
          throw "cordova-plugin-pin-dialog undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha