const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof window.navigator.app != 'undefined') {
          Vue.prototype.$vha.app = window.navigator.app
        } else {
          throw "navigator.app"
        }
        
        // Vue.prototype.$vha.platform = {
        //   onBackButton: function (onBackButton) {
        //     // document.addEventListener('deviceready', () => {
        //       document.addEventListener("backbutton", onBackButton, false) //返回键
        //     // }, false)
        //   },
        //   offBackButton: function (onBackButton) {
        //     // document.addEventListener('deviceready', () => {
        //       document.removeEventListener("backbutton", onBackButton, false) //返回键
        //     // }, false)
        //   },
        //   onMenuButton: function (onMenuButton) {
        //     // document.addEventListener('deviceready', () => {
        //       document.addEventListener("menubutton", onMenuButton, false) //返回键
        //     // }, false)
        //   },
        //   offMenuButton: function (onMenuButton) {
        //     // document.addEventListener('deviceready', () => {
        //       document.removeEventListener("menubutton", onMenuButton, false) //返回键
        //     // }, false)
        //   },
        //   onSearchButton: function (onSearchButton) {
        //     // document.addEventListener('deviceready', () => {
        //       document.addEventListener("searchbutton", onSearchButton, false) //返回键
        //     // }, false)
        //   },
        //   offSearchButton: function (onSearchButton) {
        //     // document.addEventListener('deviceready', () => {
        //       document.removeEventListener("searchbutton", onSearchButton, false) //返回键
        //     // }, false)
        //   }
        // }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha