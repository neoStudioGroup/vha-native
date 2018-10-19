---
{
  "title": "启动屏幕",
  "name": "Splashscreen",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="Splashscreen">

# **[Splashscreen](#Splashscreen)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-splashscreen" target="_blank">cordova-plugin-splashscreen</a></p>

> cordova plugin add cordova-plugin-splashscreen

<br />

### 显示或隐藏启动屏幕画面

<p class="_cl-aaaaaa">应用场景：启动缓冲</p>

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
button: function () {
  this.logText += "2秒后显示启动屏幕 3秒后隐藏 " + "\n"
  setTimeout(() => {
    this.$vha.splashscreen.show()
    setTimeout(() => {
      this.$vha.splashscreen.hide()
    }, 3000)
  }, 2000)
}
```

</section>
<!-- ------------------------------------------- -->