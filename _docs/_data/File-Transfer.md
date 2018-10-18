---
{
  "title": "文件传输",
  "name": "File Transfer",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="File-Transfer">

# **[File Transfer](#File-Transfer)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-file-transfer" target="_blank">cordova-plugin-file-transfer</a></p>

> cordova plugin add cordova-plugin-file-transfer

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
downloadFile: function () {
  let url = "https://imgsrc.baidu.com/forum/pic/item/dbe35e94a4c27d1e38a4f72913d5ad6edfc438be.jpg"
  let targetPath =  this.$vha.file.const.externalDataDirectory + "testImage.jpg"
  let trustHosts = true
  let options = {}
  
  this.$vha.filetransfer.download(url, targetPath, options, trustHosts, (progress, ftID) => {
    this.downloadProgress = parseInt((progress.loaded / progress.total) * 100)
    
    if(this.downloadProgress > 30){
      // this.$vha.filetransfer.abort(ftID)
    }
  }).then((result) => {
    targetPath =  result.toURL()
    this.logText += result + "\n"
    this.logText += result.toURL() + "\n"
    
    this.targetPath = targetPath
  }, (error) => {
    this.logText += "错误 : " + error + "\n"
  })
},
uploadFile: function(){
  let server = prompt("输入你的服务器地址", "")
  if (server) {
    this.$vha.filetransfer.upload(server, this.targetPath, {}, true, (progress, ftID) => {
      this.uploadProgress = parseInt((progress.loaded / progress.total) * 100)
    
      if(this.uploadProgress > 30){
        // this.$vha.filetransfer.abort(ftID)
      }
    }).then((result) => {
      this.logText += "上传成功" + "\n"
    }, (error) => {
      this.logText += "错误 : " + error + "\n"
    })
  }
}
```

</section>
<!-- ------------------------------------------- -->