const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      
      // console.log("开始极光")
      
      // document.addEventListener("jpush.receiveRegistrationId", function (event) {
      // }, false)
      // initiateUI()
      
      // let initiateUI = function () {
      //   try {
      //     window.JPush.init();
      //     window.JPush.setDebugMode(true);
      //     window.setTimeout(getRegistrationID, 1000);

      //     if (device.platform != "Android") {
      //       window.JPush.setApplicationIconBadgeNumber(0);
      //     }
      //   } catch (exception) {
      //     console.log(exception);
      //   }
      // }
      
      // let getRegistrationID = function () {
      //   window.JPush.getRegistrationID(onGetRegistrationID);
      // }
      
      // let onGetRegistrationID = function(data) {
      //   try {
      //     console.log("JPushPlugin:registrationID is " + data);
          
      //     if (data.length == 0) {
      //       window.setTimeout(getRegistrationID, 1000);
      //     }
      //   } catch (exception) {
      //     console.log(exception);
      //   }
      // }
      
      
      
      
      try {
        if (typeof JPush != 'undefined') {
          Vue.prototype.$vha.jpush = JPush
        } else {
          throw "jpush-phonegap-plugin undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha