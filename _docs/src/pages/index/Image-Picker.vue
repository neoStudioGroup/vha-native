<template>
  <div class="index_PG-Image Picker">
<!-- ------------------------------------------- -->
<section id="Image-Picker">

<h1><strong><a href="#Image-Picker">Image Picker</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-mediapicker-dmcbig" target="_blank">cordova-plugin-mediapicker-dmcbig</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-mediapicker-dmcbig</p>
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
<pre><code class="language-javascript">compressImage: function () {
  //please:  cordova plugin add cordova-plugin-file-transfer
  //see:  https://github.com/apache/cordova-plugin-file-transfer
  //use medias[index].path

  //OR
  this.compressImages = []

  this.imgurls.forEach(element =&gt; {
    // if(resultMedias[i].size&gt;1048576){ resultMedias[i].quality=50; } else {d ataArray[i].quality=100;}
    element.quality = 30

    this.$vha.mediapicker.compressImage(element, (compressData) =&gt; {
      //user compressData.path upload compress img
      this.compressImages.push(compressData)
    }, (error) =&gt; {
      this.logText += &quot;错误 : &quot;+ error + &quot;\n&quot;
    })
  })

  //ios Video transcoding compression to MP4 Event(use AVAssetExportPresetMediumQuality)
  document.addEventListener(&quot;MediaPicker.CompressVideoEvent&quot;, function(data) {
    alert(data.status + &quot;||&quot; + data.index)
  }, false)
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/src/pages/_data/Image Picker.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>