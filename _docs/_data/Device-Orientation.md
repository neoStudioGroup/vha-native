---
{
  "title": "方向传感器",
  "name": "Device Orientation",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="Device-Orientation">

# **[Device Orientation](#Device-Orientation)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-device-orientation" target="_blank">cordova-plugin-device-orientation</a></p>

> cordova plugin add cordova-plugin-device-orientation

<br />

### 访问设备的方向传感器，该传感器可以检测到设备的方向（设备的顶部）。它获取度数0-359.99，0度是北。

<p class="_cl-aaaaaa">应用场景：指南针</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info" id="getcurrentheading">getCurrentHeading()</p>

获取方向传感器数据

<p class="ui-r-return"><span>↪ 返回值：Object(any)</span> 对象 - magneticHeading, trueHeading, headingAccuracy, timestamp.</p>


<p class="ui-r-note _bdc-info" id="watchheadingoptions">watchHeading(options)</p>

参数|类型|说明
-|-|-
options|Object|配置对象

Options|类型|说明
-|-|-
frequency|Number|间隔毫秒
filter|Number|设置过滤器 如果设置这个参数则自动忽略frequency

<p class="ui-r-return"><span>↪ 返回值：Object(any)</span> 对象 - magneticHeading, trueHeading, headingAccuracy, timestamp.</p>


<p class="ui-r-note _bdc-info" id="clearwatchwatchid">clearWatch(watchID)</p>

清除watchHeading() 返回的定时器id

参数|类型|说明
-|-|-
watchID|Number|watchHeading()返回的id

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

```javascript
methods: {
  //方法 - 每次进入页面创建
  getCurrentHeading: function () {
    this.$vha.deviceorientation.getCurrentHeading((result) => {
        let intdeg = parseInt(result.magneticHeading)
        this.logText += "intdeg : " + intdeg + "\n"
      }, (err) => {
        this.logText += "错误 : " + err + "\n"
      })
  }
},
watch: {
  //观察 - 数据或方法
},
created() {
  //实例创建完成后
  this.watchID = 0
  this.inAngle = -1
  this.lastAngle = 0
},
mounted() {
  //挂载实例后 - this.el存在
  this.getCurrentHeading()
  setTimeout(() => {}, 1000)
  
  let options = {
    frequency: 10
  }
  
  this.watchID = this.$vha.deviceorientation.watchHeading((result) => {
      let intdeg_ = 360 - result.magneticHeading
      
      let thisAngle = intdeg_ - this.lastAngle
      if (thisAngle != 0) {
        this.intdeg.transform = "rotate(" + intdeg_ + "deg)"
      }
      this.lastAngle = intdeg_
    }, (err) => {
      this.logText += "错误 : " + err + "\n"
    }, options)
}
```

</section>
<!-- ------------------------------------------- -->