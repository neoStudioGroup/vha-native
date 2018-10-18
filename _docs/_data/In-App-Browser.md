---
{
  "title": "启动屏幕",
  "name": "In App Browser",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="In-App-Browser">

# **[In App Browser](#In-App-Browser)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-In-App-Browser" target="_blank">cordova-plugin-In-App-Browser</a></p>

> cordova plugin add cordova-plugin-In-App-Browser

### 提供的剪贴板管理

</section>
<!-- ------------------------------------------- -->
<section id="Scenes">

## **[应用场景](#Scenes)**

复制粘贴

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