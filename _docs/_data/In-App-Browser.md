---
{
  "title": "内置浏览器",
  "name": "In App Browser",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="In-App-Browser">

# **[In App Browser](#In-App-Browser)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-inappbrowser" target="_blank">cordova-plugin-inappbrowser</a></p>

> cordova plugin add cordova-plugin-inappbrowser

<br />

### 提供网络浏览器视图。可以用来打开图片，访问的网页，打开PDF文件。

<p class="_cl-aaaaaa">应用场景：外链展示</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info" id="openurl-target-options">open(URL, target, options)</p>

设置默认全局选项

参数|类型|说明
-|-|-
URL|String|URL地址
target|String|三种加载URL（_self，_blank，_system）
options|Object|选择默认选项(如果已设置全局,可以将其替换)


<p class="ui-r-note _bdc-info" id="close">close()</p>

关闭内置浏览器窗口

<br />

### **事件 (Event)**

<p class="ui-r-note _bdc-success">$rootScope.$on(‘$cordovaInAppBrowser:loadstart’, function(e, event))</p>

当内置浏览器加载URL时候触发此事件如open()

<p class="ui-r-note _bdc-success">$rootScope.$on(‘$cordovaInAppBrowser:loadstop’, function(e, event))</p>

当内置浏览器加载URL处于带载停止状态会触发此事件

<p class="ui-r-note _bdc-success">$rootScope.$on(‘$cordovaInAppBrowser:loaderror’, function(e, event))</p>

当内置浏览器加载URL遇到错误时候会触发此事件

<p class="ui-r-note _bdc-success">$rootScope.$on(‘$cordovaInAppBrowser:exit’, function(e, event))</p>

当内置浏览器退出时触发此事件

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

```javascript
open: function () {
  this.$vha.inappbrowser.open(this.url, '_blank', 'location=yes');
}
```

</section>
<!-- ------------------------------------------- -->