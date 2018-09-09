const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.sms != 'undefined') {
          Vue.prototype.$vha.sms = window.sms
        } else {
          throw "cordova-sms-plugin undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha