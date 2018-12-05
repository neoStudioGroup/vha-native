const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.cordova.plugins.locationManager != 'undefined') {
          Vue.prototype.$vha.ibeacon = window.cordova.plugins.locationManager
        } else {
          throw "cordova-plugin-ibeacon"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha