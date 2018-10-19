<template>
  <div class="index_PG-Clipboard">
<!-- ------------------------------------------- -->
<section id="Clipboard">

<h1><strong><a href="#Clipboard">Clipboard</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-vha-clipboard" target="_blank">cordova-plugin-vha-clipboard</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-vha-clipboard</p>
</blockquote>
<br />

<h3>Cordova/PhoneGap剪贴板插件支持iOS，Android和Windows Phone 8提供的剪贴板管理。</h3>
<p class="_cl-aaaaaa">应用场景：复制粘贴</p>

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
<p class="ui-r-note _bdc-info">copy(text)</p>

<p>将文本复制到剪贴板</p>
<p class="ui-r-return"><span>↪ 返回值：Promise(any)</span> 复制后返回一个Promise对象</p>

<p class="ui-r-note _bdc-info">paste()</p>

<p>粘贴剪贴板中的文本</p>
<p class="ui-r-return"><span>↪ 返回值：Promise(any)</span> 粘贴后返回一个Promise对象</p>

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
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Clipboard.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>