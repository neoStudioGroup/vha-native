<template>
  <div class="index_PG-Bluetooth">
<!-- ------------------------------------------- -->
<section id="Bluetooth">

<h1><strong><a href="#Bluetooth">Bluetooth</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-ble-central" target="_blank">cordova-plugin-ble-central</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-ble-central</p>
</blockquote>
<br />

<h3>调用设备蓝牙连接其它蓝牙设备通信</h3>
<p class="ui-r-note _bdc-warning">用户设备需要开启定位服务</p>

<p class="_cl-aaaaaa">应用场景：室外通信、物联网</p>

<ul>
<li><del>Browser</del></li>
<li>Android</li>
<li>iOS</li>
<li><del>WeChat</del></li>
</ul>
</section>
<!-- ------------------------------------------- -->
<section id="Methods">

<h2><strong><a href="#Methods">方法</a></strong></h2>
<p class="ui-r-note _bdc-info">enable()</p>

<p>是否开启蓝牙</p>
<p class="ui-r-note _bdc-info">scan()</p>

<p>扫描周围蓝牙设备</p>
<p class="ui-r-note _bdc-info">connect(deviceid)</p>

<p>连接设备</p>
<p class="ui-r-note _bdc-info">read(deviceid)</p>

<p>读取数据</p>
<p class="ui-r-note _bdc-info">disconnect(deviceid)</p>

<p>断开连接</p>
</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">enable: function () {
  this.$vha.bluetooth.enable(() =&gt; {
      this.logText += &quot;蓝牙已启用&quot; + &quot;\n&quot;
    }, (error) =&gt; {
      this.logText += &quot;蓝牙未启用&quot; + error + &quot;\n&quot;
    }
  )
},
scan: function () {
  this.$vha.bluetooth.scan([], 10, (device) =&gt; {
      this.devices.push(device)
      console.log(device)
      this.logText += JSON.stringify(device, null, 2) + &quot;\n&quot;
    }, (error) =&gt; {
      this.logText += &quot;失败 : &quot; + error + &quot;\n&quot;
    }
  )
},
connect: function () {
  this.$vha.bluetooth.connect(this.deviceid, () =&gt; {
      this.logText += &quot;成功&quot; + &quot;\n&quot;
    }, (error) =&gt; {
      this.logText += &quot;失败 : &quot; + error + &quot;\n&quot;
    }
  )
},
read: function () {
  setInterval(() =&gt; {
    this.$vha.bluetooth.read(this.deviceid, this.serviceUUID, this.counterCharacteristic, () =&gt; {
        this.logText += &quot;成功&quot; + &quot;\n&quot;
      }, (error) =&gt; {
        this.logText += &quot;失败 : &quot; + error + &quot;\n&quot;
      }
    )
  }, 1000)
},
disconnect: function () {
  this.$vha.bluetooth.disconnect(this.deviceid, () =&gt; {
      this.logText += &quot;成功&quot; + &quot;\n&quot;
    }, (error) =&gt; {
      this.logText += &quot;失败 : &quot; + error + &quot;\n&quot;
    }
  )
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Bluetooth.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>