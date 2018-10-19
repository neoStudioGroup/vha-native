---
{
  "title": "QQ 微信登陆",
  "name": "App Login",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="App-Login">

# **[App Login](#App-Login)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-wechatv2" target="_blank">cordova-plugin-wechatv2</a></p>

> cordova plugin add cordova-plugin-wechatv2 --variable wechatappid=&#60;YOUR_WECHAT_APPID&#62;

<br />

### 插件第三方APP获取登陆信息以及分享到微信朋友圈

<p class="ui-r-note _bdc-warning">微信SDK需要企业资质申请</p>

<p class="_cl-aaaaaa">应用场景：第三方登陆、分享等。</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info">isInstalled()</p>

微信是否安装


<p class="ui-r-note _bdc-info">auth()</p>

打开微信登陆


<p class="ui-r-note _bdc-info">share()</p>

分享到朋友圈

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

```javascript
QQlogin: function () {

},
WXlogin: function () {
  Wechat.isInstalled(function (installed) {
    // this.logText += "微信已安装" + installed + "\n"
  }, function (reason) {
    this.logText += "微信未安装 : " + reason + "\n"
    return
  });
  
  var scope = "snsapi_userinfo",
      state = "_" + (+new Date());
  Wechat.auth(scope, state, function (response) {
    // you may use response.code to get the access token.
    this.logText += JSON.stringify(response) + "\n"
  }, function (reason) {
    this.logText += "失败 : " + reason + "\n"
  })
},
share: function () {
  Wechat.share({
    text: "这是vha-appDemo分享的文本",
    scene: Wechat.Scene.TIMELINE
  }, function () {
    this.logText += "成功" + "\n"
  }, function (reason) {
    this.logText += "失败 : " + reason + "\n"
  })
}
```

</section>
<!-- ------------------------------------------- -->