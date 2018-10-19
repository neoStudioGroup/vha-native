<template>
  <div class="index_PG-App Preferences">
<!-- ------------------------------------------- -->
<section id="App-Preferences">

<h1><strong><a href="#App-Preferences">App Preferences</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-vha-apppreferences" target="_blank">cordova-plugin-vha-apppreferences</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-vha-apppreferences</p>
</blockquote>
<br />

<h3>保存本地选项</h3>
<p class="_cl-aaaaaa">应用场景：本地设置</p>

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
<p class="ui-r-note _bdc-info">store()</p>

<p>设置配置</p>
<p class="ui-r-note _bdc-info">fetch()</p>

<p>读取配置</p>
<p class="ui-r-note _bdc-info">show()</p>

<p>显示应用首选项</p>
</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">setkey: function () {
  this.$vha.apppreferences.store((value) =&gt; {
    this.logText += value + &quot;\n&quot;
  }, (error) =&gt; {
    this.logText += &quot;错误 : &quot; + error + &quot;\n&quot;
  }, &#39;key:1&#39;, &#39;value:1&#39;)
},
getkey: function () {
  this.$vha.apppreferences.fetch((value) =&gt; {
    this.logText += value + &quot;\n&quot;
  }, (error) =&gt; {
    this.logText += &quot;错误 : &quot; + error + &quot;\n&quot;
  }, &#39;key:1&#39;)
},
show: function () {
  this.$vha.apppreferences.show((value) =&gt; {
    this.logText += value + &quot;\n&quot;
  }, (error) =&gt; {
    this.logText += &quot;错误 : &quot; + error + &quot;\n&quot;
  })
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/App Preferences.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>