<template>
  <div class="index_PG-StatusBar">
<!-- ------------------------------------------- -->
<section id="StatusBar">

<h1><strong><a href="#StatusBar">StatusBar</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-statusbar" target="_blank">cordova-plugin-statusbar</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-statusbar</p>
</blockquote>
<br />

<h3>配置设备的状态栏颜色和样式。</h3>
<p class="_cl-aaaaaa">应用场景：全屏展示</p>

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
<p class="ui-r-note _bdc-info">overlaysWebView(doesOverlay)</p>

<p>设置状态栏是否占用视图（默认为true）</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>doesOverlay</td>
<td>boolean</td>
<td>状态栏是否覆盖主应用程序视图。</td>
</tr>
</tbody></table>
<p class="ui-r-note _bdc-info">styleDefault()</p>

<p>设置状态栏样式</p>
</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">StatusBaroverlaysWebView: function () {
  this.$vha.statusbar.overlaysWebView(this.overlaysWebViewtruefalse)
  if(this.overlaysWebViewtruefalse){
    this.logText += &quot;设置 overlaysWebView = false&quot; + &quot;\n&quot;
    this.overlaysWebViewtruefalse = false
    this.$vha.statusbar.overlaysWebView(this.overlaysWebViewtruefalse)
  }else{
    this.logText += &quot;设置 overlaysWebView = true&quot; + &quot;\n&quot;
    this.overlaysWebViewtruefalse = true
    this.$vha.statusbar.overlaysWebView(this.overlaysWebViewtruefalse)
  }
},
StatusBarstyle: function(){
  this.stylenumber++
  if(this.stylenumber &gt; 3){this.stylenumber = 0}

  switch (this.stylenumber) {
    case 0:
      this.logText += &quot;设置 style = Default:0&quot; + &quot;\n&quot;
      this.$vha.statusbar.styleDefault()
      break
    case 1:
      this.logText += &quot;设置 style = LightContent:1&quot; + &quot;\n&quot;
      this.$vha.statusbar.styleLightContent()
      break
    case 2:
      this.logText += &quot;设置 style = BlackTranslucent:2&quot; + &quot;\n&quot;
      this.$vha.statusbar.styleBlackTranslucent()
      break
    case 3:
      this.logText += &quot;设置 style = BlackOpaque:3&quot; + &quot;\n&quot;
      this.$vha.statusbar.styleBlackOpaque()
      break
  }
},
StatusBarstyleColor: function(){
  this.styleColornumber++
  if(this.styleColornumber &gt; 4){this.styleColornumber = 0}

  switch (this.styleColornumber) {
    case 0:
      this.logText += &quot;设置 styleColor = black&quot; + &quot;\n&quot;
      this.$vha.statusbar.backgroundColorByName(&#39;black&#39;)
      break
    case 1:
      this.logText += &quot;设置 styleColor = darkGray&quot; + &quot;\n&quot;
      this.$vha.statusbar.backgroundColorByName(&#39;darkGray&#39;)
      break
    case 2:
      this.logText += &quot;设置 styleColor = lightGray&quot; + &quot;\n&quot;
      this.$vha.statusbar.backgroundColorByName(&#39;lightGray&#39;)
      break
    case 3:
      this.logText += &quot;设置 styleColor = white&quot; + &quot;\n&quot;
      this.$vha.statusbar.backgroundColorByName(&#39;white&#39;)
      break
    case 4:
      this.logText += &quot;设置 styleHex = #ff0000&quot; + &quot;\n&quot;
      this.$vha.statusbar.backgroundColorByHexString(&#39;#ff0000&#39;)
      break
  }
},
StatusBarshowhide: function(){
  if(this.showhidetruefalse){
    this.logText += &quot;隐藏状态栏&quot;+ &quot;\n&quot;
    this.showhidetruefalse = false
    this.$vha.statusbar.hide()
  }else{
    this.logText += &quot;显示状态栏&quot;+ &quot;\n&quot;
    this.showhidetruefalse = true
    this.$vha.statusbar.show()
  }
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/StatusBar.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>