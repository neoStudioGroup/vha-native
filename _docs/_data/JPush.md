---
{
  "title": "极光推送",
  "name": "JPush",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="JPush">

# **[JPush](#JPush)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/jpush-phonegap-plugin" target="_blank">jpush-phonegap-plugin</a></p>

> cordova plugin add jpush-phonegap-plugin --variable APP_KEY=APPID

<br />

### 极光云消息推送

<p class="_cl-aaaaaa">应用场景：广告、通知等。</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info">show()</p>

显示启动屏幕

<p class="ui-r-note _bdc-info">hide()</p>

隐藏启动屏幕

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

```javascript
LocalNotification: function () {
  try {
    if (this.$vha.device.platform != "Android") {
      this.$vha.jpush.addLocalNotificationForIOS(5, this.LocalNotificationText, 1, "localNoti1")
    }else{
      this.$vha.jpush.addLocalNotification(0, this.LocalNotificationText, "JPush", 1, 10)
    }
  } catch (exception) {
    console.log(exception)
  }
},
clearLocalNotifications: function () {
  this.$vha.jpush.clearLocalNotifications()
},
init: function () {
  try {
    this.$vha.jpush.init()
    this.$vha.jpush.setDebugMode(true)
    
    if (this.$vha.device.platform != "Android") {
      this.$vha.jpush.setApplicationIconBadgeNumber(0)
    }
  } catch (exception) {
    console.log(exception)
  }
  this.logText += "执行初始化" + "\n"
},
getregistrationId: function () {
  try {
    this.$vha.jpush.getRegistrationID((data) => {
      this.registrationId = data
      this.logText += "获取registrationId : " + this.registrationId + "\n"
    })
  } catch (exception) {
    this.logText += "错误 : " + exception + "\n"
    console.log(exception)
  }
},
setTags: function () {
  try {
    this.$vha.jpush.setTags({ sequence: 1, tags: [this.tagText1, this.tagText2, this.tagText3] },
      (result) => {
        this.logText += "设置标签 " + result.sequence + " " + result.tags + "\n"
      }, (error) => {
        alert(error.code)
      }
    )
  } catch (exception) {
    console.log(exception)
  }
},
getAllTags: function () {
  this.$vha.jpush.getAllTags({ sequence: 2},
    (result) => {
      this.logText += "获取当前绑定的所有标签 " + result.tags + "\n"
    }, (error) => {
      alert(error.code)
    }
  )
},
cleanTags: function () {
  this.$vha.jpush.cleanTags({ sequence: 1},
    (result) => {
      this.logText += "清除所有标签 " + result.tags + "\n"
    }, (error) => {
      alert(error.code)
    }
  )
},
setAlias: function () {
  this.$vha.jpush.setAlias({ sequence: 1, alias: this.aliasText},
    (result) => {
      this.logText += "设置别名 " + result.sequence + " " + result.alias + "\n"
    }, (error) => {
      alert(error.code)
    }
  )
},
getAlias: function () {
  this.$vha.jpush.getAlias({ sequence: 2},
    (result) => {
      this.logText += "查询别名 " + JSON.stringify(result) + "\n"
    }, (error) => {
      alert(error.code)
    }
  )
},
deleteAlias: function () {
  this.$vha.jpush.deleteAlias({ sequence: 3},
    (result) => {
      this.logText += "删除别名 " + JSON.stringify(result) + "\n"
    }, (error) => {
      alert(error.code)
    }
  )
}
```

</section>
<!-- ------------------------------------------- -->