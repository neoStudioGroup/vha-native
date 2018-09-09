const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof navigator.camera != 'undefined') {
          Vue.prototype.$vha.camera = navigator.camera
        } else {
          throw "cordova-plugin-camera undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha