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

### 获取设备的语言及区域

<p class="_cl-aaaaaa">应用场景：匹配语言</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info">getPreferredLanguage()</p>

获取设备语言

<p class="ui-r-return"><span>↪ 返回值：Function(any)</span> 回调函数。参数为result</p>


<p class="ui-r-note _bdc-info">getLocaleName()</p>

获取区域名称

<p class="ui-r-return"><span>↪ 返回值：Function(any)</span> 回调函数。参数为result</p>


<p class="ui-r-note _bdc-info">getFirstDayOfWeek()</p>

获取星期数

<p class="ui-r-return"><span>↪ 返回值：Function(any)</span> 回调函数。参数为result</p>

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