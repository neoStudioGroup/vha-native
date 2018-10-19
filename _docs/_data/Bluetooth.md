---
{
  "title": "蓝牙",
  "name": "Bluetooth",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="Bluetooth">

# **[Bluetooth](#Bluetooth)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-ble-central" target="_blank">cordova-plugin-ble-central</a></p>

> cordova plugin add cordova-plugin-ble-central

<br />

### 调用设备蓝牙连接其它蓝牙设备通信

<p class="ui-r-note _bdc-warning">用户设备需要开启定位服务</p>

<p class="_cl-aaaaaa">应用场景：室外通信、物联网</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info">enable()</p>

是否开启蓝牙


<p class="ui-r-note _bdc-info">scan()</p>

扫描周围蓝牙设备


<p class="ui-r-note _bdc-info">connect(deviceid)</p>

连接设备


<p class="ui-r-note _bdc-info">read(deviceid)</p>

读取数据


<p class="ui-r-note _bdc-info">disconnect(deviceid)</p>

断开连接

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

```javascript
enable: function () {
  this.$vha.bluetooth.enable(() => {
      this.logText += "蓝牙已启用" + "\n"
    }, (error) => {
      this.logText += "蓝牙未启用" + error + "\n"
    }
  )
},
scan: function () {
  this.$vha.bluetooth.scan([], 10, (device) => {
      this.devices.push(device)
      console.log(device)
      this.logText += JSON.stringify(device, null, 2) + "\n"
    }, (error) => {
      this.logText += "失败 : " + error + "\n"
    }
  )
},
connect: function () {
  this.$vha.bluetooth.connect(this.deviceid, () => {
      this.logText += "成功" + "\n"
    }, (error) => {
      this.logText += "失败 : " + error + "\n"
    }
  )
},
read: function () {
  setInterval(() => {
    this.$vha.bluetooth.read(this.deviceid, this.serviceUUID, this.counterCharacteristic, () => {
        this.logText += "成功" + "\n"
      }, (error) => {
        this.logText += "失败 : " + error + "\n"
      }
    )
  }, 1000)
},
disconnect: function () {
  this.$vha.bluetooth.disconnect(this.deviceid, () => {
      this.logText += "成功" + "\n"
    }, (error) => {
      this.logText += "失败 : " + error + "\n"
    }
  )
}
```

</section>
<!-- ------------------------------------------- -->