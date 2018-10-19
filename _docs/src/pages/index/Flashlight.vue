<template>
  <div class="index_PG-Flashlight">
<!-- ------------------------------------------- -->
<section id="Flashlight">

<h1><strong><a href="#Flashlight">Flashlight</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-Flashlight" target="_blank">cordova-plugin-Flashlight</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-Flashlight</p>
</blockquote>
<h3>提供的剪贴板管理</h3>
</section>
<!-- ------------------------------------------- -->
<section id="Scenes">

<h2><strong><a href="#Scenes">应用场景</a></strong></h2>
<p>复制粘贴</p>
</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">Clipboard_Copy: function(){
  this.$vha.clipboard.copy(this.cpText)
},
Clipboard_Paste: function(){
  this.$vha.clipboard.paste((text) =&gt; {
    this.ptText = text
    this.logText += &quot;黏贴内容 : &quot; + text + &quot;\n&quot;
  })
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Flashlight.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>