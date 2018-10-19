---
{
  "title": "文件",
  "name": "File",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="File">

# **[File](#File)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-file" target="_blank">cordova-plugin-file</a></p>

> cordova plugin add cordova-plugin-file

<br />

### 访问该设备的文件和目录的插件

<p class="_cl-aaaaaa">应用场景：文件的读取与写入、软件更新、文件上传等。</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="SystemLayout">

## **[文件系统布局](#SystemLayout)**

每个操作系统有一个不一样的文件系统布局，这里是一个详细的描述，iOS和Android的文件系统。

**ios文件系统布局**

设备路径|cordova.file.*|iosExtraFileSystems|r/w?(读/写)|persistent?(持久性)|OS clears|sync(同步)|private(私有)
-|-|-|-|-|-|-|-
/var/mobile/Applications/UUID/|applicationStorageDirectory|-|r|N/A|N/A|N/A|Yes
&nbsp;&nbsp;appname.app/|applicationDirectory|bundle|r|N/A|N/A|N/A|Yes
&nbsp;&nbsp;&nbsp;&nbsp;www/|-|-|r|N/A|N/A|N/A|Yes
&nbsp;&nbsp;&nbsp;&nbsp;Documents/|documentsDirectory|documents|r|N/A|No|N/A|Yes
&nbsp;&nbsp;&nbsp;&nbsp;NoCloud/|-|documents-nosync|r/w|Yes|No|No|Yes
&nbsp;&nbsp;Library/|-|library|r/w|Yes|No|Yes|Yes
&nbsp;&nbsp;&nbsp;&nbsp;NoCloud/|dataDirectory|library-nosync|r/w|Yes|No|No|Yes
&nbsp;&nbsp;&nbsp;&nbsp;Cloud/|syncedDataDirectory|-|r/w|Yes|No|Yes|Yes
&nbsp;&nbsp;&nbsp;&nbsp;Caches/|cacheDirectory|cache|r/w|Yes|No|No|Yes
&nbsp;&nbsp;tmp/|tempDirectory|-|r/w|No|No|Yes|Yes

**android文件系统布局**

设备路径|cordova.file.*|AndroidExtraFileSystems|r/w?(读/写)|persistent?(持久性)|OS clears|private(私有)
-|-|-|-|-|-|-
file:///android_asset/|applicationDirectory||r|N/A|N/A|Yes
/data/data/app-id/|applicationStorageDirectory|-|r/w|N/A|N/A|Yes
&nbsp;&nbsp;cache|cacheDirectory|cache|r/w|Yes|Yes*|Yes
&nbsp;&nbsp;files|dataDirectory|files|r/w|Yes|No|Yes
&nbsp;&nbsp;&nbsp;&nbsp;Documents||documents|r/w|Yes|No|Yes
sdcard/|externalRootDirectory|sdcard|r/w|Yes|No|No
&nbsp;&nbsp;Android/data/app-id/|externalApplicationStorageDirectory|-|r/w|Yes|No|No
&nbsp;&nbsp;&nbsp;&nbsp;cache|externalCacheDirectory|cache-external|r/w|Yes|No**|No
&nbsp;&nbsp;&nbsp;&nbsp;files|externalDataDirectory|files-external|r/w|Yes|No**|No

<p class="ui-r-note _bdc-warning">如果外部存储不能安装，cordova.file.external*属性为空。</p>

<p class="ui-r-note _bdc-error">文件错误代码 (File Error Codes)</p>

当抛出错误时，将使用下列代码之一。

代码(Codes)|常量
-|-
1|NOT_FOUND_ERR
2|SECURITY_ERR
3|ABORT_ERR
4|NOT_READABLE_ERR
5|ENCODING_ERR
6|NO_MODIFICATION_ALLOWED_ERR
7|INVALID_STATE_ERR
8|SYNTAX_ERR
9|INVALID_MODIFICATION_ERR
10|QUOTA_EXCEEDED_ERR
11|TYPE_MISMATCH_ERR
12|PATH_EXISTS_ERR

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info" id="getfreediskspace">getFreeDiskSpace()</p>

获取设备磁盘总空闲空间

<p class="ui-r-return"><span>↪ 返回值：String</span></p>


<p class="ui-r-note _bdc-info" id="checkdirpath-directory">checkDir(path, directory)</p>

检测某路径的文件目录是否存在

参数|类型|说明
-|-|-
path|FileSystem|基本文件系统。请参考以上的iOS和Android的文件系统
directory|String|检查的目录名称

<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="checkfilepath-file">checkFile(path, file)</p>

检测某路径中的文件是否存在

参数|类型|说明
-|-|-
path|FileSystem|基本文件系统。请参考以上的iOS和Android的文件系统
file|String|检查的文件路径

<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="createdirpath-directory-replace">createDir(path, directory, replace)</p>

在特定路径中创建一个新目录。replace boolean参数确定是否以相同的名称替换已存在的目录。如果存在目录存在且替换值为false，则承诺将失败并返回一个错误。

参数|类型|说明
-|-|-
path|FileSystem|基本文件系统。请参考以上的iOS和Android的文件系统
directory|String|创建目录名称
replace|Boolean|如果为true替换目录,如果为false有相同名称的文件时,返回一个错误

<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="createfilepath-file-replace">createFile(path, file, replace)</p>

在特定路径中创建一个新文件。replace boolean 参数确定是否以相同的名称替换已存在的文件。如果存在的文件存在且替换值是错误的，则该承诺将失败并返回一个错误。

参数|类型|说明
-|-|-
path|FileSystem|基本文件系统。请参考以上的iOS和Android的文件系统
file|String|创建文件名称
replace|Boolean|如果为true替换目录,如果为false有相同名称的文件时,返回一个错误

<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="removefilepath-file">removeFile(path, file)</p>

从所需的位置删除一个文件。

参数|类型|说明
-|-|-
path|FileSystem|基本文件系统。请参考以上的iOS和Android的文件系统
file|String|删除文件名称

<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="removedirpath-directory">removeDir(path, directory)</p>

从所需的位置删除一个目录。

参数|类型|说明
-|-|-
path|FileSystem|基本文件系统。请参考以上的iOS和Android的文件系统
file|String|删除目录名称

<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="removerecursivelypath-directory">removeRecursively(path, directory)</p>

从所需的位置删除所有文件和目录。

参数|类型|说明
-|-|-
path|FileSystem|基本文件系统。请参考以上的iOS和Android的文件系统
directory|String|删除目录名称

<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="writefilepath-file-data-replace">writeFile(path, file, data, replace)</p>

写入一个新文件，如果需要的话，可以替换。

参数|类型|说明
-|-|-
path|FileSystem|基本文件系统。请参考以上的iOS和Android的文件系统
file|String|写入文件名称
data|String|Text/data 写入文件的数据
replace|String|如果为true替换文件,如果为false有相同名称的文件时,返回一个错误

<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="writeexistingfilepath-file-data">writeExistingFile(path, file, data)</p>

写入一个存在的文件。

参数|类型|说明
-|-|-
path|FileSystem|基本文件系统。请参考以上的iOS和Android的文件系统
file|String|写入文件名称
data|String|Text/data 写入文件的数据

<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="readastextpath-file">readAsText(path, file)</p>

<h5 id="readasdataurlpath-file">readAsDataURL(path, file)</h5>
<h5 id="readasbinarystringpath-file">readAsBinaryString(path, file)</h5>
<h5 id="readasarraybufferpath-file">readAsArrayBuffer(path, file)</h5>

在各种方法中读取文件。

参数|类型|说明
-|-|-
path|FileSystem|基本文件系统。请参考以上的iOS和Android的文件系统
file|String|读取文件名称

<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="movedirpath-directory-newpath-newdirectory">moveDir(path, directory, newPath, newDirectory)</p>

移动一个目录

参数|类型|说明
-|-|-
path|FileSystem|基本文件系统。请参考以上的iOS和Android的文件系统
directory|String|移动目录名称
newPath|String|新位置的基文件系统请参考以上的iOS和Android的文件系统
newDirectory|String|新目录名称

<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="movefilepath-file-newpath-newfile">moveFile(path, file, newPath, newFile)</p>

移动一个文件

参数|类型|说明
-|-|-
path|FileSystem|基本文件系统。请参考以上的iOS和Android的文件系统
file|String|移动文件名称
newPath|String|新位置的基文件系统请参考以上的iOS和Android的文件系统
newFile|String|新文件名称

<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="copydirpath-directory-newpath-newdirectory">copyDir(path, directory, newPath, newDirectory)</p>

复制一个目录

参数|类型|说明
-|-|-
path|FileSystem|基本文件系统。请参考以上的iOS和Android的文件系统
directory|String|复制目录名称
newPath|String|新位置的基文件系统请参考以上的iOS和Android的文件系统
newDirectory|String|新目录名称

<p class="ui-r-return"><span>↪ 返回值：Object</span></p>


<p class="ui-r-note _bdc-info" id="copyfilepath-file-newpath-newfile">copyFile(path, file, newPath, newFile)</p>

复制一个文件

参数|类型|说明
-|-|-
path|FileSystem|基本文件系统。请参考以上的iOS和Android的文件系统
file|String|复制文件名称
newPath|String|新位置的基文件系统请参考以上的iOS和Android的文件系统
newFile|String|新文件名称

<p class="ui-r-return"><span>↪ 返回值：Object</span></p>

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

```javascript
//获取设备剩余空间
getFreeDiskSpace: function(){
  this.$vha.file.getFreeDiskSpace()
    .then((success) => {
      this.logText += "空闲空间 : " + success + "字节\n"
    }, (error) => {
      this.logText += "错误 : " + error + "\n"
    })
},
//检测目录
checkDir: function(){
  this.$vha.file.checkDir(this.dataDirectory, this.t_DirName)
    .then((success) => {
      this.logText += this.dataDirectory + this.t_DirName + success + "存在\n"
    }, (error) => {
      this.logText += this.dataDirectory + this.t_DirName + error + "不存在\n"
    })
},
createDir: function(){
  this.$vha.file.createDir(this.dataDirectory, this.t_DirName, false)
    .then((success) => {
      this.logText += this.dataDirectory + this.t_DirName + success + "创建目录成功\n"
    }, (error) => {
      this.logText += this.dataDirectory + this.t_DirName + error + "创建目录失败\n"
    })
},
//删除目录
removeDir: function(){
  this.$vha.file.removeDir(this.dataDirectory, this.t_DirName)
    .then((success) => {
      this.logText += this.dataDirectory + this.t_DirName + success + "删除成功\n"
    }, (error) => {
      this.logText += this.dataDirectory + this.t_DirName + error + "删除失败\n"
    })
},
//检测文件
checkFile: function(){
  this.$vha.file.checkFile(this.dataDirectory, this.t_FileName)
    .then((success) => {
      this.logText += this.dataDirectory + this.t_FileName + success + "存在\n"
    }, (error) => {
      this.logText += this.dataDirectory + this.t_FileName + error + "不存在\n"
    })
},
//创建一个文件
createFile: function(){
  this.$vha.file.createFile(this.dataDirectory, this.t_FileName, true)
    .then((success) => {
      this.logText += this.dataDirectory + this.t_FileName + success + "创建文件成功\n"
    }, (error) => {
      this.logText += this.dataDirectory + this.t_FileName + error + "创建文件失败\n"
    })
},
//写入文件
writeFile: function(){
  this.$vha.file.writeFile(this.dataDirectory, this.t_FileName, "neoStudioGroup.com", true)
    .then((success) => {
      this.logText += this.dataDirectory + this.t_FileName + success + "写入文件成功\n"
    }, (error) => {
      this.logText += this.dataDirectory + this.t_FileName + error + "写入文件失败\n"
    })
},
//读取文件
readFile: function(){
  this.$vha.file.readAsText(this.dataDirectory, this.t_FileName)
    .then((success) => {
      this.logText += this.dataDirectory + this.t_FileName + "内容:" + success + "读取内容成功\n"
    }, (error) => {
      this.logText += this.dataDirectory + this.t_FileName + error + "读取内容失败\n"
    })
},
//删除文件
removeFile: function(){
  this.$vha.file.removeFile(this.dataDirectory, this.t_FileName)
    .then((success) => {
      this.logText += this.dataDirectory + this.t_FileName + "删除成功" + success + "\n"
    }, (error) => {
      this.logText += this.dataDirectory + this.t_FileName + error + "删除失败\n"
    })
}
```

</section>
<!-- ------------------------------------------- -->