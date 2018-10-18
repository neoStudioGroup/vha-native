---
{
  "title": "状态栏",
  "name": "Network",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="Network">

# **[Network](#Network)**

> cordova plugin add cordova-plugin-Network

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-Network" target="_blank">cordova-plugin-Network</a></p>
<br />

### 该插件提供了一个旧版本的网络信息接口的实现。它提供了有关设备的移动网和WiFi连接信息和设备是否有网络连接。

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info">getNetwork()</p>

提供了一个快速的方法来确定设备的网络连接状态，和类型的连接。

返回值 Connection Object:

Connection Type(连接类型)|说明
-|-
Connection.UNKNOWN|未知连接
Connection.ETHERNET|以太网连接
Connection.WIFI|无线网连接
Connection.CELL_2G|2G网连接
Connection.CELL_3G|3G网连接
Connection.CELL_4G|4G网连接
Connection.CELL|通用连接
Connection.NONE|无网络连接

<p class="ui-r-note _bdc-info">isOnline()</p>

检测手机网络是否在线

返回值 如果为true手机网络在线

### **事件(Event)**

<p class="ui-r-note _bdc-success">$cordovaNetwork:online</p>

监听$cordovaNetwork:online当手机上网时触发事件

**返回值**

参数|类型|说明
-|-|-
event|Object|事件 $broadcast
networkState|Object|网络连接类型,具体参考getNetwork()的返回值

<p class="ui-r-note _bdc-success">$cordovaNetwork:offline</p>

监听$cordovaNetwork:offline当手机网络离线时触发事件

**返回值**

参数|类型|说明
-|-|-
event|Object|事件 $broadcast
networkState|Object|网络连接类型,具体参考getNetwork()的返回值

</section>
<!-- ------------------------------------------- -->
<section id="Scenes">

## **[应用场景](#Scenes)**

禁止登陆、获取数据等。

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

```javascript
Network_getType: function(){
  this.logText += "当前网络状态 : " + this.$vha.network.type + "\n"
},
Network_isOnline: function(){
  let status = this.$vha.network.type !== this.$vha.network.const.UNKNOWN && this.$vha.network.type !== this.$vha.network.const.NONE
  this.logText += "网络在线状态 : " + status + "\n"
},
Network_isOffline: function(){
  let status = this.$vha.network.type === this.$vha.network.const.UNKNOWN || this.$vha.network.type === this.$vha.network.const.NONE
  this.logText += "网络离线状态 : " + status + "\n"
}
```

</section>
<!-- ------------------------------------------- -->