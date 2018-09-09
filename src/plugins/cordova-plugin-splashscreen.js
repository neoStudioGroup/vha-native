const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof navigator.splashscreen != 'undefined') {
          // return callback(false)
          Vue.prototype.$vha.splashscreen = navigator.splashscreen
        } else {
          throw "cordova-plugin-splashscreen undefined"
        }
        
        // Vue.prototype.$vha.camera = {
        //   getPicture: (options) => { 
        //     return new Promise((resolve, reject) => {
        //       document.addEventListener('deviceready', () => {
        //         resolve(navigator.camera.getPicture(options))
        //       }, false)
        //       reject(-1)
        //     })
        //   },
        // }
        
        // return callback(true)
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha