const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof plugins.spinnerDialog != 'undefined') {
          Vue.prototype.$vha.spinnerdialog = plugins.spinnerDialog
        } else {
          throw "cordova-plugin-spinnerdialog undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha