---
{
  "title": "系统相册",
  "name": "Image Picker",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="Image-Picker">

# **[Image Picker](#Image-Picker)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-mediapicker-dmcbig" target="_blank">cordova-plugin-mediapicker-dmcbig</a></p>

> cordova plugin add cordova-plugin-mediapicker-dmcbig

<br />

### 支持静态、多图、视频和gif的图像选择器

<p class="_cl-aaaaaa">应用场景：用户头像。</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info">compressImage(option, result, error)</p>

打开图像选择器

<p class="ui-r-return"><span>↪ 返回值：data</span> 图像的信息</p>

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

```javascript
compressImage: function () {
  //please:  cordova plugin add cordova-plugin-file-transfer
  //see:  https://github.com/apache/cordova-plugin-file-transfer
  //use medias[index].path

  //OR
  this.compressImages = []

  this.imgurls.forEach(element => {
    // if(resultMedias[i].size>1048576){ resultMedias[i].quality=50; } else {d ataArray[i].quality=100;}
    element.quality = 30
    
    this.$vha.mediapicker.compressImage(element, (compressData) => {
      //user compressData.path upload compress img
      this.compressImages.push(compressData)
    }, (error) => {
      this.logText += "错误 : "+ error + "\n"
    })
  })

  //ios Video transcoding compression to MP4 Event(use AVAssetExportPresetMediumQuality)
  document.addEventListener("MediaPicker.CompressVideoEvent", function(data) {
    alert(data.status + "||" + data.index)
  }, false)
}
```

</section>
<!-- ------------------------------------------- -->