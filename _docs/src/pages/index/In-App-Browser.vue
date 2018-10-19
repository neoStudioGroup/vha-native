<template>
  <div class="index_PG-In App Browser">
<!-- ------------------------------------------- -->
<section id="In-App-Browser">

<h1><strong><a href="#In-App-Browser">In App Browser</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-inappbrowser" target="_blank">cordova-plugin-inappbrowser</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-inappbrowser</p>
</blockquote>
<br />

<h3>提供网络浏览器视图。可以用来打开图片，访问的网页，打开PDF文件。</h3>
<p class="_cl-aaaaaa">应用场景：外链展示</p>

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
<p class="ui-r-note _bdc-info" id="openurl-target-options">open(URL, target, options)</p>

<p>设置默认全局选项</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>URL</td>
<td>String</td>
<td>URL地址</td>
</tr>
<tr>
<td>target</td>
<td>String</td>
<td>三种加载URL（<em>self，</em>blank，_system）</td>
</tr>
<tr>
<td>options</td>
<td>Object</td>
<td>选择默认选项(如果已设置全局,可以将其替换)</td>
</tr>
</tbody></table>
<p class="ui-r-note _bdc-info" id="close">close()</p>

<p>关闭内置浏览器窗口</p>
<br />

<h3><strong>事件 (Event)</strong></h3>
<p class="ui-r-note _bdc-success">$rootScope.$on(‘$cordovaInAppBrowser:loadstart’, function(e, event))</p>

<p>当内置浏览器加载URL时候触发此事件如open()</p>
<p class="ui-r-note _bdc-success">$rootScope.$on(‘$cordovaInAppBrowser:loadstop’, function(e, event))</p>

<p>当内置浏览器加载URL处于带载停止状态会触发此事件</p>
<p class="ui-r-note _bdc-success">$rootScope.$on(‘$cordovaInAppBrowser:loaderror’, function(e, event))</p>

<p>当内置浏览器加载URL遇到错误时候会触发此事件</p>
<p class="ui-r-note _bdc-success">$rootScope.$on(‘$cordovaInAppBrowser:exit’, function(e, event))</p>

<p>当内置浏览器退出时触发此事件</p>
</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">open: function () {
  this.$vha.inappbrowser.open(this.url, &#39;_blank&#39;, &#39;location=yes&#39;);
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/In App Browser.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>