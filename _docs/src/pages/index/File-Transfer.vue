<template>
  <div class="index_PG-File Transfer">
<!-- ------------------------------------------- -->
<section id="File-Transfer">

<h1><strong><a href="#File-Transfer">File Transfer</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-file-transfer" target="_blank">cordova-plugin-file-transfer</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-file-transfer</p>
</blockquote>
<br />

<h3>通过服务器上传或者下载文件</h3>
<p class="_cl-aaaaaa">应用场景：图片、应用等。</p>

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
<p class="ui-r-note _bdc-info" id="downloadurl-targetpath-options-trusthosts">download(url, targetPath, options, trustHosts)</p>

<p>从服务器下载文件</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>url</td>
<td>String</td>
<td>文件服务器URL下载地址</td>
</tr>
<tr>
<td>targetPath</td>
<td>String</td>
<td>文件保存路径</td>
</tr>
<tr>
<td>options</td>
<td>Object</td>
<td>可选参数</td>
</tr>
<tr>
<td>trustAllHosts</td>
<td>Boolean</td>
<td>如果设置为true，接受所有安全证书</td>
</tr>
</tbody></table>
<table>
<thead>
<tr>
<th>返回值</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>success</td>
<td>Object</td>
<td>返回成功下载的文件路径和更多的信息</td>
</tr>
<tr>
<td>progress</td>
<td>Object</td>
<td>返回下载文件的进度</td>
</tr>
</tbody></table>
<p class="ui-r-note _bdc-info" id="uploadserver-targetpath-options-trustallhosts">upload(server, targetPath, options, trustAllHosts)</p>

<p>上传文件到服务器</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>url</td>
<td>String</td>
<td>服务器上传地址</td>
</tr>
<tr>
<td>targetPath</td>
<td>String</td>
<td>上传文件路径</td>
</tr>
<tr>
<td>options</td>
<td>Object</td>
<td>可选参数</td>
</tr>
<tr>
<td>trustAllHosts</td>
<td>Boolean</td>
<td>如果设置为true，接受所有安全证书</td>
</tr>
</tbody></table>
<table>
<thead>
<tr>
<th>返回值</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>success</td>
<td>Object</td>
<td>返回成功对象的文件路径和更多的信息</td>
</tr>
<tr>
<td>progress</td>
<td>Object</td>
<td>返回上传文件的进度</td>
</tr>
</tbody></table>
<p>选项参数是一个Object，有以下几个关键的属性：</p>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>encodeURI</td>
<td>Boolean</td>
<td>编码服务器的URL使用encodeURI。默认设置为true</td>
</tr>
<tr>
<td>timeout</td>
<td>Integer</td>
<td>超时时间已毫秒为单位</td>
</tr>
</tbody></table>
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
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/File Transfer.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>