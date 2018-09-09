const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.AppRate != 'undefined') {
          Vue.prototype.$vha.apprate = window.AppRate
        } else {
          throw "cordova-plugin-apprate undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha