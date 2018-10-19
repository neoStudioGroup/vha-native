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

<br />

### 通过服务器上传或者下载文件

<p class="_cl-aaaaaa">应用场景：图片、应用等。</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info" id="downloadurl-targetpath-options-trusthosts">download(url, targetPath, options, trustHosts)</p>

从服务器下载文件

参数|类型|说明
-|-|-
url|String|文件服务器URL下载地址
targetPath|String|文件保存路径
options|Object|可选参数
trustAllHosts|Boolean|如果设置为true，接受所有安全证书

返回值|类型|说明
-|-|-
success|Object|返回成功下载的文件路径和更多的信息
progress|Object|返回下载文件的进度


<p class="ui-r-note _bdc-info" id="uploadserver-targetpath-options-trustallhosts">upload(server, targetPath, options, trustAllHosts)</p>

上传文件到服务器

参数|类型|说明
-|-|-
url|String|服务器上传地址
targetPath|String|上传文件路径
options|Object|可选参数
trustAllHosts|Boolean|如果设置为true，接受所有安全证书

返回值|类型|说明
-|-|-
success|Object|返回成功对象的文件路径和更多的信息
progress|Object|返回上传文件的进度

选项参数是一个Object，有以下几个关键的属性：

属性|类型|说明
-|-|-
encodeURI|Boolean|编码服务器的URL使用encodeURI。默认设置为true
timeout|Integer|超时时间已毫秒为单位

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