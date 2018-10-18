<template>
  <div class="index_PG-Toast">
<!-- ------------------------------------------- -->
<section id="Toast">

<h1><strong><a href="#Toast">Toast</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-x-toast" target="_blank">cordova-plugin-x-toast</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-x-toast</p>
</blockquote>
<h3>原生消息提示Toast (在屏幕上中下位置显示一小段文字提示)</h3>
<p class="_cl-aaaaaa">应用场景：程序退出提示、错误提示等。</p>

<ul>
<li>Android</li>
<li>iOS</li>
<li><del>WeChat</del></li>
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
<pre><code class="language-javascript">showTop: function(){
  this.$vha.toast.showShortTop(this.Message)
},
show: function(){
  this.$vha.toast.showShortCenter(this.Message)
},
showBottom: function(){
  this.$vha.toast.showShortBottom(this.Message)
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/src/pages/_data/Toast.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>