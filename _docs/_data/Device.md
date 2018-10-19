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

### 获取设备相关信息，如平台、设备模型。

<p class="_cl-aaaaaa">应用场景：判断平台</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info" id="getdevice">getDevice()</p>

获取cordova版本

<p class="ui-r-return"><span>↪ 返回值：String(any)</span></p>


<p class="ui-r-note _bdc-info" id="getmodel">getModel()</p>

获取设备模型或产品名称。该值由设备制造商设置，并可在同一产品的版本中不同。

<p class="ui-r-return"><span>↪ 返回值：String(any)</span> iPhone 5 : “iPhone 5,1”, Nexus One : “Passion”</p>


<p class="ui-r-note _bdc-info" id="getplatform">getPlatform()</p>

获取运行平台

<p class="ui-r-return"><span>↪ 返回值：String(any)</span> “iOS”, “Android”, “WinCE”</p>


<p class="ui-r-note _bdc-info" id="getuuid">getUUID()</p>

获取设备的通用唯一标识符（UUID），一个UUID生成由设备制造商确定和设备特定的平台或模型。

<p class="ui-r-return"><span>↪ 返回值：String(any)</span> 


<p class="ui-r-note _bdc-info" id="getversion">getVersion()</p>

获取系统版本

<p class="ui-r-return"><span>↪ 返回值：String(any)</span> iOS 8.2 : “8.2”, Froyo OS : “2.</p>

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