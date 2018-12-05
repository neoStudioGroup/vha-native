const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.appAvailability != 'undefined') {
          Vue.prototype.$vha.appavailability = window.appAvailability
        } else {
          throw "cordova-plugin-appavailability"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha