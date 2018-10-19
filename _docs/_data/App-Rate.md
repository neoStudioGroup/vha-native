---
{
  "title": "启动屏幕",
  "name": "App Rate",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="App-Rate">

# **[App Rate](#App-Rate)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-apprate" target="_blank">cordova-plugin-apprate</a></p>

> cordova plugin add cordova-plugin-apprate

<br />

### 显示或隐藏启动屏幕画面

<p class="_cl-aaaaaa">应用场景：打开应用商店</p>

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
promptRating: function () {
  this.$vha.apprate.preferences = {
    useLanguage: 'en',
    displayAppName: 'MY APP',
    promptAgainForEachNewVersion: true,
    openStoreInApp: false,
    usesUntilPrompt: 3,
    useCustomRateDialog: false,
    storeAppURL: {
      ios: '<my_app_id>',
      android: 'market://details?id=<package_name>',
      windows8: 'ms-windows-store:Review?name=<...>',
      blackberry: null
    },
    customLocale: {
      title: '动动手指，为我们打分',
      message: '无论是来自亲的赞美诗，还是让亲唾沫横飞的槽点，我们只愿——让评价来得更猛烈些吧！',
      cancelButtonLabel: '残忍地拒绝',
      laterButtonLabel: '容我考虑考虑',
      rateButtonLabel: '马上就去'
    }
  }

  if (this.$vha.apprate.promptForRating(true)) {
    this.logText += "成功" + "\n"
  } else {
    this.logText += "失败" + "\n"
  }
  
  // if (this.$vha.apprate.navigateToAppStore()) {
  //   this.logText += "成功" + "\n"
  // } else {
  //   this.logText += "失败" + "\n"
  // }
}
```

</section>
<!-- ------------------------------------------- -->