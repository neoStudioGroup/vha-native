---
{
  "title": "闪光灯",
  "name": "Flashlight",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="Flashlight">

# **[Flashlight](#Flashlight)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-flashlight" target="_blank">cordova-plugin-flashlight</a></p>

> cordova plugin add cordova-plugin-flashlight

<br />

### 访问设备闪光灯

<p class="_cl-aaaaaa">应用场景：手电筒、信号灯等。</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info">available()</p>

闪光灯是否可用


<p class="ui-r-note _bdc-info">switchOn()</p>

开启闪光灯


<p class="ui-r-note _bdc-info">switchOff()</p>

关闭闪光灯


<p class="ui-r-note _bdc-info">toggle()</p>

切换闪光灯

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

```javascript
FlashlightIs: function(){
  this.$vha.flashlight.available((isAvailable) => {
    this.logText += "闪光灯是否可用" + isAvailable + "\n"
  })
},
FlashlightOn: function(){
  this.$vha.flashlight.switchOn((success) => {
      this.logText += "开启 " + success + "\n"
    }, (error) => {
      this.logText += "开启失败 " + error + "\n"
    })
},
FlashlightOff: function(){
  this.$vha.flashlight.switchOff((success) => {
      this.logText += "关闭 " + success + "\n"
    }, (error) => {
      this.logText += "关闭失败 " + error + "\n"
    })
},
FlashlightChange: function(){
  this.$vha.flashlight.toggle((success) => {
      this.logText += "切换 " + success + "\n"
    }, (error) => {
      this.logText += "切换失败 " + error + "\n"
    })
}
```

</section>
<!-- ------------------------------------------- -->