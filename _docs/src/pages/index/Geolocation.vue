<template>
  <div class="index_PG-Geolocation">
<!-- ------------------------------------------- -->
<section id="Geolocation">

<h1><strong><a href="#Geolocation">Geolocation</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-baidumaplocation" target="_blank">cordova-plugin-baidumaplocation</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-baidumaplocation --variable ANDROID_KEY=&quot;&#60;API_KEY_ANDROID&#62;&quot; --variable IOS_KEY=&quot;&#60;API_KEY_IOS&#62;&quot;</p>
</blockquote>
<br />

<h3>使用百度地图获取设备经纬度</h3>
<p class="_cl-aaaaaa">应用场景：定位、导航等。</p>

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
<p class="ui-r-note _bdc-info">getCurrentPosition()</p>

<p>获取当前位置</p>
</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">index.html
&lt;script type=&quot;text/javascript&quot; src=&quot;http://api.map.baidu.com/api?v=2.0&amp;ak=104RLNdEmAqbESLXCa8Beb44oOEeyXPu&quot;&gt;&lt;/script&gt;

baidumaplocation: function () {
  this.$vha.baidugeolocation.getCurrentPosition((result) =&gt; {
    this.logText += JSON.stringify(result, null, 2) + &quot;\n&quot;

    var map = new BMap.Map(&quot;baiduMap&quot;)
    var point = new BMap.Point(result.longitude, result.latitude)
    map.centerAndZoom(point, 14)

    var myIcon = new BMap.Icon(&quot;assets/images/baidulocation.png&quot;, new BMap.Size(30, 30))
    var marker = new BMap.Marker(point, {icon: myIcon})
    map.addOverlay(marker)

  }, (error) =&gt; {
    this.logText += &quot;错误&quot; + error + &quot;\n&quot;
  })
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Geolocation.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>