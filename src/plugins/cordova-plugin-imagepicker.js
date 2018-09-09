const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.imagePicker != 'undefined') {
          Vue.prototype.$vha.imagepicker = window.imagePicker
        } else {
          throw "cordova-plugin-vha-imagepicker undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha