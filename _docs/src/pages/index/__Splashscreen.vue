<template>
  <div class="index_PG-Splashscreen">
<!-- ------------------------------------------- -->
<section id="Splashscreen">

<h1><strong><a href="#Splashscreen">Splashscreen</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-splashscreen" target="_blank">cordova-plugin-splashscreen</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-splashscreen</p>
</blockquote>
<h3>显示或隐藏启动屏幕画面</h3>
</section>
<!-- ------------------------------------------- -->
<section id="Scenes">

<h2><strong><a href="#Scenes">应用场景</a></strong></h2>
<p>启动缓冲</p>
</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">button: function () {
  this.logText += &quot;2秒后显示启动屏幕 3秒后隐藏 &quot; + &quot;\n&quot;
  setTimeout(() =&gt; {
    this.$vha.splashscreen.show()
    setTimeout(() =&gt; {
      this.$vha.splashscreen.hide()
    }, 3000)
  }, 2000)
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Splashscreen.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>