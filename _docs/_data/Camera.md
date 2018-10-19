---
{
  "title": "摄像头拍照",
  "name": "Camera",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="Camera">

# **[Camera](#Camera)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-camera" target="_blank">cordova-plugin-camera</a></p>

> cordova plugin add cordova-plugin-camera

<br />

### 调用设备相机拍照。

<p class="ui-r-note _bdc-warning">相机接口只适用于真实的设备，而不是在模拟器中。</p>

<p class="_cl-aaaaaa">应用场景：自拍、拍照、头像等。</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info">getPicture()</p>

打开摄像头

参数|类型|说明
-|-|-
options|Object|相机选项

返回值|类型|说明
-|-|-
quality|Number|保存的图像质量，范围为0 - 100
destinationType|Number|返回值格式
sourceType|Number|设置图片来源
allowEdit|Boolean|选择图片前是否允许编辑
encodingType|Number|JPEG = 0, PNG = 1
targetWidth|Number|缩放图像的宽度（像素）
targetHeight|Number|缩放图像的高度（像素）
mediaType|String|设置媒体的类型
cameraDirection|Number|Back = 0, Front-facing = 1
popoverOptions|String|iOS,iPad弹出位置
saveToPhotoAlbum|Boolean|是否保存到相册
correctOrientation|Boolean|设置摄像机拍摄的图像是否为正确的方向

<p class="ui-r-return"><span>↪ 返回值：Object(any)</span> 图像数据</p>

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

```javascript
Camera: function () {
  let options = {
    quality: 80,
    destinationType: this.$vha.camera.DestinationType.DATA_URL,
    sourceType: this.$vha.camera.PictureSourceType.CAMERA,
    allowEdit: true,
    encodingType: this.$vha.camera.EncodingType.JPEG,
    targetWidth: 200,
    targetHeight: 200,
    popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, this.$vha.camera.PopoverArrowDirection.ARROW_ANY),
    saveToPhotoAlbum: false,
    correctOrientation: true
  }
  
  this.$vha.camera.getPicture((imageData) => {
    this.myImage = "data:image/jpg;base64," + imageData
    this.logText += this.myImage + "\n"
  }, (message) => {
    this.logText += "错误 : " + imageData + "\n"
  }, options)
}
```

</section>
<!-- ------------------------------------------- -->