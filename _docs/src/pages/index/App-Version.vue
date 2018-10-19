<template>
  <div class="index_PG-App Version">
<!-- ------------------------------------------- -->
<section id="App-Version">

<h1><strong><a href="#App-Version">App Version</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-app-version" target="_blank">cordova-plugin-app-version</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-app-version</p>
</blockquote>
<br />

<h3>显示或隐藏启动屏幕画面</h3>
<p class="_cl-aaaaaa">应用场景：应用升级</p>

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
<pre><code class="language-javascript">appversion: function () {
  this.$vha.appversion.getAppName((result) =&gt; {
    this.logText += &quot;应用名称 : &quot; + result + &quot;\n&quot;
  })

  this.$vha.appversion.getPackageName((result) =&gt; {
    this.logText += &quot;包名称 : &quot; + result + &quot;\n&quot;
  })

  this.$vha.appversion.getVersionCode((result) =&gt; {
    this.logText += &quot;构建标识符 : &quot; + result + &quot;\n&quot;
  })

  this.$vha.appversion.getVersionNumber((result) =&gt; {
    this.logText += &quot;版本号 : &quot; + result + &quot;\n&quot;
  })
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/App Version.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>