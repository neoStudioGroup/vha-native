---
{
  "title": "电池信息",
  "name": "Battery Status",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="Battery-Status">

# **[Battery Status](#Battery-Status)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-battery-status" target="_blank">cordova-plugin-battery-status</a></p>

> cordova plugin add cordova-plugin-battery-status

<br />

### 监听获取当前设备电量

<p class="_cl-aaaaaa">应用场景：低电警告</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

### **事件 (Event)**

<p class="ui-r-note _bdc-success">batterystatus</p>

监听后触发此事件

<p class="ui-r-note _bdc-success">batterylow</p>

低电量时触发此事件

<p class="ui-r-note _bdc-success">batterycritical</p>

电量极低时触发此事件

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

```javascript
BatteryStatus: function () {
  window.addEventListener("batterystatus", (status) => {
    this.logText += "电量: " + status.level + " 是否充电: " + status.isPlugged + "\n"
  }, false)

  window.addEventListener("batterylow", (status) => {
    this.logText += "低电量: " + status.level + "\n"
  }, false)

  window.addEventListener("batterycritical", (status) => {
    this.logText += "电量极低: " + status.level + "\n"
  }, false)
}
```

</section>
<!-- ------------------------------------------- -->