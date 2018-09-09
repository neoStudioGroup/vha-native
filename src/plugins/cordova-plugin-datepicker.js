const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof datePicker != 'undefined') {
          Vue.prototype.$vha.datepicker = datePicker
        } else {
          throw "cordova-plugin-datepicker undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha