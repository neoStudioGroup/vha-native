<template>
  <div class="index_PG-Globalization">
<!-- ------------------------------------------- -->
<section id="Globalization">

<h1><strong><a href="#Globalization">Globalization</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-globalization" target="_blank">cordova-plugin-globalization</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-globalization</p>
</blockquote>
<br />

<h3>获取设备的语言及区域</h3>
<p class="_cl-aaaaaa">应用场景：匹配语言</p>

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
<p class="ui-r-note _bdc-info">getPreferredLanguage()</p>

<p>获取设备语言</p>
<p class="ui-r-return"><span>↪ 返回值：Function(any)</span> 回调函数。参数为result</p>


<p class="ui-r-note _bdc-info">getLocaleName()</p>

<p>获取区域名称</p>
<p class="ui-r-return"><span>↪ 返回值：Function(any)</span> 回调函数。参数为result</p>


<p class="ui-r-note _bdc-info">getFirstDayOfWeek()</p>

<p>获取星期数</p>
<p class="ui-r-return"><span>↪ 返回值：Function(any)</span> 回调函数。参数为result</p>

</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">Globalization: function () {
  this.$vha.globalization.getPreferredLanguage((result) =&gt; {
    this.logText += &quot;首选语言：&quot; + result.value + &quot;\n&quot;
  },
  (err) =&gt; {
    this.logText += &quot;错误&quot; + err + &quot;\n&quot;
  })

  this.$vha.globalization.getLocaleName((result) =&gt; {
    this.logText += &quot;区域名称：&quot; + result.value + &quot;\n&quot;
  },
  (err) =&gt; {
    this.logText += &quot;错误&quot; + err + &quot;\n&quot;
  })

  this.$vha.globalization.getFirstDayOfWeek((result) =&gt; {
    this.logText += &quot;第一周：&quot; + result.value + &quot;\n&quot;
  },
  (err) =&gt; {
    this.logText += &quot;错误&quot; + err + &quot;\n&quot;
  })
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Globalization.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>