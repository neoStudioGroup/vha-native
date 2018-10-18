---
{
  "title": "播放音乐",
  "name": "Native Audio",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="Native-Audio">

# **[Native Audio](#Native-Audio)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-nativeaudio" target="_blank">cordova-plugin-nativeaudio</a></p>

> cordova plugin add cordova-plugin-nativeaudio

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
methods: {
  //方法 - 每次进入页面创建
  play: function (id) {
    this.$vha.nativeaudio.play(id, (result) => {
      this.logText += id + result + "\n"
    }, (err) => {
      this.logText += err + "\n"
    })
  },
  loop: function (id) {
    this.$vha.nativeaudio.loop(id, (result) => {
      this.logText += id + result + "\n"
    }, (err) => {
      this.logText += err + "\n"
    })
  },
  stop: function (id) {
    this.$vha.nativeaudio.stop(id, (result) => {
      this.logText += id + result + "\n"
    }, (err) => {
      this.logText += err + "\n"
    })
  },
},
watch: {
  //观察 - 数据或方法
},
created() {
  //实例创建完成后
  this.$vha.nativeaudio.preloadSimple('bass', 'assets/audio/bass.mp3', (result) => {
    this.logText += 'load bass' + result + "\n"
  }, (err) => {
    this.logText += err + "\n"
  })
  
  this.$vha.nativeaudio.preloadSimple('highhat', 'assets/audio/highhat.mp3', (result) => {
    this.logText += 'load highhat' + result + "\n"
  }, (err) => {
    this.logText += err + "\n"
  })
  
  this.$vha.nativeaudio.preloadSimple('snare', 'assets/audio/snare.mp3', (result) => {
    this.logText += 'load snare' + result + "\n"
  }, (err) => {
    this.logText += err + "\n"
  })
  
}
```

</section>
<!-- ------------------------------------------- -->