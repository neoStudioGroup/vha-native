<template>
  <div class="index_PG-Device Motion">
<!-- ------------------------------------------- -->
<section id="Device-Motion">

<h1><strong><a href="#Device-Motion">Device Motion</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-device-motion" target="_blank">cordova-plugin-device-motion</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-device-motion</p>
</blockquote>
<br />

<h3>实时监听获取当前设备陀螺仪传感器三个维度（x,y,z）的方向</h3>
<p class="_cl-aaaaaa">应用场景：运动检测、摇一摇等。</p>

<ul>
<li>Browser</li>
<li>Android</li>
<li>iOS</li>
<li><del>WeChat</del></li>
</ul>
</section>
<!-- ------------------------------------------- -->
<section id="Methods">

<h2><strong><a href="#Methods">方法</a></strong></h2>
<p class="ui-r-note _bdc-info" id="getcurrentacceleration">getCurrentAcceleration()</p>

<p>获取当前陀螺仪数据</p>
<p class="ui-r-return"><span>↪ 返回值：Object(any)</span> 对象 - x, y, z coordinates + timestamp</p>


<p class="ui-r-note _bdc-info" id="watchaccelerationoptions">watchAcceleration(options)</p>

<p>开启一个时钟间隔(毫秒) 获取陀螺仪数据</p>
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
<td>监视数据</td>
</tr>
</tbody></table>
<table>
<thead>
<tr>
<th>Options</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>frequency</td>
<td>Number</td>
<td>间隔的毫秒数</td>
</tr>
</tbody></table>
<p class="ui-r-return"><span>↪ 返回值：Object(any)</span> 对象 - x, y, z coordinates + timestamp</p>


<p class="ui-r-note _bdc-info" id="clearwatchwatchid">clearWatch(watchID)</p>

<p>清除,停止watchAcceleration</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>watchID</td>
<td>Number</td>
<td>watchAcceleration()返回的对象</td>
</tr>
</tbody></table>
</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<p class="ui-r-note _bdc-warning">HTML5提供了deviceorientation可以更快速平滑的读取传感器信息。</p>

<pre><code class="language-javascript">let options = {
  frequency: 100
}

this.watchID = this.$vha.devicemotion.watchAcceleration((result) =&gt; {
    this.LeftRight = parseInt(result.x * 10)
    this.FrontBack = parseInt(result.y * 10)
    this.Direction = parseInt(result.z * 10)

    this.Motionanima.top = 90 + this.FrontBack + &quot;px&quot;
    this.Motionanima.left = 90 + this.LeftRight * -1 + &quot;px&quot;
  }, (err) =&gt; {
    this.logText += &quot;错误 : &quot; + err + &quot;\n&quot;
  }, options)

// HTML5 deviceorientation演示
if (&#39;DeviceOrientationEvent&#39; in window) {
  window.addEventListener(&#39;deviceorientation&#39;, (eventData) =&gt; {
    let tiltLR = eventData.gamma
    let tiltFB = eventData.beta
    let dir = eventData.alpha

    // this.Motion.transform = &quot;rotate(&quot; + tiltLR + &quot;deg) rotate3d(1,0,0, &quot; + (tiltFB * -1) + &quot;deg)&quot;
    this.Motion.transform = &quot;rotate3d(0,1,0, &quot; + tiltLR + &quot;deg) rotate3d(1,0,0, &quot; + (tiltFB * -1) + &quot;deg)&quot;
  }, false)
} else {
  this.logText += &quot;Device Orientation API not supported.&quot; + &quot;\n&quot;
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Device Motion.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>