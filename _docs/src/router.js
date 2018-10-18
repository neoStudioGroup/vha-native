import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index.vue'
import GettingStarted from '@/pages/index/Getting-Started.vue'

// 系统 System
import Splashscreen from '@/pages/index/Splashscreen'
import StatusBar from '@/pages/index/StatusBar'
import Network from '@/pages/index/Network'
import Clipboard from '@/pages/index/Clipboard'
import JPush from '@/pages/index/JPush'
import Toast from '@/pages/index/Toast'
import Dialogs from '@/pages/index/Dialogs'
import File from '@/pages/index/File'
import FileTransfer from '@/pages/index/File-Transfer'
import FileOpener2 from '@/pages/index/FileOpener2'
import NativeAudio from '@/pages/index/Native-Audio'
import ImagePicker from '@/pages/index/Image-Picker'
import SMS from '@/pages/index/SMS'
import Contacts from '@/pages/index/Contacts'
import InAppBrowser from '@/pages/index/In-App-Browser'
import AppVersion from '@/pages/index/App-Version'
import AppAvailability from '@/pages/index/App-Availability'
import AppRate from '@/pages/index/App-Rate'
import AppPreferences from '@/pages/index/App-Preferences'

// 设备 Device
import Device from '@/pages/index/Device'
import BatteryStatus from '@/pages/index/Battery-Status'
import Globalization from '@/pages/index/Globalization'
import Geolocation from '@/pages/index/Geolocation'
import Camera from '@/pages/index/Camera'
import Capture from '@/pages/index/Capture'
import Media from '@/pages/index/Media'
import BarcodeScanner from '@/pages/index/Barcode-Scanner'
import DeviceOrientation from '@/pages/index/Device-Orientation'
import DeviceMotion from '@/pages/index/Device-Motion'
import Flashlight from '@/pages/index/Flashlight'
import Vibration from '@/pages/index/Vibration'
import iBeacon from '@/pages/index/iBeacon'
import Bluetooth from '@/pages/index/Bluetooth'

// 其它 Other
import AppLogin from '@/pages/index/App-Login'
import SQLite from '@/pages/index/SQLite'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { 
      path: '/',
      component: index,
      redirect: '/Getting-Started',
      children: [
        {
          path: '/Getting-Started',
          name: 'Getting-Started',
          component: GettingStarted
        },
        
        // 系统 System
        {
          path: '/Splashscreen',
          name: 'Splashscreen',
          component: Splashscreen
        },
        {
          path: '/StatusBar',
          name: 'StatusBar',
          component: StatusBar
        },
        {
          path: '/Network',
          name: 'Network',
          component: Network
        },
        {
          path: '/Clipboard',
          name: 'Clipboard',
          component: Clipboard
        },
        {
          path: '/JPush',
          name: 'JPush',
          component: JPush
        },
        {
          path: '/Toast',
          name: 'Toast',
          component: Toast
        },
        {
          path: '/Dialogs',
          name: 'Dialogs',
          component: Dialogs
        },
        {
          path: '/File',
          name: 'File',
          component: File
        },
        {
          path: '/FileTransfer',
          name: 'FileTransfer',
          component: FileTransfer
        },
        {
          path: '/FileOpener2',
          name: 'FileOpener2',
          component: FileOpener2
        },
        {
          path: '/NativeAudio',
          name: 'NativeAudio',
          component: NativeAudio
        },
        {
          path: '/ImagePicker',
          name: 'ImagePicker',
          component: ImagePicker
        },
        {
          path: '/SMS',
          name: 'SMS',
          component: SMS
        },
        {
          path: '/Contacts',
          name: 'Contacts',
          component: Contacts
        },
        {
          path: '/InAppBrowser',
          name: 'InAppBrowser',
          component: InAppBrowser
        },
        {
          path: '/AppVersion',
          name: 'AppVersion',
          component: AppVersion
        },
        {
          path: '/AppAvailability',
          name: 'AppAvailability',
          component: AppAvailability
        },
        {
          path: '/AppRate',
          name: 'AppRate',
          component: AppRate
        },
        {
          path: '/AppPreferences',
          name: 'AppPreferences',
          component: AppPreferences
        },
        
        // 设备 Device
        {
          path: '/Device',
          name: 'Device',
          component: Device
        },
        {
          path: '/BatteryStatus',
          name: 'BatteryStatus',
          component: BatteryStatus
        },
        {
          path: '/Globalization',
          name: 'Globalization',
          component: Globalization
        },
        {
          path: '/Geolocation',
          name: 'Geolocation',
          component: Geolocation
        },
        {
          path: '/Camera',
          name: 'Camera',
          component: Camera
        },
        {
          path: '/Capture',
          name: 'Capture',
          component: Capture
        },
        {
          path: '/Media',
          name: 'Media',
          component: Media
        },
        {
          path: '/BarcodeScanner',
          name: 'BarcodeScanner',
          component: BarcodeScanner
        },
        {
          path: '/DeviceOrientation',
          name: 'DeviceOrientation',
          component: DeviceOrientation
        },
        {
          path: '/DeviceMotion',
          name: 'DeviceMotion',
          component: DeviceMotion
        },
        {
          path: '/Flashlight',
          name: 'Flashlight',
          component: Flashlight
        },
        {
          path: '/Vibration',
          name: 'Vibration',
          component: Vibration
        },
        {
          path: '/iBeacon',
          name: 'iBeacon',
          component: iBeacon
        },
        {
          path: '/Bluetooth',
          name: 'Bluetooth',
          component: Bluetooth
        },

        // 其它 Other
        {
          path: '/AppLogin',
          name: 'AppLogin',
          component: AppLogin
        },
        {
          path: '/SQLite',
          name: 'SQLite',
          component: SQLite
        }
      ]
    }
  ]
})
