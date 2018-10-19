---
{
  "title": "条形码/二维码扫描",
  "name": "Barcode Scanner",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="Barcode-Scanner">

# **[Barcode Scanner](#Barcode-Scanner)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-vha-barcodescanner" target="_blank">cordova-plugin-vha-barcodescanner</a></p>

> cordova plugin add cordova-plugin-vha-barcodescanner

<br />

### 打开相机自动扫描条形码/二维码，返回数据。

<p class="_cl-aaaaaa">应用场景：支付、添加朋友等。</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info" id="scan">scan()</p>

<p class="ui-r-return"><span>↪ 返回值：Object(any)</span> 信息</p>


<p class="ui-r-note _bdc-info" id="encodetype-text">encode(type, text)</p>

参数|类型|说明
-|-|-
type|Constant|编码类型（如：barcodescanner。编码。text_type）
text|String|编码所需的文本字符串

<p class="ui-r-return"><span>↪ 返回值：Object(any)</span> 编码文本</p>

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

```javascript
scan: function () {
  this.$vha.barcodescanner.scan((result) => {
      if(result.text != ""){
        this.resultTXT = result.text
      }
      this.logText += 
        "结果: " + result.text + "\n" +
        "格式: " + result.format + "\n" +
        "取消: " + result.cancelled + "\n"
    }, (error) => {
      this.logText += "错误 : " + error + "\n" 
    }, {
      preferFrontCamera : false, // iOS and Android
      showFlipCameraButton : true, // iOS and Android
      showTorchButton : true, // iOS and Android
      torchOn: false, // Android, launch with the torch switched on (if available)
      saveHistory: true, // Android, save scan history (default false)
      prompt : "将二维码放置在扫描区域", // Android
      resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
      orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
      disableAnimations : true, // iOS
      disableSuccessBeep: false // iOS and Android
    }
  )
},
encode: function () {
  this.encodeUrl = "http://qr.liantu.com/api.php?text=" + this.resultTXT
  
  this.$vha.barcodescanner.encode(this.$vha.barcodescanner.Encode.TEXT_TYPE, this.resultTXT, (success) => {
      console.log(success)
      this.logText += "成功 : " + success + "\n"
    }, (fail) => {
      this.logText += "失败 : " + fail + "\n"
    }
  )
}
```

</section>
<!-- ------------------------------------------- -->