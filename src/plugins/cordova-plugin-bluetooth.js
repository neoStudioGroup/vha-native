const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.ble != 'undefined') {
          Vue.prototype.$vha.bluetooth = window.ble
        } else {
          throw "cordova-plugin-ble-central undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha