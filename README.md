<h1 align="center">vha-native</h1>

<p align="center"><img align="center" width="200" src="https://raw.githubusercontent.com/neoStudioGroup/vha/master/README/native.png"/></p>

<p align="center"><img src="https://raw.githubusercontent.com/neoStudioGroup/vha-appDemo/master/README/qr.png"/></p>

<p align="center">
  <a href="https://www.npmjs.com/package/vha-native"><img src="https://badgen.net/npm/v/vha-native" alt="Version"></a>
  <a href="https://codeload.github.com/neoStudioGroup/vha-native/zip/master"><img src="https://badgen.net/npm/dt/vha-native" alt="downloads"></a>
  <a href="https://github.com/neoStudioGroup/vha-native/blob/master/LICENSE"><img src="https://badgen.net/npm/license/vha-native" alt="License"></a>
</p>

<div align="center">

[![NPM](https://nodei.co/npm/vha-native.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vha-native/)

</div>

## 关于vha-native

统一封装[Vue.js](https://vuejs.org/)调用[Cordova](https://cordova.apache.org/)设备接口插件功能。[vha-native中文文档](https://neostudiogroup.github.io/vha-native)

## 如何使用

添加npm包到项目.

```shell
npm install vha-native --save
```

在main.js内引入插件

```javascript
// import
import Vue from 'vue'
import vhaNative from 'vha-native'
Vue.use(vhaNative)
```

添加device插件（或直接在vha构建平台中选择插件）

```shell
cordova plugin add cordova-plugin-device
```

在代码内直接使用

```javascript
console.log(this.$vha.device)
```

### Demo

[完整的演示app](https://github.com/neoStudioGroup/vha-appDemo)

[apk文件](https://github.com/neoStudioGroup/vha-appDemo/releases/download/0.0.2/vha-appDemo.apk)