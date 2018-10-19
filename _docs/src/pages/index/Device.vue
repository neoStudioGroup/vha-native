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

<h3>显示或隐藏启动屏幕画面</h3>
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
<p class="ui-r-note _bdc-info">show()</p>

<p>显示启动屏幕</p>
<p class="ui-r-note _bdc-info">hide()</p>

<p>隐藏启动屏幕</p>
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
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Device.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>