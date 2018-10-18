---
{
  "title": "打开文件",
  "name": "FileOpener2",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="FileOpener2">

# **[FileOpener2](#FileOpener2)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-file-opener2" target="_blank">cordova-plugin-file-opener2</a></p>

> cordova plugin add cordova-plugin-file-opener2

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
open: function () {
  let targetPath =  this.$vha.file.const.externalDataDirectory + "testapk.apk"
  this.$vha.fileopener2.open(targetPath, 'application/vnd.android.package-archive', {
    error: (e) => {
      this.logText += "失败" + e + "\n"
    }, success: () => {
      this.logText += "成功" + "\n"
    }
  })
},
uninstall: function () {
  let packName = prompt("输入包名", "com.vha.vhaappdemo")
  this.$vha.fileopener2.uninstall(packName, {
    error: (e) => {
      this.logText += "失败" + e + "\n"
    }, success: () => {
      this.logText += "成功" + "\n"
    }
  })
},
appIsInstalled: function () {
  let packName = prompt("输入包名", "com.vha.vhaappdemo")
  this.$vha.fileopener2.appIsInstalled(packName, {
    success: (res) => {
      let iscb = res.status === 1 ? "已安装" : "未安装"
      this.logText += packName + " " + iscb + "\n"
    }
  })
}
```

</section>
<!-- ------------------------------------------- -->