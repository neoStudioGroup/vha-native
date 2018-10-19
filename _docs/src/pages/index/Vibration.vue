<template>
  <div class="index_PG-Vibration">
<!-- ------------------------------------------- -->
<section id="Vibration">

<h1><strong><a href="#Vibration">Vibration</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-vibration" target="_blank">cordova-plugin-vibration</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-vibration</p>
</blockquote>
<br />

<h3>使设备发出震动</h3>
<p class="_cl-aaaaaa">应用场景：消息提示</p>

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
<p class="ui-r-note _bdc-info">vibrate(time)</p>

<p>开始震动（毫秒）</p>
<p class="ui-r-return"><span>↪ 返回值：Boolean</span> 成功返回真，失败返回假。</p>

</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">Vibration: function () {
  this.logText += &quot;震动：&quot; + this.VibrationTime + &quot; 毫秒&quot; + &quot;\n&quot;
  if (this.$vha.vibration.vibrate(this.VibrationTime)) {
    this.logText += &quot;成功&quot; + &quot;\n&quot;
  } else {
    this.logText += &quot;失败&quot; + &quot;\n&quot;
  }
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Vibration.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>