<template>
  <div class="index_PG-Dialogs">
<!-- ------------------------------------------- -->
<section id="Dialogs">

<h1><strong><a href="#Dialogs">Dialogs</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-dialogs" target="_blank">cordova-plugin-dialogs</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-dialogs</p>
</blockquote>
<h3>显示或隐藏启动屏幕画面</h3>
<p class="_cl-aaaaaa">应用场景：启动缓冲</p>

<ul>
<li>Android</li>
<li>iOS</li>
<li>WeChat</li>
</ul>
</section>
<!-- ------------------------------------------- -->
<section id="Scenes">

<h2><strong><a href="#Methods">方法</a></strong></h2>
<p class="ui-r-note _bdc-info">show()</p>

<p>Shows the splashscreen</p>
<p class="ui-r-note _bdc-info">hide()</p>

<p>Hides the splashscreen</p>
</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">alert: function(){
  this.$vha.dialogs.alert(&#39;neoStudioGroup&#39;,() =&gt; {
    this.logText += &quot;对话框结束&quot; + &quot;\n&quot;
  }, &#39;neo&#39;, &#39;确定&#39;)
},
confirm: function(){
  this.$vha.dialogs.confirm(&#39;neoStudioGroup&#39;,(buttonIndex) =&gt; {
    this.logText += &quot;你点了索引 &quot; + buttonIndex + &quot;\n&quot;
  }, &#39;neo&#39;, [&#39;取消&#39;,&#39;确定&#39;])
},
prompt: function(){
  this.$vha.dialogs.prompt(&#39;neoStudioGroup&#39;,(results) =&gt; {
    this.logText += &quot;你点了索引 &quot; + results.buttonIndex + &quot;\n&quot;
    this.logText += &quot;输入框内容 &quot; + results.input1 + &quot;\n&quot;
  }, &#39;neo&#39;, [&#39;取消&#39;,&#39;确定&#39;], &#39;default text&#39;)
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/src/pages/_data/Dialogs.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>