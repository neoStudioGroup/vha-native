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

### 显示或隐藏启动屏幕画面

<p class="_cl-aaaaaa">应用场景：启动缓冲</p>

+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Scenes">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info">show()</p>

Shows the splashscreen

<p class="ui-r-note _bdc-info">hide()</p>

Hides the splashscreen

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