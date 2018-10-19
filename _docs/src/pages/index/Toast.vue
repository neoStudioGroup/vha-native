<template>
  <div class="index_PG-Toast">
<!-- ------------------------------------------- -->
<section id="Toast">

<h1><strong><a href="#Toast">Toast</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-x-toast" target="_blank">cordova-plugin-x-toast</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-x-toast</p>
</blockquote>
<br />

<h3>原生消息提示 (在屏幕上中下位置显示一小段文字提示)</h3>
<p class="_cl-aaaaaa">应用场景：程序退出提示、错误提示等。</p>

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
<p class="ui-r-note _bdc-info">show(message, duration, position)</p>

<p>增加一个或多个本地通知</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>message</td>
<td>String</td>
<td>信息提示的一段文字</td>
</tr>
<tr>
<td>duration</td>
<td>String</td>
<td>信息提示显示持续事件 长或短: ‘short’, ‘long’</td>
</tr>
<tr>
<td>position</td>
<td>String</td>
<td>信息提示显示的位置顶部,中间,底部: ‘top’, ‘center’,’bottom’</td>
</tr>
</tbody></table>
<p>如果不想填写额外参数可以通过更优雅的方式显示 Toast(提示信息)</p>
<p class="ui-r-note _bdc-info">showShortTop(message)</p>

<p>显示顶部</p>
<p class="ui-r-note _bdc-info">showShortCenter(message)</p>

<p>显示中间</p>
<p class="ui-r-note _bdc-info">showShortBottom(message)</p>

<p>显示底部</p>
<p class="ui-r-note _bdc-info">showLongTop(message)</p>

<p>显示顶部(长时间)</p>
<p class="ui-r-note _bdc-info">showLongCenter(message)</p>

<p>显示中间(长时间)</p>
<p class="ui-r-note _bdc-info">showLongBottom(message)</p>

<p>显示底部(长时间)</p>
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
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Toast.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>