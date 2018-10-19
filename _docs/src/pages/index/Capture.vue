<template>
  <div class="index_PG-Capture">
<!-- ------------------------------------------- -->
<section id="Capture">

<h1><strong><a href="#Capture">Capture</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-media-capture" target="_blank">cordova-plugin-media-capture</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-media-capture</p>
</blockquote>
<br />

<h3>调用设备相机录像。</h3>
<p class="_cl-aaaaaa">应用场景：分享周边</p>

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
<p class="ui-r-note _bdc-info">captureAudio()</p>

<p><del>录制音频</del></p>
<p class="ui-r-note _bdc-info">captureImage()</p>

<p><del>拍照</del></p>
<p class="ui-r-note _bdc-info">captureVideo()</p>

<p>录制视频</p>
</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<p class="ui-r-note _bdc-error">captureAudio、captureImage方法调用失败、目前仅适合录制视频</p>

<pre><code class="language-javascript">captureAudio: function () {
  let options = {
    limit: 1,
    duration: 10
  }

  this.$vha.capture.captureAudio((audioData) =&gt; {
    console.log(audioData)
    this.logText += audioData + &quot;\n&quot;
  }, (err) =&gt; {
    this.logText += &quot;错误 : &quot; + err + &quot;\n&quot;
  }, options)
},
captureImage: function () {
  let options = {
    limit: 3
  }

  this.$vha.capture.captureImage((imageData) =&gt; {
    console.log(imageData)
    this.logText += imageData + &quot;\n&quot;
  }, (err) =&gt; {
    this.logText += &quot;错误 : &quot; + err + &quot;\n&quot;
  }, options)
},
captureVideo: function () {
  let options = {
    limit: 1,
    duration: 15
  }

  this.$vha.capture.captureVideo((videoData) =&gt; {
    console.log(videoData)
    this.logText += videoData + &quot;\n&quot;
  }, (err) =&gt; {
    this.logText += &quot;错误 : &quot; + err + &quot;\n&quot;
  }, options)
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Capture.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>