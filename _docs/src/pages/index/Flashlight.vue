<template>
  <div class="index_PG-Flashlight">
<!-- ------------------------------------------- -->
<section id="Flashlight">

<h1><strong><a href="#Flashlight">Flashlight</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-flashlight" target="_blank">cordova-plugin-flashlight</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-flashlight</p>
</blockquote>
<br />

<h3>访问设备闪光灯</h3>
<p class="_cl-aaaaaa">应用场景：手电筒、信号灯等。</p>

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
<p class="ui-r-note _bdc-info">available()</p>

<p>闪光灯是否可用</p>
<p class="ui-r-note _bdc-info">switchOn()</p>

<p>开启闪光灯</p>
<p class="ui-r-note _bdc-info">switchOff()</p>

<p>关闭闪光灯</p>
<p class="ui-r-note _bdc-info">toggle()</p>

<p>切换闪光灯</p>
</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">FlashlightIs: function(){
  this.$vha.flashlight.available((isAvailable) =&gt; {
    this.logText += &quot;闪光灯是否可用&quot; + isAvailable + &quot;\n&quot;
  })
},
FlashlightOn: function(){
  this.$vha.flashlight.switchOn((success) =&gt; {
      this.logText += &quot;开启 &quot; + success + &quot;\n&quot;
    }, (error) =&gt; {
      this.logText += &quot;开启失败 &quot; + error + &quot;\n&quot;
    })
},
FlashlightOff: function(){
  this.$vha.flashlight.switchOff((success) =&gt; {
      this.logText += &quot;关闭 &quot; + success + &quot;\n&quot;
    }, (error) =&gt; {
      this.logText += &quot;关闭失败 &quot; + error + &quot;\n&quot;
    })
},
FlashlightChange: function(){
  this.$vha.flashlight.toggle((success) =&gt; {
      this.logText += &quot;切换 &quot; + success + &quot;\n&quot;
    }, (error) =&gt; {
      this.logText += &quot;切换失败 &quot; + error + &quot;\n&quot;
    })
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Flashlight.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>