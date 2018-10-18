<template>
  <div class="index_PG-SMS">
<!-- ------------------------------------------- -->
<section id="SMS">

<h1><strong><a href="#SMS">SMS</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-sms-plugin" target="_blank">cordova-sms-plugin</a></p>

<blockquote>
<p>cordova plugin add cordova-sms-plugin</p>
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
<pre><code class="language-javascript">send: function () {
  this.logText += &quot;发送短信 : &quot; + this.smsNumber + &quot; &quot; + this.smsText + &quot;\n&quot;

  this.$vha.sms.send(this.smsNumber, this.smsText, {}, (res) =&gt; {
    this.logText += &quot;成功&quot; + res + &quot;\n&quot;
  }, (err) =&gt; {
    this.logText += &quot;失败&quot; + err + &quot;\n&quot;
  })
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/src/pages/_data/SMS.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>