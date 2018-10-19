---
{
  "title": "录制",
  "name": "Capture",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="Capture">

# **[Capture](#Capture)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-media-capture" target="_blank">cordova-plugin-media-capture</a></p>

> cordova plugin add cordova-plugin-media-capture

<br />

### 调用设备相机录像。

<p class="_cl-aaaaaa">应用场景：分享周边</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info">captureAudio()</p>

~~录制音频~~


<p class="ui-r-note _bdc-info">captureImage()</p>

~~拍照~~


<p class="ui-r-note _bdc-info">captureVideo()</p>

录制视频

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

<p class="ui-r-note _bdc-error">captureAudio、captureImage方法调用失败、目前仅适合录制视频</p>

```javascript
captureAudio: function () {
  let options = {
    limit: 1,
    duration: 10
  }

  this.$vha.capture.captureAudio((audioData) => {
    console.log(audioData)
    this.logText += audioData + "\n"
  }, (err) => {
    this.logText += "错误 : " + err + "\n"
  }, options)
},
captureImage: function () {
  let options = {
    limit: 3
  }

  this.$vha.capture.captureImage((imageData) => {
    console.log(imageData)
    this.logText += imageData + "\n"
  }, (err) => {
    this.logText += "错误 : " + err + "\n"
  }, options)
},
captureVideo: function () {
  let options = {
    limit: 1,
    duration: 15
  }

  this.$vha.capture.captureVideo((videoData) => {
    console.log(videoData)
    this.logText += videoData + "\n"
  }, (err) => {
    this.logText += "错误 : " + err + "\n"
  }, options)
}
```

</section>
<!-- ------------------------------------------- -->