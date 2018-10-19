---
{
  "title": "震动",
  "name": "Vibration",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="Vibration">

# **[Vibration](#Vibration)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-vibration" target="_blank">cordova-plugin-vibration</a></p>

> cordova plugin add cordova-plugin-vibration

<br />

### 使设备发出震动

<p class="_cl-aaaaaa">应用场景：消息提示</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info">vibrate(time)</p>

开始震动（毫秒）

<p class="ui-r-return"><span>↪ 返回值：Boolean</span> 成功返回真，失败返回假。</p>

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

```javascript
Vibration: function () {
  this.logText += "震动：" + this.VibrationTime + " 毫秒" + "\n"
  if (this.$vha.vibration.vibrate(this.VibrationTime)) {
    this.logText += "成功" + "\n"
  } else {
    this.logText += "失败" + "\n"
  }
}
```

</section>
<!-- ------------------------------------------- -->