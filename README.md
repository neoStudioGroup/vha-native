

翻译了一些常用插件
统一或直接调用cordova插件。vha-native中文文档



[vha-native](https://github.com/neoStudioGroup/vha-native)

[Vue.js](https://vuejs.org/) plugin for [Cordova](https://cordova.apache.org/)


# How to use

Add the NPM package to your project

```shell
npm install vha-native --save
```

Add the plugin to your Vue instance according to your setup

```javascript
// CommonJS
var Vue = require('vue');
var VueNative = require('vha-native');
Vue.use(VueNative);

// import
import Vue from 'vue'
import VueNative from 'vha-native'
Vue.use(VueNative)
```

The package provides a global object `Vue.cordova`

```javascript
console.log(this.$vha)
```

<!-- This object provides API for the following [events](#events) and will hold the Cordova [plugins](#plugins) API objects you might be using. -->

> **This library is a syntax helper.** It provides an easier access to the global variables defined by Cordova.

### Demo

A repository with a [full working demo](https://github.com/neoStudioGroup/vha-appDemo) is available to help you bootstrap a new project or cherry-pick working code.

<!-- ### Documentation -->

<!-- For more information, check out [http://kartsims.github.io/vha-native](http://kartsims.github.io/vha-native) -->


Thanks vue-cordova ngCordova
