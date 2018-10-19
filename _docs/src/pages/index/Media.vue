<template>
  <div class="index_PG-Media">
<!-- ------------------------------------------- -->
<section id="Media">

<h1><strong><a href="#Media">Media</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-media" target="_blank">cordova-plugin-media</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-media</p>
</blockquote>
<br />

<h3>调用设备麦克风录音。</h3>
<p class="_cl-aaaaaa">应用场景：语音消息</p>

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
<p class="ui-r-note _bdc-info">startRecord()</p>

<p>开始录音</p>
<p class="ui-r-note _bdc-info">stopRecord()</p>

<p>停止录音</p>
</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">Record: function () {
  if (this.btntext === &quot;开始录音&quot;) {
    this.btntext = &quot;停止录音&quot;

    this.recordMedia = new Media(this.$vha.file.const.externalDataDirectory + &quot;Record.mp3&quot;,
      (success) =&gt; {
        console.log(&quot;成功 : &quot;, success)
        this.logText += &quot;成功 : &quot; + success + &quot;\n&quot;
      }, (error) =&gt; {
        console.log(&quot;错误 : &quot;, error)
        this.logText += &quot;错误 : &quot; + error + &quot;\n&quot;
      }, (status) =&gt; {
        console.log(&quot;状态 : &quot;, status)
        this.logText += &quot;状态 : &quot; + status + &quot;\n&quot;
      })

    this.recordMedia.startRecord()
  } else {
    this.btntext = &quot;开始录音&quot;
    this.recordMedia.stopRecord()
    this.recordMedia.release()
    this.recordMedia = undefined
  }
},
playRecord: function () {
  let media = new Media(this.$vha.file.const.externalDataDirectory + &quot;Record.mp3&quot;,
    (success) =&gt; {
      console.log(&quot;成功 : &quot;, success)
      this.logText += &quot;成功 : &quot; + success + &quot;\n&quot;
      media.release()
    }, (error) =&gt; {
      console.log(&quot;错误 : &quot;, error)
      this.logText += &quot;错误 : &quot; + error + &quot;\n&quot;
      media.release()
    }, (status) =&gt; {
      console.log(&quot;状态 : &quot;, status)
      this.logText += &quot;状态 : &quot; + status + &quot;\n&quot;
    })      

  var iOSPlayOptions = {
    numberOfLoops: 2,
    playAudioWhenScreenIsLocked: false
  }

  if (this.$vha.device.platform != &quot;Android&quot;) {
    media.play(iOSPlayOptions) // iOS only!
  }else{
    media.play() // Android
  }

  // media.pause()
  // media.stop()
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Media.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>