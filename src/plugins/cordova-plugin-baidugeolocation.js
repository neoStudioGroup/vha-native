const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.baidumap_location != 'undefined') {
          Vue.prototype.$vha.baidugeolocation = window.baidumap_location
        } else {
          throw "cordova-plugin-baidumaplocation undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha