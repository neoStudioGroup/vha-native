<template>
  <div class="index_PG-Network">
<!-- ------------------------------------------- -->
<section id="Network">

<h1><strong><a href="#Network">Network</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-network-information" target="_blank">cordova-plugin-network-information</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-network-information</p>
</blockquote>
<br />

<h3>该插件提供了一个旧版本的网络信息接口的实现。它提供了有关设备的移动网和WiFi连接信息和设备是否有网络连接。</h3>
<p class="_cl-aaaaaa">应用场景：禁止登陆、获取数据等。</p>

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
<p class="ui-r-note _bdc-info">getNetwork()</p>

<p>提供了一个快速的方法来确定设备的网络连接状态，和类型的连接。</p>
<p class="ui-r-return"><span>↪ 返回值：</span> Connection Object:</p>

<table>
<thead>
<tr>
<th>Connection Type(连接类型)</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>Connection.UNKNOWN</td>
<td>未知连接</td>
</tr>
<tr>
<td>Connection.ETHERNET</td>
<td>以太网连接</td>
</tr>
<tr>
<td>Connection.WIFI</td>
<td>无线网连接</td>
</tr>
<tr>
<td>Connection.CELL_2G</td>
<td>2G网连接</td>
</tr>
<tr>
<td>Connection.CELL_3G</td>
<td>3G网连接</td>
</tr>
<tr>
<td>Connection.CELL_4G</td>
<td>4G网连接</td>
</tr>
<tr>
<td>Connection.CELL</td>
<td>通用连接</td>
</tr>
<tr>
<td>Connection.NONE</td>
<td>无网络连接</td>
</tr>
</tbody></table>
<p class="ui-r-note _bdc-info">isOnline()</p>

<p>检测手机网络是否在线</p>
<p class="ui-r-return"><span>↪ 返回值：</span> 如果为true手机网络在线</p>

<br />

<h3><strong>事件 (Event)</strong></h3>
<p class="ui-r-note _bdc-success">$cordovaNetwork:online</p>

<p>监听$cordovaNetwork:online当手机上网时触发事件</p>
<p class="ui-r-return"><span>↪ 返回值：</span></p>

<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>event</td>
<td>Object</td>
<td>事件 $broadcast</td>
</tr>
<tr>
<td>networkState</td>
<td>Object</td>
<td>网络连接类型,具体参考getNetwork()的返回值</td>
</tr>
</tbody></table>
<p class="ui-r-note _bdc-success">$cordovaNetwork:offline</p>

<p>监听$cordovaNetwork:offline当手机网络离线时触发事件</p>
<p class="ui-r-return"><span>↪ 返回值：</span></p>

<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>event</td>
<td>Object</td>
<td>事件 $broadcast</td>
</tr>
<tr>
<td>networkState</td>
<td>Object</td>
<td>网络连接类型,具体参考getNetwork()的返回值</td>
</tr>
</tbody></table>
</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">Network_getType: function(){
  this.logText += &quot;当前网络状态 : &quot; + this.$vha.network.type + &quot;\n&quot;
},
Network_isOnline: function(){
  let status = this.$vha.network.type !== this.$vha.network.const.UNKNOWN &amp;&amp; this.$vha.network.type !== this.$vha.network.const.NONE
  this.logText += &quot;网络在线状态 : &quot; + status + &quot;\n&quot;
},
Network_isOffline: function(){
  let status = this.$vha.network.type === this.$vha.network.const.UNKNOWN || this.$vha.network.type === this.$vha.network.const.NONE
  this.logText += &quot;网络离线状态 : &quot; + status + &quot;\n&quot;
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Network.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>