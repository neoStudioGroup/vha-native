---
{
  "title": "信息提示",
  "name": "Toast",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="Toast">

# **[Toast](#Toast)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-x-toast" target="_blank">cordova-plugin-x-toast</a></p>

> cordova plugin add cordova-plugin-x-toast

### 原生消息提示Toast (在屏幕上中下位置显示一小段文字提示)

<p class="_cl-aaaaaa">应用场景：程序退出提示、错误提示等。</p>

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
showTop: function(){
  this.$vha.toast.showShortTop(this.Message)
},
show: function(){
  this.$vha.toast.showShortCenter(this.Message)
},
showBottom: function(){
  this.$vha.toast.showShortBottom(this.Message)
}
```

</section>
<!-- ------------------------------------------- -->