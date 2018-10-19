<template>
  <div class="index_PG-SMS">
<!-- ------------------------------------------- -->
<section id="SMS">

<h1><strong><a href="#SMS">SMS</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-sms-plugin" target="_blank">cordova-sms-plugin</a></p>

<blockquote>
<p>cordova plugin add cordova-sms-plugin</p>
</blockquote>
<br />

<h3>使用设备发送短信</h3>
<p class="_cl-aaaaaa">应用场景：用户验证、登陆验证。</p>

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
<p class="ui-r-note _bdc-info">send(phoneNumber, message, options)</p>

<p>向目标手机发送短信（需要用户受权）</p>
<table>
<thead>
<tr>
<th>Param</th>
<th>Type</th>
<th>Details</th>
</tr>
</thead>
<tbody><tr>
<td>phoneNumber</td>
<td>string|Array.&#60;string&#62;</td>
<td>Phone number</td>
</tr>
<tr>
<td>message</td>
<td>string</td>
<td>Message</td>
</tr>
<tr>
<td>options</td>
<td>SmsOptions</td>
<td>Options</td>
</tr>
</tbody></table>
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
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/SMS.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>