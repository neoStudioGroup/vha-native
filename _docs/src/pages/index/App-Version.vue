<template>
  <div class="index_PG-App Version">
<!-- ------------------------------------------- -->
<section id="App-Version">

<h1><strong><a href="#App-Version">App Version</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-App-Version" target="_blank">cordova-plugin-App-Version</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-App-Version</p>
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
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/src/pages/_data/App Version.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>