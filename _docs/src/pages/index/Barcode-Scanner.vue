<template>
  <div class="index_PG-Barcode Scanner">
<!-- ------------------------------------------- -->
<section id="Barcode-Scanner">

<h1><strong><a href="#Barcode-Scanner">Barcode Scanner</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-vha-barcodescanner" target="_blank">cordova-plugin-vha-barcodescanner</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-vha-barcodescanner</p>
</blockquote>
<br />

<h3>打开相机自动扫描条形码/二维码，返回数据。</h3>
<p class="_cl-aaaaaa">应用场景：支付、添加朋友等。</p>

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
<p class="ui-r-note _bdc-info" id="scan">scan()</p>

<p class="ui-r-return"><span>↪ 返回值：Object(any)</span> 信息</p>


<p class="ui-r-note _bdc-info" id="encodetype-text">encode(type, text)</p>

<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>type</td>
<td>Constant</td>
<td>编码类型（如：barcodescanner。编码。text_type）</td>
</tr>
<tr>
<td>text</td>
<td>String</td>
<td>编码所需的文本字符串</td>
</tr>
</tbody></table>
<p class="ui-r-return"><span>↪ 返回值：Object(any)</span> 编码文本</p>

</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">scan: function () {
  this.$vha.barcodescanner.scan((result) =&gt; {
      if(result.text != &quot;&quot;){
        this.resultTXT = result.text
      }
      this.logText += 
        &quot;结果: &quot; + result.text + &quot;\n&quot; +
        &quot;格式: &quot; + result.format + &quot;\n&quot; +
        &quot;取消: &quot; + result.cancelled + &quot;\n&quot;
    }, (error) =&gt; {
      this.logText += &quot;错误 : &quot; + error + &quot;\n&quot; 
    }, {
      preferFrontCamera : false, // iOS and Android
      showFlipCameraButton : true, // iOS and Android
      showTorchButton : true, // iOS and Android
      torchOn: false, // Android, launch with the torch switched on (if available)
      saveHistory: true, // Android, save scan history (default false)
      prompt : &quot;将二维码放置在扫描区域&quot;, // Android
      resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      formats : &quot;QR_CODE,PDF_417&quot;, // default: all but PDF_417 and RSS_EXPANDED
      orientation : &quot;portrait&quot;, // Android only (portrait|landscape), default unset so it rotates with the device
      disableAnimations : true, // iOS
      disableSuccessBeep: false // iOS and Android
    }
  )
},
encode: function () {
  this.encodeUrl = &quot;http://qr.liantu.com/api.php?text=&quot; + this.resultTXT

  this.$vha.barcodescanner.encode(this.$vha.barcodescanner.Encode.TEXT_TYPE, this.resultTXT, (success) =&gt; {
      console.log(success)
      this.logText += &quot;成功 : &quot; + success + &quot;\n&quot;
    }, (fail) =&gt; {
      this.logText += &quot;失败 : &quot; + fail + &quot;\n&quot;
    }
  )
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Barcode Scanner.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>