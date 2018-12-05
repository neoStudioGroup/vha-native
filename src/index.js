import platform from './plugins/cordova-plugin-platform'

// 系统 System
import splashscreen from './plugins/cordova-plugin-splashscreen'
import statusbar from './plugins/cordova-plugin-statusbar'
import badge from './plugins/cordova-plugin-badge'
import network from './plugins/cordova-plugin-network'
import clipboard from './plugins/cordova-plugin-clipboard'
import toast from './plugins/cordova-plugin-toast'
import dialogs from './plugins/cordova-plugin-dialogs'
import file from './plugins/cordova-plugin-file'
import filetransfer from './plugins/cordova-plugin-filetransfer'
import fileopener2 from './plugins/cordova-plugin-fileopener2'
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

// 设备 device
import device from './plugins/cordova-plugin-device'
import globalization from './plugins/cordova-plugin-globalization'
import geolocation from './plugins/cordova-plugin-geolocation'
import camera from './plugins/cordova-plugin-camera'
import capture from './plugins/cordova-plugin-capture'
import barcodescanner from './plugins/cordova-plugin-barcodescanner'
import deviceorientation from './plugins/cordova-plugin-deviceorientation'
import devicemotion from './plugins/cordova-plugin-devicemotion'
import flashlight from './plugins/cordova-plugin-flashlight'
import vibration from './plugins/cordova-plugin-vibration'
import ibeacon from './plugins/cordova-plugin-ibeacon'
import bluetooth from './plugins/cordova-plugin-bluetooth'

// 其它 other
import sqlite from './plugins/cordova-plugin-sqlite'


const vha = {
  install(Vue, options) {
    // 注入 cordova.js
    let cordovaScript = document.createElement('script')
    cordovaScript.setAttribute('type', 'text/javascript')
    cordovaScript.setAttribute('src', 'cordova.js')
    document.body.appendChild(cordovaScript)
    
    // 如果捕获到cordova.js错误 则判定注入失败 说明运行在服务环境 移除cordova插件并注入模拟数据
    window.onerror = function (msg, url, line) {
      if (url.indexOf("cordova.js") != -1 && msg === "Uncaught SyntaxError: Unexpected token <") {
        console.log("cordova.js注入失败(调试模式)，使用模拟cordova数据。(cordova.js inject fail, use cordova-mocks.)")
        cordovaScript.remove()
        require('./cordova-mocks.js')
        
        // 广播deviceready事件
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
    Vue.use(toast)
    Vue.use(dialogs)
    Vue.use(file)
    Vue.use(filetransfer)
    Vue.use(fileopener2)
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

    // 设备 device
    Vue.use(device)
    Vue.use(globalization)
    Vue.use(geolocation)
    Vue.use(camera)
    Vue.use(capture)
    Vue.use(barcodescanner)
    Vue.use(deviceorientation)
    Vue.use(devicemotion)
    Vue.use(flashlight)
    Vue.use(vibration)
    Vue.use(ibeacon)
    Vue.use(bluetooth)
    
    // 其它 other
    Vue.use(sqlite)
    
    console.log('this.$vha', Vue.prototype.$vha)
  }
}
export default vha