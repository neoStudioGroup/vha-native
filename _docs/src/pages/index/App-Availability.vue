<template>
  <div class="index_PG-App Availability">
<!-- ------------------------------------------- -->
<section id="App-Availability">

<h1><strong><a href="#App-Availability">App Availability</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-appavailability" target="_blank">cordova-plugin-appavailability</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-appavailability</p>
</blockquote>
<br />

<h3>显示或隐藏启动屏幕画面</h3>
<p class="_cl-aaaaaa">应用场景：更新检测</p>

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
<pre><code class="language-javascript">check: function () {
  let scheme

  if(this.$vha.device.platform === &#39;iOS&#39;) {
    scheme = &#39;twitter://&#39;
  }
  else if(this.$vha.device.platform === &#39;Android&#39;) {
    scheme = &#39;com.twitter.android&#39;
  }

  this.$vha.appavailability.check(scheme, () =&gt; { 
    this.logText += &quot;twitter已安装&quot; + &quot;\n&quot;
  }, () =&gt; {
    this.logText += &quot;twitter未安装&quot; + &quot;\n&quot;
  })
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/App Availability.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>