import platform from './plugins/cordova-plugin-platform'

// 系统 System
import splashscreen from './plugins/cordova-plugin-splashscreen'
import statusbar from './plugins/cordova-plugin-statusbar'
import badge from './plugins/cordova-plugin-badge'
import network from './plugins/cordova-plugin-network'
import clipboard from './plugins/cordova-plugin-clipboard'
// import localnotification from './plugins/cordova-plugin-localnotification'
import jpush from './plugins/cordova-plugin-jpush'
import toast from './plugins/cordova-plugin-toast'
import dialogs from './plugins/cordova-plugin-dialogs'
// import pindialog from './plugins/cordova-plugin-pindialog'
// import actionsheet from './plugins/cordova-plugin-actionsheet'
// import progressindicator from './plugins/cordova-plugin-progressindicator'
// import spinnerdialog from './plugins/cordova-plugin-spinnerdialog'
// import datepicker from './plugins/cordova-plugin-datepicker'
import file from './plugins/cordova-plugin-file'
import filetransfer from './plugins/cordova-plugin-filetransfer'
import fileopener2 from './plugins/cordova-plugin-fileopener2'
import imagepicker from './plugins/cordova-plugin-imagepicker'
import mediapicker from './plugins/cordova-plugin-mediapicker'
import nativeaudio from './plugins/cordova-plugin-nativeaudio'
import contacts from './plugins/cordova-plugin-contacts'
import sms from './plugins/cordova-plugin-sms'
import inappbrowser from './plugins/cordova-plugin-inappbrowser'
// import keyboard from './plugins/cordova-plugin-keyboard'
import zip from './plugins/cordova-plugin-zip'
import appversion from './plugins/cordova-plugin-appversion'
import appavailability from './plugins/cordova-plugin-appavailability'
import apprate from './plugins/cordova-plugin-apprate'
import apppreferences from './plugins/cordova-plugin-apppreferences'

// // 设备 device
import device from './plugins/cordova-plugin-device'
// import batterystatus from './plugins/cordova-plugin-batterystatus'
import globalization from './plugins/cordova-plugin-globalization'
import geolocation from './plugins/cordova-plugin-geolocation'
import baidugeolocation from './plugins/cordova-plugin-baidugeolocation'
import camera from './plugins/cordova-plugin-camera'
import capture from './plugins/cordova-plugin-capture'
// import media from './plugins/cordova-plugin-media'
import barcodescanner from './plugins/cordova-plugin-barcodescanner'
import deviceorientation from './plugins/cordova-plugin-deviceorientation'
import devicemotion from './plugins/cordova-plugin-devicemotion'
import flashlight from './plugins/cordova-plugin-flashlight'
import vibration from './plugins/cordova-plugin-vibration'
import ibeacon from './plugins/cordova-plugin-ibeacon'
import bluetooth from './plugins/cordova-plugin-bluetooth'
import touchid from './plugins/cordova-plugin-touchid'
import launchnavigator from './plugins/cordova-plugin-launchnavigator'

// // 其它 other
// import applogin from './plugins/cordova-plugin-applogin'
import sqlite from './plugins/cordova-plugin-sqlite'
// import keychain from './plugins/cordova-plugin-keychain'


const vha = {
  install(Vue, options) {
    // add cordova.js
    let cordovaScript = document.createElement('script')
    cordovaScript.setAttribute('type', 'text/javascript')
    cordovaScript.setAttribute('src', 'cordova.js')
    document.body.appendChild(cordovaScript)
    
    //如果捕获到cordova.js错误 则判定注入失败 说明运行在服务环境 移除cordova插件并注入模拟数据
    window.onerror = function (msg, url, line) {
      if (url.indexOf("cordova.js") != -1 && msg === "Uncaught SyntaxError: Unexpected token <") {
        console.log("cordova.js注入失败，改用模拟cordova数据。(cordova.js inject fail, use cordova-mocks.)")
        cordovaScript.remove()
        require('./cordova-mocks.js')
        
        var evObj = document.createEvent("MouseEvents")
        evObj.initEvent("deviceready", true, true)
        document.dispatchEvent(evObj)
      }
      return true
    }
    
    document.addEventListener('deviceready', () => {
      Vue.prototype.$vha.deviceready = true
    }, false)
    
    Vue.prototype.$vha = {
      deviceready: false
    }
    
    
    Vue.use(platform)
    
    // 系统 System
    Vue.use(splashscreen)
    Vue.use(statusbar)
    Vue.use(badge)
    Vue.use(network)
    Vue.use(clipboard)
    // Vue.use(localnotification)
    Vue.use(jpush)
    Vue.use(toast)
    Vue.use(dialogs)
    // Vue.use(pindialog)
    // Vue.use(actionsheet)
    // Vue.use(progressindicator)
    // Vue.use(spinnerdialog)
    // Vue.use(datepicker)
    Vue.use(file)
    Vue.use(filetransfer)
    Vue.use(fileopener2)
    Vue.use(imagepicker)
    Vue.use(mediapicker)
    Vue.use(nativeaudio)
    Vue.use(contacts)
    Vue.use(sms)
    Vue.use(inappbrowser)
    // Vue.use(keyboard)
    Vue.use(zip)
    Vue.use(appversion)
    Vue.use(appavailability)
    Vue.use(apprate)
    Vue.use(apppreferences)

    // // 设备 device
    Vue.use(device)
    // Vue.use(batterystatus)
    Vue.use(globalization)
    Vue.use(geolocation)
    Vue.use(baidugeolocation)
    Vue.use(camera)
    Vue.use(capture)
    // Vue.use(media)
    Vue.use(barcodescanner)
    Vue.use(deviceorientation)
    Vue.use(devicemotion)
    Vue.use(flashlight)
    Vue.use(vibration)
    Vue.use(ibeacon)
    Vue.use(bluetooth)
    Vue.use(touchid)
    Vue.use(launchnavigator)
    
    // // 其它 other
    // Vue.use(applogin)
    Vue.use(sqlite)
    // Vue.use(keychain)
    
    // pluginsList.forEach(pluginName => {
    //   let plugin = require('./plugins/' + pluginName)
    //   plugin.install(Vue, options, pluginLoaded => {
    //     if (pluginLoaded) {
    //       console.log("加载插件成功：" + pluginName)
    //     } else {
    //       console.log("加载插件失败：" + pluginName)
    //     }
    //   })
    // })
    
    console.log(Vue.prototype.$vha)
  }
}
export default vha