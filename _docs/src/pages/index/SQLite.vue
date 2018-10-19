<template>
  <div class="index_PG-SQLite">
<!-- ------------------------------------------- -->
<section id="SQLite">

<h1><strong><a href="#SQLite">SQLite</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-sqlite-storage" target="_blank">cordova-sqlite-storage</a></p>

<blockquote>
<p>cordova plugin add cordova-sqlite-storage</p>
</blockquote>
<br />

<h3>调用SQLite本地数据库储存接口</h3>
<p class="_cl-aaaaaa">应用场景：本地数据存储</p>

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
<p class="ui-r-note _bdc-info">echoTest()</p>

<p>测试数据库</p>
<p class="ui-r-note _bdc-info">selfTest()</p>

<p>自我测试</p>
<p class="ui-r-note _bdc-info">openDatabase()</p>

<p>打开数据库</p>
</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">Echotest: function () {
  this.$vha.sqlite.echoTest(() =&gt; {
    this.logText += &quot;ECHO 测试 OK&quot; + &quot;\n&quot;
  })
},
Selftest: function () {
  this.$vha.sqlite.selfTest(() =&gt; {
    this.logText += &quot;SELF 测试 OK&quot; + &quot;\n&quot;
  })
},
SQLite: function () {
  let db = this.$vha.sqlite.openDatabase({name: &#39;test.db&#39;, location: &#39;default&#39;})
  let query = &quot;INSERT INTO test_table (data, data_num) VALUES (?,?)&quot;

  db.transaction((tr) =&gt; {
    tr.executeSql(query, [], (tx, result) =&gt; {
      console.log(&quot;insertId: &quot; + result.insertId)
      this.logText += &quot;insertId：&quot; + result.insertId + &quot;\n&quot;
    },
    (transaction, error) =&gt; {
      this.logText += &quot;出错：&quot; + error + &quot;\n&quot;
    })
  })
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/SQLite.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>