---
{
  "title": "剪贴板",
  "name": "Clipboard",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="Clipboard">

# **[Clipboard](#Clipboard)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-vha-clipboard" target="_blank">cordova-plugin-vha-clipboard</a></p>

> cordova plugin add cordova-plugin-vha-clipboard

<br />

### Cordova/PhoneGap剪贴板插件支持iOS，Android和Windows Phone 8提供的剪贴板管理。

<p class="_cl-aaaaaa">应用场景：复制粘贴</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info">copy(text)</p>

将文本复制到剪贴板

<p class="ui-r-return"><span>↪ 返回值：Promise(any)</span> 复制后返回一个Promise对象</p>

<p class="ui-r-note _bdc-info">paste()</p>

粘贴剪贴板中的文本

<p class="ui-r-return"><span>↪ 返回值：Promise(any)</span> 粘贴后返回一个Promise对象</p>

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

```javascript
Clipboard_Copy: function(){
  this.$vha.clipboard.copy(this.cpText)
},
Clipboard_Paste: function(){
  this.$vha.clipboard.paste((text) => {
    this.ptText = text
    this.logText += "黏贴内容 : " + text + "\n"
  })
}
```

</section>
<!-- ------------------------------------------- -->