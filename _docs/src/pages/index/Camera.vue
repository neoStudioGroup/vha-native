<template>
  <div class="index_PG-Camera">
<!-- ------------------------------------------- -->
<section id="Camera">

<h1><strong><a href="#Camera">Camera</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-camera" target="_blank">cordova-plugin-camera</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-camera</p>
</blockquote>
<br />

<h3>调用设备相机拍照。</h3>
<p class="ui-r-note _bdc-warning">相机接口只适用于真实的设备，而不是在模拟器中。</p>

<p class="_cl-aaaaaa">应用场景：自拍、拍照、头像等。</p>

<ul>
<li><del>Browser</del></li>
<li>Android</li>
<li>iOS</li>
<li><del>WeChat</del></li>
</ul>
</section>
<!-- ------------------------------------------- -->
<section id="Methods">

<h2><strong><a href="#Methods">方法</a></strong></h2>
<p class="ui-r-note _bdc-info">getPicture()</p>

<p>打开摄像头</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>options</td>
<td>Object</td>
<td>相机选项</td>
</tr>
</tbody></table>
<table>
<thead>
<tr>
<th>返回值</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>quality</td>
<td>Number</td>
<td>保存的图像质量，范围为0 - 100</td>
</tr>
<tr>
<td>destinationType</td>
<td>Number</td>
<td>返回值格式</td>
</tr>
<tr>
<td>sourceType</td>
<td>Number</td>
<td>设置图片来源</td>
</tr>
<tr>
<td>allowEdit</td>
<td>Boolean</td>
<td>选择图片前是否允许编辑</td>
</tr>
<tr>
<td>encodingType</td>
<td>Number</td>
<td>JPEG = 0, PNG = 1</td>
</tr>
<tr>
<td>targetWidth</td>
<td>Number</td>
<td>缩放图像的宽度（像素）</td>
</tr>
<tr>
<td>targetHeight</td>
<td>Number</td>
<td>缩放图像的高度（像素）</td>
</tr>
<tr>
<td>mediaType</td>
<td>String</td>
<td>设置媒体的类型</td>
</tr>
<tr>
<td>cameraDirection</td>
<td>Number</td>
<td>Back = 0, Front-facing = 1</td>
</tr>
<tr>
<td>popoverOptions</td>
<td>String</td>
<td>iOS,iPad弹出位置</td>
</tr>
<tr>
<td>saveToPhotoAlbum</td>
<td>Boolean</td>
<td>是否保存到相册</td>
</tr>
<tr>
<td>correctOrientation</td>
<td>Boolean</td>
<td>设置摄像机拍摄的图像是否为正确的方向</td>
</tr>
</tbody></table>
<p class="ui-r-return"><span>↪ 返回值：Object(any)</span> 图像数据</p>

</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">Camera: function () {
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

  this.$vha.camera.getPicture((imageData) =&gt; {
    this.myImage = &quot;data:image/jpg;base64,&quot; + imageData
    this.logText += this.myImage + &quot;\n&quot;
  }, (message) =&gt; {
    this.logText += &quot;错误 : &quot; + imageData + &quot;\n&quot;
  }, options)
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Camera.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>