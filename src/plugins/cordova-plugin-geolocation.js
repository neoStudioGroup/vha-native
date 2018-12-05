const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.navigator.geolocation != 'undefined') {
          Vue.prototype.$vha.geolocation = window.navigator.geolocation
        } else {
          throw "cordova-plugin-geolocation"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha