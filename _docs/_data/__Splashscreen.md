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

### 显示或隐藏启动屏幕画面

</section>
<!-- ------------------------------------------- -->
<section id="Scenes">

## **[应用场景](#Scenes)**

启动缓冲

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