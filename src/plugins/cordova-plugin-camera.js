const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.navigator.camera != 'undefined') {
          Vue.prototype.$vha.camera = window.navigator.camera
        } else {
          throw "cordova-plugin-camera"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha