---
{
  "title": "对话框",
  "name": "Dialogs",
  "time": "2018-10-20 15:59:49"
}
---
<!-- ------------------------------------------- -->
<section id="Dialogs">

# **[Dialogs](#Dialogs)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-dialogs" target="_blank">cordova-plugin-dialogs</a></p>

> cordova plugin add cordova-plugin-dialogs

<br />

### 显示一个系统提示对话框(类似alert)

<p class="_cl-aaaaaa">应用场景：信息交互。</p>

+ Browser
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info">alert(message, title, buttonName)</p>

显示一个普通对话框

参数|类型|说明
-|-|-
message|String|对话框提示的一段文字
title|String|对话框标题 默认:alert
buttonName|String|对话框按钮名称 默认:ok


<p class="ui-r-note _bdc-info">confirm(message, title, buttonArray)</p>

显示一个带有指定消息和取消及取消按钮的对话框(可以自定义两个按钮的名称)

参数|类型|说明
-|-|-
message|String|对话框提示的一段文字
title|String|对话框标题 默认:alert
buttonArray|Array|按钮名名称 是一个数组 默认:[‘ok’,’Cancel’]

<p class="ui-r-return"><span>↪ 返回值：Integer</span> 1或2取决于你点击了哪一个按钮</p>


<p class="ui-r-note _bdc-info">prompt(message, title, buttonArray, defaultText)</p>

显示可提示用户进行输入的对话框

参数|类型|说明
-|-|-
message|String|对话框提示的一段文字
title|String|对话框标题 默认:alert
buttonArray|Array|按钮名名称 是一个数组 默认:[‘ok’,’Cancel’]
defaultText|String|用户输入提示信息

<p class="ui-r-return"><span>↪ 返回值：Object</span> 用于接受用户输入:result.input1 判断用户点击那哪一个按钮 返回一个索引:result.buttonIndex</p>


<p class="ui-r-note _bdc-info">beep(repetitions)</p>

显示可提示用户进行输入的对话框

参数|类型|说明
-|-|-
repetitions|Integer|设置弹出对话框延迟以秒为单位

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