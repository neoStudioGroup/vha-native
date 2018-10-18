---
{
  "title": "短信",
  "name": "SMS",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="SMS">

# **[SMS](#SMS)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-sms-plugin" target="_blank">cordova-sms-plugin</a></p>

> cordova plugin add cordova-sms-plugin

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
send: function () {
  this.logText += "发送短信 : " + this.smsNumber + " " + this.smsText + "\n"
  
  this.$vha.sms.send(this.smsNumber, this.smsText, {}, (res) => {
    this.logText += "成功" + res + "\n"
  }, (err) => {
    this.logText += "失败" + err + "\n"
  })
}
```

</section>
<!-- ------------------------------------------- -->