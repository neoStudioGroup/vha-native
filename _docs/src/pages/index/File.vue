<template>
  <div class="index_PG-File">
<!-- ------------------------------------------- -->
<section id="File">

<h1><strong><a href="#File">File</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-file" target="_blank">cordova-plugin-file</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-file</p>
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
<pre><code class="language-javascript">//获取设备剩余空间
getFreeDiskSpace: function(){
  this.$vha.file.getFreeDiskSpace()
    .then((success) =&gt; {
      this.logText += &quot;空闲空间 : &quot; + success + &quot;字节\n&quot;
    }, (error) =&gt; {
      this.logText += &quot;错误 : &quot; + error + &quot;\n&quot;
    })
},
//检测目录
checkDir: function(){
  this.$vha.file.checkDir(this.dataDirectory, this.t_DirName)
    .then((success) =&gt; {
      this.logText += this.dataDirectory + this.t_DirName + success + &quot;存在\n&quot;
    }, (error) =&gt; {
      this.logText += this.dataDirectory + this.t_DirName + error + &quot;不存在\n&quot;
    })
},
createDir: function(){
  this.$vha.file.createDir(this.dataDirectory, this.t_DirName, false)
    .then((success) =&gt; {
      this.logText += this.dataDirectory + this.t_DirName + success + &quot;创建目录成功\n&quot;
    }, (error) =&gt; {
      this.logText += this.dataDirectory + this.t_DirName + error + &quot;创建目录失败\n&quot;
    })
},
//删除目录
removeDir: function(){
  this.$vha.file.removeDir(this.dataDirectory, this.t_DirName)
    .then((success) =&gt; {
      this.logText += this.dataDirectory + this.t_DirName + success + &quot;删除成功\n&quot;
    }, (error) =&gt; {
      this.logText += this.dataDirectory + this.t_DirName + error + &quot;删除失败\n&quot;
    })
},
//检测文件
checkFile: function(){
  this.$vha.file.checkFile(this.dataDirectory, this.t_FileName)
    .then((success) =&gt; {
      this.logText += this.dataDirectory + this.t_FileName + success + &quot;存在\n&quot;
    }, (error) =&gt; {
      this.logText += this.dataDirectory + this.t_FileName + error + &quot;不存在\n&quot;
    })
},
//创建一个文件
createFile: function(){
  this.$vha.file.createFile(this.dataDirectory, this.t_FileName, true)
    .then((success) =&gt; {
      this.logText += this.dataDirectory + this.t_FileName + success + &quot;创建文件成功\n&quot;
    }, (error) =&gt; {
      this.logText += this.dataDirectory + this.t_FileName + error + &quot;创建文件失败\n&quot;
    })
},
//写入文件
writeFile: function(){
  this.$vha.file.writeFile(this.dataDirectory, this.t_FileName, &quot;neoStudioGroup.com&quot;, true)
    .then((success) =&gt; {
      this.logText += this.dataDirectory + this.t_FileName + success + &quot;写入文件成功\n&quot;
    }, (error) =&gt; {
      this.logText += this.dataDirectory + this.t_FileName + error + &quot;写入文件失败\n&quot;
    })
},
//读取文件
readFile: function(){
  this.$vha.file.readAsText(this.dataDirectory, this.t_FileName)
    .then((success) =&gt; {
      this.logText += this.dataDirectory + this.t_FileName + &quot;内容:&quot; + success + &quot;读取内容成功\n&quot;
    }, (error) =&gt; {
      this.logText += this.dataDirectory + this.t_FileName + error + &quot;读取内容失败\n&quot;
    })
},
//删除文件
removeFile: function(){
  this.$vha.file.removeFile(this.dataDirectory, this.t_FileName)
    .then((success) =&gt; {
      this.logText += this.dataDirectory + this.t_FileName + &quot;删除成功&quot; + success + &quot;\n&quot;
    }, (error) =&gt; {
      this.logText += this.dataDirectory + this.t_FileName + error + &quot;删除失败\n&quot;
    })
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/src/pages/_data/File.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>