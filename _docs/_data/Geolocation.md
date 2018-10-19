---
{
  "title": "地理位置",
  "name": "Geolocation",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="Geolocation">

# **[Geolocation](#Geolocation)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-baidumaplocation" target="_blank">cordova-plugin-baidumaplocation</a></p>

> cordova plugin add cordova-plugin-baidumaplocation --variable ANDROID_KEY="&#60;API_KEY_ANDROID&#62;" --variable IOS_KEY="&#60;API_KEY_IOS&#62;"

<br />

### 使用百度地图获取设备经纬度

<p class="_cl-aaaaaa">应用场景：定位、导航等。</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info">getCurrentPosition()</p>

获取当前位置

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

```javascript
index.html
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=104RLNdEmAqbESLXCa8Beb44oOEeyXPu"></script>

baidumaplocation: function () {
  this.$vha.baidugeolocation.getCurrentPosition((result) => {
    this.logText += JSON.stringify(result, null, 2) + "\n"
    
    var map = new BMap.Map("baiduMap")
    var point = new BMap.Point(result.longitude, result.latitude)
    map.centerAndZoom(point, 14)
    
    var myIcon = new BMap.Icon("assets/images/baidulocation.png", new BMap.Size(30, 30))
    var marker = new BMap.Marker(point, {icon: myIcon})
    map.addOverlay(marker)
    
  }, (error) => {
    this.logText += "错误" + error + "\n"
  })
}
```

</section>
<!-- ------------------------------------------- -->