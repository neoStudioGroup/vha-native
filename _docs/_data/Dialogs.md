---
{
  "title": "对话框",
  "name": "Dialogs",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="Dialogs">

# **[Dialogs](#Dialogs)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-dialogs" target="_blank">cordova-plugin-dialogs</a></p>

> cordova plugin add cordova-plugin-dialogs

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
alert: function(){
  this.$vha.dialogs.alert('neoStudioGroup',() => {
    this.logText += "对话框结束" + "\n"
  }, 'neo', '确定')
},
confirm: function(){
  this.$vha.dialogs.confirm('neoStudioGroup',(buttonIndex) => {
    this.logText += "你点了索引 " + buttonIndex + "\n"
  }, 'neo', ['取消','确定'])
},
prompt: function(){
  this.$vha.dialogs.prompt('neoStudioGroup',(results) => {
    this.logText += "你点了索引 " + results.buttonIndex + "\n"
    this.logText += "输入框内容 " + results.input1 + "\n"
  }, 'neo', ['取消','确定'], 'default text')
}
```

</section>
<!-- ------------------------------------------- -->