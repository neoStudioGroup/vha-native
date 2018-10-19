<template>
  <div class="index_PG-Device">
<!-- ------------------------------------------- -->
<section id="Device">

<h1><strong><a href="#Device">Device</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-device" target="_blank">cordova-plugin-device</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-device</p>
</blockquote>
<br />

<h3>获取设备相关信息，如平台、设备模型。</h3>
<p class="_cl-aaaaaa">应用场景：判断平台</p>

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
<p class="ui-r-note _bdc-info" id="getdevice">getDevice()</p>

<p>获取cordova版本</p>
<p class="ui-r-return"><span>↪ 返回值：String(any)</span></p>


<p class="ui-r-note _bdc-info" id="getmodel">getModel()</p>

<p>获取设备模型或产品名称。该值由设备制造商设置，并可在同一产品的版本中不同。</p>
<p class="ui-r-return"><span>↪ 返回值：String(any)</span> iPhone 5 : “iPhone 5,1”, Nexus One : “Passion”</p>


<p class="ui-r-note _bdc-info" id="getplatform">getPlatform()</p>

<p>获取运行平台</p>
<p class="ui-r-return"><span>↪ 返回值：String(any)</span> “iOS”, “Android”, “WinCE”</p>


<p class="ui-r-note _bdc-info" id="getuuid">getUUID()</p>

<p>获取设备的通用唯一标识符（UUID），一个UUID生成由设备制造商确定和设备特定的平台或模型。</p>
<p class="ui-r-return"><span>↪ 返回值：String(any)</span> 


<p class="ui-r-note _bdc-info" id="getversion">getVersion()</p>

<p>获取系统版本</p>
<p class="ui-r-return"><span>↪ 返回值：String(any)</span> iOS 8.2 : “8.2”, Froyo OS : “2.</p>

</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">device: function () {
  this.logText += &quot;device : &quot; + JSON.stringify(this.$vha.device, null, 2) + &quot;\n&quot;
  this.logText += &quot;cordova : &quot; + this.$vha.device.cordova + &quot;\n&quot;
  this.logText += &quot;model : &quot; + this.$vha.device.model + &quot;\n&quot;
  this.logText += &quot;name : &quot; + this.$vha.device.name + &quot;\n&quot;
  this.logText += &quot;platform : &quot; + this.$vha.device.platform + &quot;\n&quot;
  this.logText += &quot;uuid : &quot; + this.$vha.device.uuid + &quot;\n&quot;
  this.logText += &quot;version : &quot; + this.$vha.device.version + &quot;\n&quot;
  this.logText += &quot;manufacturer : &quot; + this.$vha.device.manufacturer + &quot;\n&quot;
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Device.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>