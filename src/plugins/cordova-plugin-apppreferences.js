const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.plugins.appPreferences != 'undefined') {
          Vue.prototype.$vha.apppreferences = window.plugins.appPreferences
        } else {
          throw "cordova-plugin-app-preferences"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha