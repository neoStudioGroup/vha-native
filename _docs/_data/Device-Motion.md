---
{
  "title": "陀螺仪传感器",
  "name": "Device Motion",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="Device-Motion">

# **[Device Motion](#Device-Motion)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-device-motion" target="_blank">cordova-plugin-device-motion</a></p>

> cordova plugin add cordova-plugin-device-motion

<br />

### 实时监听获取当前设备陀螺仪传感器三个维度（x,y,z）的方向

<p class="_cl-aaaaaa">应用场景：运动检测、摇一摇等。</p>

+ Browser
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info" id="getcurrentacceleration">getCurrentAcceleration()</p>

获取当前陀螺仪数据

<p class="ui-r-return"><span>↪ 返回值：Object(any)</span> 对象 - x, y, z coordinates + timestamp</p>


<p class="ui-r-note _bdc-info" id="watchaccelerationoptions">watchAcceleration(options)</p>

开启一个时钟间隔(毫秒) 获取陀螺仪数据

参数|类型|说明
-|-|-
options|Object|监视数据

Options|类型|说明
-|-|-
frequency|Number|间隔的毫秒数

<p class="ui-r-return"><span>↪ 返回值：Object(any)</span> 对象 - x, y, z coordinates + timestamp</p>


<p class="ui-r-note _bdc-info" id="clearwatchwatchid">clearWatch(watchID)</p>

清除,停止watchAcceleration

参数|类型|说明
-|-|-
watchID|Number|watchAcceleration()返回的对象

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

<p class="ui-r-note _bdc-warning">HTML5提供了deviceorientation可以更快速平滑的读取传感器信息。</p>

```javascript
let options = {
  frequency: 100
}

this.watchID = this.$vha.devicemotion.watchAcceleration((result) => {
    this.LeftRight = parseInt(result.x * 10)
    this.FrontBack = parseInt(result.y * 10)
    this.Direction = parseInt(result.z * 10)
    
    this.Motionanima.top = 90 + this.FrontBack + "px"
    this.Motionanima.left = 90 + this.LeftRight * -1 + "px"
  }, (err) => {
    this.logText += "错误 : " + err + "\n"
  }, options)

// HTML5 deviceorientation演示
if ('DeviceOrientationEvent' in window) {
  window.addEventListener('deviceorientation', (eventData) => {
    let tiltLR = eventData.gamma
    let tiltFB = eventData.beta
    let dir = eventData.alpha
    
    // this.Motion.transform = "rotate(" + tiltLR + "deg) rotate3d(1,0,0, " + (tiltFB * -1) + "deg)"
    this.Motion.transform = "rotate3d(0,1,0, " + tiltLR + "deg) rotate3d(1,0,0, " + (tiltFB * -1) + "deg)"
  }, false)
} else {
  this.logText += "Device Orientation API not supported." + "\n"
}
```

</section>
<!-- ------------------------------------------- -->