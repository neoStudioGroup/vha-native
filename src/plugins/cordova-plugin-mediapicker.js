const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.MediaPicker != 'undefined') {
          Vue.prototype.$vha.mediapicker = window.MediaPicker
        } else {
          throw "cordova-plugin-vha-mediapicker undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha