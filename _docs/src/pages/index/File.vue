<template>
  <div class="index_PG-File">
<!-- ------------------------------------------- -->
<section id="File">

<h1><strong><a href="#File">File</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-file" target="_blank">cordova-plugin-file</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-file</p>
</blockquote>
<br />

<h3>访问该设备的文件和目录的插件</h3>
<p class="_cl-aaaaaa">应用场景：文件的读取与写入、软件更新、文件上传等。</p>

<ul>
<li><del>Browser</del></li>
<li>Android</li>
<li>iOS</li>
<li><del>WeChat</del></li>
</ul>
</section>
<!-- ------------------------------------------- -->
<section id="SystemLayout">

<h2><strong><a href="#SystemLayout">文件系统布局</a></strong></h2>
<p>每个操作系统有一个不一样的文件系统布局，这里是一个详细的描述，iOS和Android的文件系统。</p>
<p><strong>ios文件系统布局</strong></p>
<table>
<thead>
<tr>
<th>设备路径</th>
<th>cordova.file.*</th>
<th>iosExtraFileSystems</th>
<th>r/w?(读/写)</th>
<th>persistent?(持久性)</th>
<th>OS clears</th>
<th>sync(同步)</th>
<th>private(私有)</th>
</tr>
</thead>
<tbody><tr>
<td>/var/mobile/Applications/UUID/</td>
<td>applicationStorageDirectory</td>
<td>-</td>
<td>r</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>Yes</td>
</tr>
<tr>
<td>&nbsp;&nbsp;appname.app/</td>
<td>applicationDirectory</td>
<td>bundle</td>
<td>r</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>Yes</td>
</tr>
<tr>
<td>&nbsp;&nbsp;&nbsp;&nbsp;www/</td>
<td>-</td>
<td>-</td>
<td>r</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>Yes</td>
</tr>
<tr>
<td>&nbsp;&nbsp;&nbsp;&nbsp;Documents/</td>
<td>documentsDirectory</td>
<td>documents</td>
<td>r</td>
<td>N/A</td>
<td>No</td>
<td>N/A</td>
<td>Yes</td>
</tr>
<tr>
<td>&nbsp;&nbsp;&nbsp;&nbsp;NoCloud/</td>
<td>-</td>
<td>documents-nosync</td>
<td>r/w</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>&nbsp;&nbsp;Library/</td>
<td>-</td>
<td>library</td>
<td>r/w</td>
<td>Yes</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>&nbsp;&nbsp;&nbsp;&nbsp;NoCloud/</td>
<td>dataDirectory</td>
<td>library-nosync</td>
<td>r/w</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>&nbsp;&nbsp;&nbsp;&nbsp;Cloud/</td>
<td>syncedDataDirectory</td>
<td>-</td>
<td>r/w</td>
<td>Yes</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
</tr>
<tr>
<td>&nbsp;&nbsp;&nbsp;&nbsp;Caches/</td>
<td>cacheDirectory</td>
<td>cache</td>
<td>r/w</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>&nbsp;&nbsp;tmp/</td>
<td>tempDirectory</td>
<td>-</td>
<td>r/w</td>
<td>No</td>
<td>No</td>
<td>Yes</td>
<td>Yes</td>
</tr>
</tbody></table>
<p><strong>android文件系统布局</strong></p>
<table>
<thead>
<tr>
<th>设备路径</th>
<th>cordova.file.*</th>
<th>AndroidExtraFileSystems</th>
<th>r/w?(读/写)</th>
<th>persistent?(持久性)</th>
<th>OS clears</th>
<th>private(私有)</th>
</tr>
</thead>
<tbody><tr>
<td>file:///android_asset/</td>
<td>applicationDirectory</td>
<td></td>
<td>r</td>
<td>N/A</td>
<td>N/A</td>
<td>Yes</td>
</tr>
<tr>
<td>/data/data/app-id/</td>
<td>applicationStorageDirectory</td>
<td>-</td>
<td>r/w</td>
<td>N/A</td>
<td>N/A</td>
<td>Yes</td>
</tr>
<tr>
<td>&nbsp;&nbsp;cache</td>
<td>cacheDirectory</td>
<td>cache</td>
<td>r/w</td>
<td>Yes</td>
<td>Yes*</td>
<td>Yes</td>
</tr>
<tr>
<td>&nbsp;&nbsp;files</td>
<td>dataDirectory</td>
<td>files</td>
<td>r/w</td>
<td>Yes</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>&nbsp;&nbsp;&nbsp;&nbsp;Documents</td>
<td></td>
<td>documents</td>
<td>r/w</td>
<td>Yes</td>
<td>No</td>
<td>Yes</td>
</tr>
<tr>
<td>sdcard/</td>
<td>externalRootDirectory</td>
<td>sdcard</td>
<td>r/w</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td>&nbsp;&nbsp;Android/data/app-id/</td>
<td>externalApplicationStorageDirectory</td>
<td>-</td>
<td>r/w</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td>&nbsp;&nbsp;&nbsp;&nbsp;cache</td>
<td>externalCacheDirectory</td>
<td>cache-external</td>
<td>r/w</td>
<td>Yes</td>
<td>No**</td>
<td>No</td>
</tr>
<tr>
<td>&nbsp;&nbsp;&nbsp;&nbsp;files</td>
<td>externalDataDirectory</td>
<td>files-external</td>
<td>r/w</td>
<td>Yes</td>
<td>No**</td>
<td>No</td>
</tr>
</tbody></table>
<p class="ui-r-note _bdc-warning">如果外部存储不能安装，cordova.file.external*属性为空。</p>

<p class="ui-r-note _bdc-error">文件错误代码 (File Error Codes)</p>

<p>当抛出错误时，将使用下列代码之一。</p>
<table>
<thead>
<tr>
<th>代码(Codes)</th>
<th>常量</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td>NOT_FOUND_ERR</td>
</tr>
<tr>
<td>2</td>
<td>SECURITY_ERR</td>
</tr>
<tr>
<td>3</td>
<td>ABORT_ERR</td>
</tr>
<tr>
<td>4</td>
<td>NOT_READABLE_ERR</td>
</tr>
<tr>
<td>5</td>
<td>ENCODING_ERR</td>
</tr>
<tr>
<td>6</td>
<td>NO_MODIFICATION_ALLOWED_ERR</td>
</tr>
<tr>
<td>7</td>
<td>INVALID_STATE_ERR</td>
</tr>
<tr>
<td>8</td>
<td>SYNTAX_ERR</td>
</tr>
<tr>
<td>9</td>
<td>INVALID_MODIFICATION_ERR</td>
</tr>
<tr>
<td>10</td>
<td>QUOTA_EXCEEDED_ERR</td>
</tr>
<tr>
<td>11</td>
<td>TYPE_MISMATCH_ERR</td>
</tr>
<tr>
<td>12</td>
<td>PATH_EXISTS_ERR</td>
</tr>
</tbody></table>
</section>
<!-- ------------------------------------------- -->
<section id="Methods">

<h2><strong><a href="#Methods">方法</a></strong></h2>
<p class="ui-r-note _bdc-info" id="getfreediskspace">getFreeDiskSpace()</p>

<p>获取设备磁盘总空闲空间</p>
<p class="ui-r-return"><span>↪ 返回值：String</span></p>


<p class="ui-r-note _bdc-info" id="checkdirpath-directory">checkDir(path, directory)</p>

<p>检测某路径的文件目录是否存在</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>path</td>
<td>FileSystem</td>
<td>基本文件系统。请参考以上的iOS和Android的文件系统</td>
</tr>
<tr>
<td>directory</td>
<td>String</td>
<td>检查的目录名称</td>
</tr>
</tbody></table>
<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="checkfilepath-file">checkFile(path, file)</p>

<p>检测某路径中的文件是否存在</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>path</td>
<td>FileSystem</td>
<td>基本文件系统。请参考以上的iOS和Android的文件系统</td>
</tr>
<tr>
<td>file</td>
<td>String</td>
<td>检查的文件路径</td>
</tr>
</tbody></table>
<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="createdirpath-directory-replace">createDir(path, directory, replace)</p>

<p>在特定路径中创建一个新目录。replace boolean参数确定是否以相同的名称替换已存在的目录。如果存在目录存在且替换值为false，则承诺将失败并返回一个错误。</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>path</td>
<td>FileSystem</td>
<td>基本文件系统。请参考以上的iOS和Android的文件系统</td>
</tr>
<tr>
<td>directory</td>
<td>String</td>
<td>创建目录名称</td>
</tr>
<tr>
<td>replace</td>
<td>Boolean</td>
<td>如果为true替换目录,如果为false有相同名称的文件时,返回一个错误</td>
</tr>
</tbody></table>
<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="createfilepath-file-replace">createFile(path, file, replace)</p>

<p>在特定路径中创建一个新文件。replace boolean 参数确定是否以相同的名称替换已存在的文件。如果存在的文件存在且替换值是错误的，则该承诺将失败并返回一个错误。</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>path</td>
<td>FileSystem</td>
<td>基本文件系统。请参考以上的iOS和Android的文件系统</td>
</tr>
<tr>
<td>file</td>
<td>String</td>
<td>创建文件名称</td>
</tr>
<tr>
<td>replace</td>
<td>Boolean</td>
<td>如果为true替换目录,如果为false有相同名称的文件时,返回一个错误</td>
</tr>
</tbody></table>
<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="removefilepath-file">removeFile(path, file)</p>

<p>从所需的位置删除一个文件。</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>path</td>
<td>FileSystem</td>
<td>基本文件系统。请参考以上的iOS和Android的文件系统</td>
</tr>
<tr>
<td>file</td>
<td>String</td>
<td>删除文件名称</td>
</tr>
</tbody></table>
<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="removedirpath-directory">removeDir(path, directory)</p>

<p>从所需的位置删除一个目录。</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>path</td>
<td>FileSystem</td>
<td>基本文件系统。请参考以上的iOS和Android的文件系统</td>
</tr>
<tr>
<td>file</td>
<td>String</td>
<td>删除目录名称</td>
</tr>
</tbody></table>
<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="removerecursivelypath-directory">removeRecursively(path, directory)</p>

<p>从所需的位置删除所有文件和目录。</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>path</td>
<td>FileSystem</td>
<td>基本文件系统。请参考以上的iOS和Android的文件系统</td>
</tr>
<tr>
<td>directory</td>
<td>String</td>
<td>删除目录名称</td>
</tr>
</tbody></table>
<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="writefilepath-file-data-replace">writeFile(path, file, data, replace)</p>

<p>写入一个新文件，如果需要的话，可以替换。</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>path</td>
<td>FileSystem</td>
<td>基本文件系统。请参考以上的iOS和Android的文件系统</td>
</tr>
<tr>
<td>file</td>
<td>String</td>
<td>写入文件名称</td>
</tr>
<tr>
<td>data</td>
<td>String</td>
<td>Text/data 写入文件的数据</td>
</tr>
<tr>
<td>replace</td>
<td>String</td>
<td>如果为true替换文件,如果为false有相同名称的文件时,返回一个错误</td>
</tr>
</tbody></table>
<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="writeexistingfilepath-file-data">writeExistingFile(path, file, data)</p>

<p>写入一个存在的文件。</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>path</td>
<td>FileSystem</td>
<td>基本文件系统。请参考以上的iOS和Android的文件系统</td>
</tr>
<tr>
<td>file</td>
<td>String</td>
<td>写入文件名称</td>
</tr>
<tr>
<td>data</td>
<td>String</td>
<td>Text/data 写入文件的数据</td>
</tr>
</tbody></table>
<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="readastextpath-file">readAsText(path, file)</p>

<h5 id="readasdataurlpath-file">readAsDataURL(path, file)</h5>
<h5 id="readasbinarystringpath-file">readAsBinaryString(path, file)</h5>
<h5 id="readasarraybufferpath-file">readAsArrayBuffer(path, file)</h5>

<p>在各种方法中读取文件。</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>path</td>
<td>FileSystem</td>
<td>基本文件系统。请参考以上的iOS和Android的文件系统</td>
</tr>
<tr>
<td>file</td>
<td>String</td>
<td>读取文件名称</td>
</tr>
</tbody></table>
<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="movedirpath-directory-newpath-newdirectory">moveDir(path, directory, newPath, newDirectory)</p>

<p>移动一个目录</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>path</td>
<td>FileSystem</td>
<td>基本文件系统。请参考以上的iOS和Android的文件系统</td>
</tr>
<tr>
<td>directory</td>
<td>String</td>
<td>移动目录名称</td>
</tr>
<tr>
<td>newPath</td>
<td>String</td>
<td>新位置的基文件系统请参考以上的iOS和Android的文件系统</td>
</tr>
<tr>
<td>newDirectory</td>
<td>String</td>
<td>新目录名称</td>
</tr>
</tbody></table>
<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="movefilepath-file-newpath-newfile">moveFile(path, file, newPath, newFile)</p>

<p>移动一个文件</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>path</td>
<td>FileSystem</td>
<td>基本文件系统。请参考以上的iOS和Android的文件系统</td>
</tr>
<tr>
<td>file</td>
<td>String</td>
<td>移动文件名称</td>
</tr>
<tr>
<td>newPath</td>
<td>String</td>
<td>新位置的基文件系统请参考以上的iOS和Android的文件系统</td>
</tr>
<tr>
<td>newFile</td>
<td>String</td>
<td>新文件名称</td>
</tr>
</tbody></table>
<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="copydirpath-directory-newpath-newdirectory">copyDir(path, directory, newPath, newDirectory)</p>

<p>复制一个目录</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>path</td>
<td>FileSystem</td>
<td>基本文件系统。请参考以上的iOS和Android的文件系统</td>
</tr>
<tr>
<td>directory</td>
<td>String</td>
<td>复制目录名称</td>
</tr>
<tr>
<td>newPath</td>
<td>String</td>
<td>新位置的基文件系统请参考以上的iOS和Android的文件系统</td>
</tr>
<tr>
<td>newDirectory</td>
<td>String</td>
<td>新目录名称</td>
</tr>
</tbody></table>
<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="copyfilepath-file-newpath-newfile">copyFile(path, file, newPath, newFile)</p>

<p>复制一个文件</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>path</td>
<td>FileSystem</td>
<td>基本文件系统。请参考以上的iOS和Android的文件系统</td>
</tr>
<tr>
<td>file</td>
<td>String</td>
<td>复制文件名称</td>
</tr>
<tr>
<td>newPath</td>
<td>String</td>
<td>新位置的基文件系统请参考以上的iOS和Android的文件系统</td>
</tr>
<tr>
<td>newFile</td>
<td>String</td>
<td>新文件名称</td>
</tr>
</tbody></table>
<p class="ui-r-return"><span>↪ 返回值：Object</span></p>

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
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/File.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>