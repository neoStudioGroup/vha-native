<template>
  <div class="index_PG-File Transfer">
<!-- ------------------------------------------- -->
<section id="File-Transfer">

<h1><strong><a href="#File-Transfer">File Transfer</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-file-transfer" target="_blank">cordova-plugin-file-transfer</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-file-transfer</p>
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
<pre><code class="language-javascript">downloadFile: function () {
  let url = &quot;https://imgsrc.baidu.com/forum/pic/item/dbe35e94a4c27d1e38a4f72913d5ad6edfc438be.jpg&quot;
  let targetPath =  this.$vha.file.const.externalDataDirectory + &quot;testImage.jpg&quot;
  let trustHosts = true
  let options = {}

  this.$vha.filetransfer.download(url, targetPath, options, trustHosts, (progress, ftID) =&gt; {
    this.downloadProgress = parseInt((progress.loaded / progress.total) * 100)

    if(this.downloadProgress &gt; 30){
      // this.$vha.filetransfer.abort(ftID)
    }
  }).then((result) =&gt; {
    targetPath =  result.toURL()
    this.logText += result + &quot;\n&quot;
    this.logText += result.toURL() + &quot;\n&quot;

    this.targetPath = targetPath
  }, (error) =&gt; {
    this.logText += &quot;错误 : &quot; + error + &quot;\n&quot;
  })
},
uploadFile: function(){
  let server = prompt(&quot;输入你的服务器地址&quot;, &quot;&quot;)
  if (server) {
    this.$vha.filetransfer.upload(server, this.targetPath, {}, true, (progress, ftID) =&gt; {
      this.uploadProgress = parseInt((progress.loaded / progress.total) * 100)

      if(this.uploadProgress &gt; 30){
        // this.$vha.filetransfer.abort(ftID)
      }
    }).then((result) =&gt; {
      this.logText += &quot;上传成功&quot; + &quot;\n&quot;
    }, (error) =&gt; {
      this.logText += &quot;错误 : &quot; + error + &quot;\n&quot;
    })
  }
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/src/pages/_data/File Transfer.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>