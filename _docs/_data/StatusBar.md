---
{
  "title": "状态栏",
  "name": "StatusBar",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="StatusBar">

# **[StatusBar](#StatusBar)**

> cordova plugin add cordova-plugin-StatusBar

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-StatusBar" target="_blank">cordova-plugin-StatusBar</a></p>
<br />

### 配置设备的状态栏颜色和样式。

</section>
<!-- ------------------------------------------- -->
<section id="Scenes">

## **[应用场景](#Scenes)**

全屏展示

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

```javascript
StatusBaroverlaysWebView: function () {
  this.$vha.statusbar.overlaysWebView(this.overlaysWebViewtruefalse)
  if(this.overlaysWebViewtruefalse){
    this.logText += "设置 overlaysWebView = false" + "\n"
    this.overlaysWebViewtruefalse = false
    this.$vha.statusbar.overlaysWebView(this.overlaysWebViewtruefalse)
  }else{
    this.logText += "设置 overlaysWebView = true" + "\n"
    this.overlaysWebViewtruefalse = true
    this.$vha.statusbar.overlaysWebView(this.overlaysWebViewtruefalse)
  }
},
StatusBarstyle: function(){
  this.stylenumber++
  if(this.stylenumber > 3){this.stylenumber = 0}
  
  switch (this.stylenumber) {
    case 0:
      this.logText += "设置 style = Default:0" + "\n"
      this.$vha.statusbar.styleDefault()
      break
    case 1:
      this.logText += "设置 style = LightContent:1" + "\n"
      this.$vha.statusbar.styleLightContent()
      break
    case 2:
      this.logText += "设置 style = BlackTranslucent:2" + "\n"
      this.$vha.statusbar.styleBlackTranslucent()
      break
    case 3:
      this.logText += "设置 style = BlackOpaque:3" + "\n"
      this.$vha.statusbar.styleBlackOpaque()
      break
  }
},
StatusBarstyleColor: function(){
  this.styleColornumber++
  if(this.styleColornumber > 4){this.styleColornumber = 0}
  
  switch (this.styleColornumber) {
    case 0:
      this.logText += "设置 styleColor = black" + "\n"
      this.$vha.statusbar.backgroundColorByName('black')
      break
    case 1:
      this.logText += "设置 styleColor = darkGray" + "\n"
      this.$vha.statusbar.backgroundColorByName('darkGray')
      break
    case 2:
      this.logText += "设置 styleColor = lightGray" + "\n"
      this.$vha.statusbar.backgroundColorByName('lightGray')
      break
    case 3:
      this.logText += "设置 styleColor = white" + "\n"
      this.$vha.statusbar.backgroundColorByName('white')
      break
    case 4:
      this.logText += "设置 styleHex = #ff0000" + "\n"
      this.$vha.statusbar.backgroundColorByHexString('#ff0000')
      break
  }
},
StatusBarshowhide: function(){
  if(this.showhidetruefalse){
    this.logText += "隐藏状态栏"+ "\n"
    this.showhidetruefalse = false
    this.$vha.statusbar.hide()
  }else{
    this.logText += "显示状态栏"+ "\n"
    this.showhidetruefalse = true
    this.$vha.statusbar.show()
  }
}
```

</section>
<!-- ------------------------------------------- -->