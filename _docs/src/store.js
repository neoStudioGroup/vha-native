import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// import toLink from "./components/toLink"
Vue.mixin({
  components: {
    //组件 - 引入或定义
    // toLink
  },
  created: function () {
    //实例创建完成后
  },
  methods: {
    //方法 - 进入页面创建
    // toLink: function (herf, event) {
    //   console.log(event)
    //   this.$router.push(herf)
    // }
  }
})

export default new Vuex.Store({
  state: {
    showSidebar: false, 
    showSideOutrouter: '', 
    showSidebarSrc: '', 
    // {
    //   text: '启动屏幕',
    //   note: 'Splashscreen',
    //   noteClass: '',
    //   href: '/Splashscreen',
    //   select: false,
    //   showItem: false,
    //   item: [
    //     {
    //       subText: '方法',
    //       subNote: '',
    //       noteClass: '',
    //       href: '#Methods',
    //       select: false
    //     },
    //     {
    //       subText: '代码实例',
    //       subNote: '',
    //       noteClass: '',
    //       href: '#code',
    //       select: false
    //     }
    //   ]
    // },
    // {
    //   text: '状态栏',
    //   note: 'StatusBar',
    //   noteClass: '',
    //   href: '/StatusBar',
    //   select: false,
    //   showItem: false,
    //   item: [
    //   ]
    // },
    // {
    //   text: '网络状态',
    //   note: 'Network',
    //   noteClass: '',
    //   href: '/Network',
    //   select: false,
    //   showItem: false,
    //   item: [
    //   ]
    // },
    // {text: '极光推送',  note: 'JPush', noteClass: '', href: '/JPush', select: false, showItem: false, item: [
    // {subText: '方法', subNote: '', noteClass: '', href: '#Methods', select: false
    // },{subText: '应用场景', subNote: '', noteClass: '', href: '#Scenes', select: false
    // },{subText: '代码实例', subNote: '', noteClass: '', href: '#code', select: false
    // }]},
    menus: [
      {
        title: 'Documentation',
        list: [
          {
            text: '快速开始',
            note: 'Getting Started',
            noteClass: '',
            href: '/GettingStarted',
            select: false,
            showItem: false,
            item: [
{subText: '启动屏幕', subNote: 'Splashscreen', noteClass: '', href: '#documentationgetting_started', select: false},
{subText: '状态栏', subNote: 'StatusBar', noteClass: '', href: '#documentationauthentication', select: false},
{subText: '网络状态', subNote: 'Network', noteClass: '', href: '#documentationerrors', select: false}
            ]
          }
        ]
      },
      {
        title: '系统 System',
        list: [
{text: '启动屏幕', note: 'Splashscreen', noteClass: '', href: '/Splashscreen', select: false, showItem: false, item: []},
{text: '状态栏', note: 'StatusBar', noteClass: '', href: '/StatusBar', select: false, showItem: false, item: []},
{text: '网络状态', note: 'Network', noteClass: '', href: '/Network', select: false, showItem: false, item: []},
{text: '剪贴板', note: 'Clipboard', noteClass: '', href: '/Clipboard', select: false, showItem: false, item: []},
{text: '极光推送', note: 'JPush', noteClass: '', href: '/JPush', select: false, showItem: false, item: []},
{text: '信息提示', note: 'Toast', noteClass: '', href: '/Toast', select: false, showItem: false, item: []},
{text: '对话框', note: 'Dialogs', noteClass: '', href: '/Dialogs', select: false, showItem: false, item: []},
{text: '文件', note: 'File', noteClass: '', href: '/File', select: false, showItem: false, item: []},
{text: '文件传输', note: 'File Transfer', noteClass: '', href: '/FileTransfer', select: false, showItem: false, item: []},
{text: '打开文件', note: 'FileOpener2', noteClass: '', href: '/FileOpener2', select: false, showItem: false, item: []},
{text: '系统相册', note: 'Image Picker', noteClass: '', href: '/ImagePicker', select: false, showItem: false, item: []},
{text: '播放音乐', note: 'Native Audio', noteClass: '', href: '/NativeAudio', select: false, showItem: false, item: []},
{text: '通讯录管理', note: 'Contacts', noteClass: '', href: '/Contacts', select: false, showItem: false, item: []},
{text: '短信', note: 'SMS', noteClass: '', href: '/SMS', select: false, showItem: false, item: []},
{text: '内置浏览器', note: 'In App Browser', noteClass: '', href: '/InAppBrowser', select: false, showItem: false, item: []},
{text: '应用版本', note: 'App Version', noteClass: '', href: '/AppVersion', select: false, showItem: false, item: []},
{text: '应用是否存在', note: 'App Availability', noteClass: '', href: '/AppAvailability', select: false, showItem: false, item: []},
{text: '应用评价', note: 'App Rate', noteClass: '', href: '/AppRate', select: false, showItem: false, item: []},
{text: '应用配置项', note: 'App Preferences', noteClass: '', href: '/AppPreferences', select: false, showItem: false, item: []}
        ]
      },
      {
        title: '设备 Device',
        list: [
{text: '设备信息', note: 'Device', noteClass: '', href: '/Device', select: false, showItem: false, item: []},
{text: '电池信息', note: 'Battery Status', noteClass: '', href: '/BatteryStatus', select: false, showItem: false, item: []},
{text: '地区/时区', note: 'Globalization', noteClass: '', href: '/Globalization', select: false, showItem: false, item: []},
{text: '地理位置', note: 'Geolocation', noteClass: '', href: '/Geolocation', select: false, showItem: false, item: []},
{text: '摄像头拍照', note: 'Camera', noteClass: '', href: '/Camera', select: false, showItem: false, item: []},
{text: '录制', note: 'Capture', noteClass: '', href: '/Capture', select: false, showItem: false, item: []},
{text: '录制音频', note: 'Media', noteClass: '', href: '/Media', select: false, showItem: false, item: []},
{text: '条形码/二维码扫描', note: 'Barcode Scanner', noteClass: '', href: '/BarcodeScanner', select: false, showItem: false, item: []},
{text: '方向传感器', note: 'Device Orientation', noteClass: '', href: '/DeviceOrientation', select: false, showItem: false, item: []},
{text: '陀螺仪传感器', note: 'Device Motion', noteClass: '', href: '/DeviceMotion', select: false, showItem: false, item: []},
{text: '闪光灯', note: 'Flashlight', noteClass: '', href: '/Flashlight', select: false, showItem: false, item: []},
{text: '震动', note: 'Vibration', noteClass: '', href: '/Vibration', select: false, showItem: false, item: []},
{text: 'iBeacon', note: 'iBeacon', noteClass: '', href: '/iBeacon', select: false, showItem: false, item: []},
{text: '蓝牙', note: 'Bluetooth', noteClass: '', href: '/Bluetooth', select: false, showItem: false, item: []}
        ]
      },
      {
        title: '其它 Other',
        list: [
{text: 'QQ 微信登陆', note: 'App Login', noteClass: '', href: '/AppLogin', select: false, showItem: false, item: []},
{text: '本地数据库', note: 'SQLite', noteClass: '', href: '/SQLite', select: false, showItem: false, item: []}
        ]
      }
    ]
    
  },
  mutations: {
  },
  actions: {
  }
})
