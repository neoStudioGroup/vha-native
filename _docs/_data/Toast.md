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

<br />

### 原生消息提示 (在屏幕上中下位置显示一小段文字提示)

<p class="_cl-aaaaaa">应用场景：程序退出提示、错误提示等。</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info">show(message, duration, position)</p>

增加一个或多个本地通知

参数|类型|说明
-|-|-
message|String|信息提示的一段文字
duration|String|信息提示显示持续事件 长或短: ‘short’, ‘long’
position|String|信息提示显示的位置顶部,中间,底部: ‘top’, ‘center’,’bottom’

如果不想填写额外参数可以通过更优雅的方式显示 Toast(提示信息)

<p class="ui-r-note _bdc-info">showShortTop(message)</p>

显示顶部

<p class="ui-r-note _bdc-info">showShortCenter(message)</p>

显示中间

<p class="ui-r-note _bdc-info">showShortBottom(message)</p>

显示底部

<p class="ui-r-note _bdc-info">showLongTop(message)</p>

显示顶部(长时间)

<p class="ui-r-note _bdc-info">showLongCenter(message)</p>

显示中间(长时间)

<p class="ui-r-note _bdc-info">showLongBottom(message)</p>

显示底部(长时间)

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