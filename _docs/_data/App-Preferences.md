---
{
  "title": "应用配置项",
  "name": "App Preferences",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="App-Preferences">

# **[App Preferences](#App-Preferences)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-vha-apppreferences" target="_blank">cordova-plugin-vha-apppreferences</a></p>

> cordova plugin add cordova-plugin-vha-apppreferences

<br />

### 保存本地选项

<p class="_cl-aaaaaa">应用场景：本地设置</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info">store()</p>

设置配置


<p class="ui-r-note _bdc-info">fetch()</p>

读取配置


<p class="ui-r-note _bdc-info">show()</p>

显示应用首选项

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

```javascript
setkey: function () {
  this.$vha.apppreferences.store((value) => {
    this.logText += value + "\n"
  }, (error) => {
    this.logText += "错误 : " + error + "\n"
  }, 'key:1', 'value:1')
},
getkey: function () {
  this.$vha.apppreferences.fetch((value) => {
    this.logText += value + "\n"
  }, (error) => {
    this.logText += "错误 : " + error + "\n"
  }, 'key:1')
},
show: function () {
  this.$vha.apppreferences.show((value) => {
    this.logText += value + "\n"
  }, (error) => {
    this.logText += "错误 : " + error + "\n"
  })
}
```

</section>
<!-- ------------------------------------------- -->