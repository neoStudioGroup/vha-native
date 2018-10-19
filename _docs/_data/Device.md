---
{
  "title": "设备信息",
  "name": "Device",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="Device">

# **[Device](#Device)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-device" target="_blank">cordova-plugin-device</a></p>

> cordova plugin add cordova-plugin-device

<br />

### 显示或隐藏启动屏幕画面

<p class="_cl-aaaaaa">应用场景：判断平台</p>

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
device: function () {
  this.logText += "device : " + JSON.stringify(this.$vha.device, null, 2) + "\n"
  this.logText += "cordova : " + this.$vha.device.cordova + "\n"
  this.logText += "model : " + this.$vha.device.model + "\n"
  this.logText += "name : " + this.$vha.device.name + "\n"
  this.logText += "platform : " + this.$vha.device.platform + "\n"
  this.logText += "uuid : " + this.$vha.device.uuid + "\n"
  this.logText += "version : " + this.$vha.device.version + "\n"
  this.logText += "manufacturer : " + this.$vha.device.manufacturer + "\n"
}
```

</section>
<!-- ------------------------------------------- -->