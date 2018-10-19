---
{
  "title": "录制音频",
  "name": "Media",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="Media">

# **[Media](#Media)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-media" target="_blank">cordova-plugin-media</a></p>

> cordova plugin add cordova-plugin-media

<br />

### 调用设备麦克风录音。

<p class="_cl-aaaaaa">应用场景：语音消息</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info">startRecord()</p>

开始录音


<p class="ui-r-note _bdc-info">stopRecord()</p>

停止录音

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

```javascript
Record: function () {
  if (this.btntext === "开始录音") {
    this.btntext = "停止录音"
            
    this.recordMedia = new Media(this.$vha.file.const.externalDataDirectory + "Record.mp3",
      (success) => {
        console.log("成功 : ", success)
        this.logText += "成功 : " + success + "\n"
      }, (error) => {
        console.log("错误 : ", error)
        this.logText += "错误 : " + error + "\n"
      }, (status) => {
        console.log("状态 : ", status)
        this.logText += "状态 : " + status + "\n"
      })
    
    this.recordMedia.startRecord()
  } else {
    this.btntext = "开始录音"
    this.recordMedia.stopRecord()
    this.recordMedia.release()
    this.recordMedia = undefined
  }
},
playRecord: function () {
  let media = new Media(this.$vha.file.const.externalDataDirectory + "Record.mp3",
    (success) => {
      console.log("成功 : ", success)
      this.logText += "成功 : " + success + "\n"
      media.release()
    }, (error) => {
      console.log("错误 : ", error)
      this.logText += "错误 : " + error + "\n"
      media.release()
    }, (status) => {
      console.log("状态 : ", status)
      this.logText += "状态 : " + status + "\n"
    })      
  
  var iOSPlayOptions = {
    numberOfLoops: 2,
    playAudioWhenScreenIsLocked: false
  }

  if (this.$vha.device.platform != "Android") {
    media.play(iOSPlayOptions) // iOS only!
  }else{
    media.play() // Android
  }
  
  // media.pause()
  // media.stop()
}
```

</section>
<!-- ------------------------------------------- -->