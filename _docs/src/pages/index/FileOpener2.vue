<template>
  <div class="index_PG-FileOpener2">
<!-- ------------------------------------------- -->
<section id="FileOpener2">

<h1><strong><a href="#FileOpener2">FileOpener2</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-file-opener2" target="_blank">cordova-plugin-file-opener2</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-file-opener2</p>
</blockquote>
<br />

<h3>打开你的设备文件系统的文件 (用默认应用程序)</h3>
<p class="_cl-aaaaaa">应用场景：打开apk文件安装应用。</p>

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
<p class="ui-r-note _bdc-info">open(filePath, fileMIMEType)</p>

<p>Shows the splashscreen</p>
<p class="ui-r-note _bdc-info">hide()</p>

<p>Hides the splashscreen</p>
</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">open: function () {
  let targetPath =  this.$vha.file.const.externalDataDirectory + &quot;testapk.apk&quot;
  this.$vha.fileopener2.open(targetPath, &#39;application/vnd.android.package-archive&#39;, {
    error: (e) =&gt; {
      this.logText += &quot;失败&quot; + e + &quot;\n&quot;
    }, success: () =&gt; {
      this.logText += &quot;成功&quot; + &quot;\n&quot;
    }
  })
},
uninstall: function () {
  let packName = prompt(&quot;输入包名&quot;, &quot;com.vha.vhaappdemo&quot;)
  this.$vha.fileopener2.uninstall(packName, {
    error: (e) =&gt; {
      this.logText += &quot;失败&quot; + e + &quot;\n&quot;
    }, success: () =&gt; {
      this.logText += &quot;成功&quot; + &quot;\n&quot;
    }
  })
},
appIsInstalled: function () {
  let packName = prompt(&quot;输入包名&quot;, &quot;com.vha.vhaappdemo&quot;)
  this.$vha.fileopener2.appIsInstalled(packName, {
    success: (res) =&gt; {
      let iscb = res.status === 1 ? &quot;已安装&quot; : &quot;未安装&quot;
      this.logText += packName + &quot; &quot; + iscb + &quot;\n&quot;
    }
  })
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/FileOpener2.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>