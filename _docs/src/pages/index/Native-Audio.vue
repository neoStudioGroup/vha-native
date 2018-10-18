<template>
  <div class="index_PG-Native Audio">
<!-- ------------------------------------------- -->
<section id="Native-Audio">

<h1><strong><a href="#Native-Audio">Native Audio</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-nativeaudio" target="_blank">cordova-plugin-nativeaudio</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-nativeaudio</p>
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
<pre><code class="language-javascript">methods: {
  //方法 - 每次进入页面创建
  play: function (id) {
    this.$vha.nativeaudio.play(id, (result) =&gt; {
      this.logText += id + result + &quot;\n&quot;
    }, (err) =&gt; {
      this.logText += err + &quot;\n&quot;
    })
  },
  loop: function (id) {
    this.$vha.nativeaudio.loop(id, (result) =&gt; {
      this.logText += id + result + &quot;\n&quot;
    }, (err) =&gt; {
      this.logText += err + &quot;\n&quot;
    })
  },
  stop: function (id) {
    this.$vha.nativeaudio.stop(id, (result) =&gt; {
      this.logText += id + result + &quot;\n&quot;
    }, (err) =&gt; {
      this.logText += err + &quot;\n&quot;
    })
  },
},
watch: {
  //观察 - 数据或方法
},
created() {
  //实例创建完成后
  this.$vha.nativeaudio.preloadSimple(&#39;bass&#39;, &#39;assets/audio/bass.mp3&#39;, (result) =&gt; {
    this.logText += &#39;load bass&#39; + result + &quot;\n&quot;
  }, (err) =&gt; {
    this.logText += err + &quot;\n&quot;
  })

  this.$vha.nativeaudio.preloadSimple(&#39;highhat&#39;, &#39;assets/audio/highhat.mp3&#39;, (result) =&gt; {
    this.logText += &#39;load highhat&#39; + result + &quot;\n&quot;
  }, (err) =&gt; {
    this.logText += err + &quot;\n&quot;
  })

  this.$vha.nativeaudio.preloadSimple(&#39;snare&#39;, &#39;assets/audio/snare.mp3&#39;, (result) =&gt; {
    this.logText += &#39;load snare&#39; + result + &quot;\n&quot;
  }, (err) =&gt; {
    this.logText += err + &quot;\n&quot;
  })

}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/src/pages/_data/Native Audio.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>