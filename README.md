<h1 align="center">vha-native</h1>
<p align="center">
  <em>扫描二维码下载apk体验</em>
</p>
<p align="center"><img align="center" width="200" src="https://raw.githubusercontent.com/neoStudioGroup/vha/master/README/logo.png"/></p>

## 关于vha-native

统一封装了[Vue.js](https://vuejs.org/)调用设备接口的[Cordova](https://cordova.apache.org/)插件  [vha-native中文文档](https://neostudiogroup.github.io/vha-native)

## 如何使用

添加npm包到项目.

```shell
npm install vha-native --save
```

在main.js内引入插件

```javascript
// import
import Vue from 'vue'
import VueNative from 'vha-native'
Vue.use(VueNative)
```

添加device插件(或者直接在vhaGUI中选择插件)

```shell
cordova plugin add cordova-plugin-device
```

在任意代码内直接引用

```javascript
console.log(this.$vha.device)
```

### Demo

[完整的演示app](https://github.com/neoStudioGroup/vha-appDemo)

[apk文件](https://github.com/neoStudioGroup/vha-appDemo/releases/download/0.0.2/vha-appDemo.apk)


Thanks vue-cordova ngCordova
