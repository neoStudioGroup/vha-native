<template>
  <div class="index_PG-App Rate">
<!-- ------------------------------------------- -->
<section id="App-Rate">

<h1><strong><a href="#App-Rate">App Rate</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-apprate" target="_blank">cordova-plugin-apprate</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-apprate</p>
</blockquote>
<br />

<h3>显示或隐藏启动屏幕画面</h3>
<p class="_cl-aaaaaa">应用场景：打开应用商店</p>

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
<p class="ui-r-note _bdc-info">show()</p>

<p>显示启动屏幕</p>
<p class="ui-r-note _bdc-info">hide()</p>

<p>隐藏启动屏幕</p>
</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">promptRating: function () {
  this.$vha.apprate.preferences = {
    useLanguage: &#39;en&#39;,
    displayAppName: &#39;MY APP&#39;,
    promptAgainForEachNewVersion: true,
    openStoreInApp: false,
    usesUntilPrompt: 3,
    useCustomRateDialog: false,
    storeAppURL: {
      ios: &#39;&lt;my_app_id&gt;&#39;,
      android: &#39;market://details?id=&lt;package_name&gt;&#39;,
      windows8: &#39;ms-windows-store:Review?name=&lt;...&gt;&#39;,
      blackberry: null
    },
    customLocale: {
      title: &#39;动动手指，为我们打分&#39;,
      message: &#39;无论是来自亲的赞美诗，还是让亲唾沫横飞的槽点，我们只愿——让评价来得更猛烈些吧！&#39;,
      cancelButtonLabel: &#39;残忍地拒绝&#39;,
      laterButtonLabel: &#39;容我考虑考虑&#39;,
      rateButtonLabel: &#39;马上就去&#39;
    }
  }

  if (this.$vha.apprate.promptForRating(true)) {
    this.logText += &quot;成功&quot; + &quot;\n&quot;
  } else {
    this.logText += &quot;失败&quot; + &quot;\n&quot;
  }

  // if (this.$vha.apprate.navigateToAppStore()) {
  //   this.logText += &quot;成功&quot; + &quot;\n&quot;
  // } else {
  //   this.logText += &quot;失败&quot; + &quot;\n&quot;
  // }
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/App Rate.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>