<template>
  <div class="index_PG-Contacts">
<!-- ------------------------------------------- -->
<section id="Contacts">

<h1><strong><a href="#Contacts">Contacts</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-contacts" target="_blank">cordova-plugin-contacts</a></p>

<blockquote>
<p>cordova plugin add cordova-plugin-contacts</p>
</blockquote>
<br />

<h3>在设备上读取、创建和删除通讯录</h3>
<p class="_cl-aaaaaa">应用场景：读取联系人。</p>

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
<p class="ui-r-note _bdc-info">create()</p>

<p>Shows the splashscreen</p>
<p class="ui-r-note _bdc-info">hide()</p>

<p>Hides the splashscreen</p>
</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">getAll: function () {
  var options = {}
  options.filter = &quot;&quot;
  options.multiple = true
  this.$vha.contacts.find(options, (allContacts) =&gt; {
    let contactTxt = &quot;&quot;
    allContacts.forEach((element, index) =&gt; {
      contactTxt += element.displayName + &quot; = &quot;

      element.phoneNumbers.forEach((phone, index) =&gt; {
        if (index + 1 === element.phoneNumbers.length) {
          contactTxt += this._processphone(phone.value)
        } else {
          contactTxt += this._processphone(phone.value) + &quot;,&quot;
        }
      })
      contactTxt +=  &quot;\n&quot;
    })
    this.logText += contactTxt + &quot;\n&quot;
  },(error) =&gt; {
    this.logText += &quot;错误 : &quot; + error + &quot;\n&quot;
  })
},
_processphone: function (phone) {
  if (phone.indexOf(&quot;-&quot;) != -1) {
    return phone.replace(/-/g,&quot;&quot;)
  }else if (phone.indexOf(&quot; &quot;) != -1) {
    return phone.replace(/ /g,&quot;&quot;)
  }else {
    return phone
  }
},
save: function () {
  this.$vha.contacts.save(this.contact, (result) =&gt; {
    this.logText += &quot;成功 : &quot; + result + &quot;\n&quot;
  }, (err) =&gt; {
    this.logText += &quot;错误 : &quot; + err + &quot;\n&quot;
  })
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a class="ui-r-a" href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/Contacts.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>