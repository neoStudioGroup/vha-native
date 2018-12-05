const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.navigator.connection != 'undefined') {
          Vue.prototype.$vha.network = window.navigator.connection
          Vue.prototype.$vha.network.const = Connection
        } else {
          throw "cordova-plugin-network-information"
        }
      }
      catch(err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha