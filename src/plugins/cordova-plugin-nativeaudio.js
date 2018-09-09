const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.plugins.NativeAudio != 'undefined') {
          Vue.prototype.$vha.nativeaudio = window.plugins.NativeAudio
        } else {
          throw "cordova-plugin-nativeaudio undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha