---
{
  "title": "应用是否存在",
  "name": "App Availability",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="App-Availability">

# **[App Availability](#App-Availability)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-appavailability" target="_blank">cordova-plugin-appavailability</a></p>

> cordova plugin add cordova-plugin-appavailability

<br />

### 显示或隐藏启动屏幕画面

<p class="_cl-aaaaaa">应用场景：更新检测</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info">show()</p>

显示启动屏幕


<p class="ui-r-note _bdc-info">hide()</p>

隐藏启动屏幕

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

```javascript
check: function () {
  let scheme

  if(this.$vha.device.platform === 'iOS') {
    scheme = 'twitter://'
  }
  else if(this.$vha.device.platform === 'Android') {
    scheme = 'com.twitter.android'
  }
  
  this.$vha.appavailability.check(scheme, () => { 
    this.logText += "twitter已安装" + "\n"
  }, () => {
    this.logText += "twitter未安装" + "\n"
  })
}
```

</section>
<!-- ------------------------------------------- -->