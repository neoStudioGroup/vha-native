<template>
  <div class="index_PG-Device Orientation">
<!-- ------------------------------------------- -->
<section id="Device-Orientation">

<h1><strong><a href="#Device-Orientation">Device Orientation</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-device-orientation" target="_blank">cordova-plugin-device-orientation</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-device-orientation</p>
</blockquote>
<br />

<h3>访问设备的方向传感器，该传感器可以检测到设备的方向（设备的顶部）。它获取度数0-359.99，0度是北。</h3>
<p class="_cl-aaaaaa">应用场景：指南针</p>

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
<p class="ui-r-note _bdc-info" id="getcurrentheading">getCurrentHeading()</p>

<p>获取方向传感器数据</p>
<p class="ui-r-return"><span>↪ 返回值：Object(any)</span> 对象 - magneticHeading, trueHeading, headingAccuracy, timestamp.</p>


<p class="ui-r-note _bdc-info" id="watchheadingoptions">watchHeading(options)</p>

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
<td>配置对象</td>
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
<td>间隔毫秒</td>
</tr>
<tr>
<td>filter</td>
<td>Number</td>
<td>设置过滤器 如果设置这个参数则自动忽略frequency</td>
</tr>
</tbody></table>
<p class="ui-r-return"><span>↪ 返回值：Object(any)</span> 对象 - magneticHeading, trueHeading, headingAccuracy, timestamp.</p>


<p class="ui-r-note _bdc-info" id="clearwatchwatchid">clearWatch(watchID)</p>

<p>清除watchHeading() 返回的定时器id</p>
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
<td>watchHeading()返回的id</td>
</tr>
</tbody></table>
</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">methods: {
  //方法 - 每次进入页面创建
  getCurrentHeading: function () {
    this.$vha.deviceorientation.getCurrentHeading((result) =&gt; {
        let intdeg = parseInt(result.magneticHeading)
        this.logText += &quot;intdeg : &quot; + intdeg + &quot;\n&quot;
      }, (err) =&gt; {
        this.logText += &quot;错误 : &quot; + err + &quot;\n&quot;
      })
  }
},
watch: {
  //观察 - 数据或方法
},
created() {
  //实例创建完成后
  this.watchID = 0
  this.inAngle = -1
  this.lastAngle = 0
},
mounted() {
  //挂载实例后 - this.el存在
  this.getCurrentHeading()
  setTimeout(() =&gt; {}, 1000)

  let options = {
    frequency: 10
  }

  this.watchID = this.$vha.deviceorientation.watchHeading((result) =&gt; {
      let intdeg_ = 360 - result.magneticHeading

      let thisAngle = intdeg_ - this.lastAngle
      if (thisAngle != 0) {
        this.intdeg.transform = &quot;rotate(&quot; + intdeg_ + &quot;deg)&quot;
      }
      this.lastAngle = intdeg_
    }, (err) =&gt; {
      this.logText += &quot;错误 : &quot; + err + &quot;\n&quot;
    }, options)
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Device Orientation.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>