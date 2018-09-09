const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof navigator.connection != 'undefined') {
          Vue.prototype.$vha.network = navigator.connection
          Vue.prototype.$vha.network.const = Connection
        } else {
          throw "cordova-plugin-network-information undefined"
        }
      }
      catch(err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha