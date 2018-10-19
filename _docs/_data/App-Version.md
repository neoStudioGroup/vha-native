---
{
  "title": "应用版本",
  "name": "App Version",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="App-Version">

# **[App Version](#App-Version)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-app-version" target="_blank">cordova-plugin-app-version</a></p>

> cordova plugin add cordova-plugin-app-version

<br />

### 获取应用的基本信息（包括名称、包名称（xx.xxx.xxx）、标识符及版本号）

<p class="_cl-aaaaaa">应用场景：应用升级</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info">getAppName()</p>

获取应用名称

<p class="ui-r-return"><span>↪ 返回值：Function(any)</span> 回调函数。参数为result</p>


<p class="ui-r-note _bdc-info">getAppName()</p>

获取包名称

<p class="ui-r-return"><span>↪ 返回值：Function(any)</span> 回调函数。参数为result</p>


<p class="ui-r-note _bdc-info">getAppName()</p>

构建标识符

<p class="ui-r-return"><span>↪ 返回值：Function(any)</span> 回调函数。参数为result</p>


<p class="ui-r-note _bdc-info">getAppName()</p>

版本号

<p class="ui-r-return"><span>↪ 返回值：Function(any)</span> 回调函数。参数为result</p>

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

```javascript
appversion: function () {
  this.$vha.appversion.getAppName((result) => {
    this.logText += "应用名称 : " + result + "\n"
  })
  
  this.$vha.appversion.getPackageName((result) => {
    this.logText += "包名称 : " + result + "\n"
  })
  
  this.$vha.appversion.getVersionCode((result) => {
    this.logText += "构建标识符 : " + result + "\n"
  })
  
  this.$vha.appversion.getVersionNumber((result) => {
    this.logText += "版本号 : " + result + "\n"
  })
}
```

</section>
<!-- ------------------------------------------- -->