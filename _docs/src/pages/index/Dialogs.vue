<template>
  <div class="index_PG-Dialogs">
<!-- ------------------------------------------- -->
<section id="Dialogs">

<h1><strong><a href="#Dialogs">Dialogs</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-dialogs" target="_blank">cordova-plugin-dialogs</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-dialogs</p>
</blockquote>
<br />

<h3>显示一个系统提示对话框(类似alert)</h3>
<p class="_cl-aaaaaa">应用场景：信息交互。</p>

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
<p class="ui-r-note _bdc-info">alert(message, title, buttonName)</p>

<p>显示一个普通对话框</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>message</td>
<td>String</td>
<td>对话框提示的一段文字</td>
</tr>
<tr>
<td>title</td>
<td>String</td>
<td>对话框标题 默认:alert</td>
</tr>
<tr>
<td>buttonName</td>
<td>String</td>
<td>对话框按钮名称 默认:ok</td>
</tr>
</tbody></table>
<p class="ui-r-note _bdc-info">confirm(message, title, buttonArray)</p>

<p>显示一个带有指定消息和取消及取消按钮的对话框(可以自定义两个按钮的名称)</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>message</td>
<td>String</td>
<td>对话框提示的一段文字</td>
</tr>
<tr>
<td>title</td>
<td>String</td>
<td>对话框标题 默认:alert</td>
</tr>
<tr>
<td>buttonArray</td>
<td>Array</td>
<td>按钮名名称 是一个数组 默认:[‘ok’,’Cancel’]</td>
</tr>
</tbody></table>
<p class="ui-r-return"><span>↪ 返回值：Integer</span> 1或2取决于你点击了哪一个按钮</p>


<p class="ui-r-note _bdc-info">prompt(message, title, buttonArray, defaultText)</p>

<p>显示可提示用户进行输入的对话框</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>message</td>
<td>String</td>
<td>对话框提示的一段文字</td>
</tr>
<tr>
<td>title</td>
<td>String</td>
<td>对话框标题 默认:alert</td>
</tr>
<tr>
<td>buttonArray</td>
<td>Array</td>
<td>按钮名名称 是一个数组 默认:[‘ok’,’Cancel’]</td>
</tr>
<tr>
<td>defaultText</td>
<td>String</td>
<td>用户输入提示信息</td>
</tr>
</tbody></table>
<p class="ui-r-return"><span>↪ 返回值：Object</span> 用于接受用户输入:result.input1 判断用户点击那哪一个按钮 返回一个索引:result.buttonIndex</p>


<p class="ui-r-note _bdc-info">beep(repetitions)</p>

<p>显示可提示用户进行输入的对话框</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody><tr>
<td>repetitions</td>
<td>Integer</td>
<td>设置弹出对话框延迟以秒为单位</td>
</tr>
</tbody></table>
</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">alert: function(){
  this.$vha.dialogs.alert(&#39;neoStudioGroup&#39;,() =&gt; {
    this.logText += &quot;对话框结束&quot; + &quot;\n&quot;
  }, &#39;neo&#39;, &#39;确定&#39;)
},
confirm: function(){
  this.$vha.dialogs.confirm(&#39;neoStudioGroup&#39;,(buttonIndex) =&gt; {
    this.logText += &quot;你点了索引 &quot; + buttonIndex + &quot;\n&quot;
  }, &#39;neo&#39;, [&#39;取消&#39;,&#39;确定&#39;])
},
prompt: function(){
  this.$vha.dialogs.prompt(&#39;neoStudioGroup&#39;,(results) =&gt; {
    this.logText += &quot;你点了索引 &quot; + results.buttonIndex + &quot;\n&quot;
    this.logText += &quot;输入框内容 &quot; + results.input1 + &quot;\n&quot;
  }, &#39;neo&#39;, [&#39;取消&#39;,&#39;确定&#39;], &#39;default text&#39;)
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Dialogs.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-20 15:59:49</span>
    </section>
  </div>
</template>