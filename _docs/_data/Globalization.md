---
{
  "title": "地区/时区",
  "name": "Globalization",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="Globalization">

# **[Globalization](#Globalization)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-globalization" target="_blank">cordova-plugin-globalization</a></p>

> cordova plugin add cordova-plugin-globalization

<br />

### 显示或隐藏启动屏幕画面

<p class="_cl-aaaaaa">应用场景：启动缓冲</p>

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
    Globalization: function () {
      this.$vha.globalization.getPreferredLanguage((result) => {
        this.logText += "首选语言：" + result.value + "\n"
      },
      (err) => {
        this.logText += "错误" + err + "\n"
      })
      
      this.$vha.globalization.getLocaleName((result) => {
        this.logText += "区域名称：" + result.value + "\n"
      },
      (err) => {
        this.logText += "错误" + err + "\n"
      })
      
      this.$vha.globalization.getFirstDayOfWeek((result) => {
        this.logText += "第一周：" + result.value + "\n"
      },
      (err) => {
        this.logText += "错误" + err + "\n"
      })
    }
```

</section>
<!-- ------------------------------------------- -->