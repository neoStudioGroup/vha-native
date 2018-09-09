const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.sqlitePlugin != 'undefined') {
          Vue.prototype.$vha.sqlite = window.sqlitePlugin
        } else {
          throw "cordova-sqlite-storage undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha