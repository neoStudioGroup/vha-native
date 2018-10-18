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