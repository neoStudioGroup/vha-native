<template>
  <div class="index_PG-Battery Status">
<!-- ------------------------------------------- -->
<section id="Battery-Status">

<h1><strong><a href="#Battery-Status">Battery Status</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-battery-status" target="_blank">cordova-plugin-battery-status</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-battery-status</p>
</blockquote>
<br />

<h3>监听获取当前设备电量</h3>
<p class="_cl-aaaaaa">应用场景：低电警告</p>

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
<h3><strong>事件 (Event)</strong></h3>
<p class="ui-r-note _bdc-success">batterystatus</p>

<p>监听后触发此事件</p>
<p class="ui-r-note _bdc-success">batterylow</p>

<p>低电量时触发此事件</p>
<p class="ui-r-note _bdc-success">batterycritical</p>

<p>电量极低时触发此事件</p>
</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">BatteryStatus: function () {
  window.addEventListener(&quot;batterystatus&quot;, (status) =&gt; {
    this.logText += &quot;电量: &quot; + status.level + &quot; 是否充电: &quot; + status.isPlugged + &quot;\n&quot;
  }, false)

  window.addEventListener(&quot;batterylow&quot;, (status) =&gt; {
    this.logText += &quot;低电量: &quot; + status.level + &quot;\n&quot;
  }, false)

  window.addEventListener(&quot;batterycritical&quot;, (status) =&gt; {
    this.logText += &quot;电量极低: &quot; + status.level + &quot;\n&quot;
  }, false)
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Battery Status.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>