<template>
  <div class="index_PG-App Login">
<!-- ------------------------------------------- -->
<section id="App-Login">

<h1><strong><a href="#App-Login">App Login</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-wechatv2" target="_blank">cordova-plugin-wechatv2</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-wechatv2 --variable wechatappid=&#60;YOUR_WECHAT_APPID&#62;</p>
</blockquote>
<br />

<h3>插件第三方APP获取登陆信息以及分享到微信朋友圈</h3>
<p class="ui-r-note _bdc-warning">微信SDK需要企业资质申请</p>

<p class="_cl-aaaaaa">应用场景：第三方登陆、分享等。</p>

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
<p class="ui-r-note _bdc-info">isInstalled()</p>

<p>微信是否安装</p>
<p class="ui-r-note _bdc-info">auth()</p>

<p>打开微信登陆</p>
<p class="ui-r-note _bdc-info">share()</p>

<p>分享到朋友圈</p>
</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">QQlogin: function () {

},
WXlogin: function () {
  Wechat.isInstalled(function (installed) {
    // this.logText += &quot;微信已安装&quot; + installed + &quot;\n&quot;
  }, function (reason) {
    this.logText += &quot;微信未安装 : &quot; + reason + &quot;\n&quot;
    return
  });

  var scope = &quot;snsapi_userinfo&quot;,
      state = &quot;_&quot; + (+new Date());
  Wechat.auth(scope, state, function (response) {
    // you may use response.code to get the access token.
    this.logText += JSON.stringify(response) + &quot;\n&quot;
  }, function (reason) {
    this.logText += &quot;失败 : &quot; + reason + &quot;\n&quot;
  })
},
share: function () {
  Wechat.share({
    text: &quot;这是vha-appDemo分享的文本&quot;,
    scene: Wechat.Scene.TIMELINE
  }, function () {
    this.logText += &quot;成功&quot; + &quot;\n&quot;
  }, function (reason) {
    this.logText += &quot;失败 : &quot; + reason + &quot;\n&quot;
  })
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/App Login.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>