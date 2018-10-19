<template>
  <div class="index_PG-JPush">
<!-- ------------------------------------------- -->
<section id="JPush">

<h1><strong><a href="#JPush">JPush</a></strong></h1>
<p><a class="ui-r-npm" href="https://www.npmjs.com/package/jpush-phonegap-plugin" target="_blank">jpush-phonegap-plugin</a></p>

<blockquote>
<p>cordova plugin add jpush-phonegap-plugin --variable APP_KEY=APPID</p>
</blockquote>
<br />

<h3>极光云消息推送</h3>
<p class="_cl-aaaaaa">应用场景：广告、通知等。</p>

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
<p class="ui-r-note _bdc-info">show()</p>

<p>显示启动屏幕</p>
<p class="ui-r-note _bdc-info">hide()</p>

<p>隐藏启动屏幕</p>
</section>
<!-- ------------------------------------------- -->
<section id="code">

<h2><strong><a href="#code">代码实例</a></strong></h2>
<pre><code class="language-javascript">LocalNotification: function () {
  try {
    if (this.$vha.device.platform != &quot;Android&quot;) {
      this.$vha.jpush.addLocalNotificationForIOS(5, this.LocalNotificationText, 1, &quot;localNoti1&quot;)
    }else{
      this.$vha.jpush.addLocalNotification(0, this.LocalNotificationText, &quot;JPush&quot;, 1, 10)
    }
  } catch (exception) {
    console.log(exception)
  }
},
clearLocalNotifications: function () {
  this.$vha.jpush.clearLocalNotifications()
},
init: function () {
  try {
    this.$vha.jpush.init()
    this.$vha.jpush.setDebugMode(true)

    if (this.$vha.device.platform != &quot;Android&quot;) {
      this.$vha.jpush.setApplicationIconBadgeNumber(0)
    }
  } catch (exception) {
    console.log(exception)
  }
  this.logText += &quot;执行初始化&quot; + &quot;\n&quot;
},
getregistrationId: function () {
  try {
    this.$vha.jpush.getRegistrationID((data) =&gt; {
      this.registrationId = data
      this.logText += &quot;获取registrationId : &quot; + this.registrationId + &quot;\n&quot;
    })
  } catch (exception) {
    this.logText += &quot;错误 : &quot; + exception + &quot;\n&quot;
    console.log(exception)
  }
},
setTags: function () {
  try {
    this.$vha.jpush.setTags({ sequence: 1, tags: [this.tagText1, this.tagText2, this.tagText3] },
      (result) =&gt; {
        this.logText += &quot;设置标签 &quot; + result.sequence + &quot; &quot; + result.tags + &quot;\n&quot;
      }, (error) =&gt; {
        alert(error.code)
      }
    )
  } catch (exception) {
    console.log(exception)
  }
},
getAllTags: function () {
  this.$vha.jpush.getAllTags({ sequence: 2},
    (result) =&gt; {
      this.logText += &quot;获取当前绑定的所有标签 &quot; + result.tags + &quot;\n&quot;
    }, (error) =&gt; {
      alert(error.code)
    }
  )
},
cleanTags: function () {
  this.$vha.jpush.cleanTags({ sequence: 1},
    (result) =&gt; {
      this.logText += &quot;清除所有标签 &quot; + result.tags + &quot;\n&quot;
    }, (error) =&gt; {
      alert(error.code)
    }
  )
},
setAlias: function () {
  this.$vha.jpush.setAlias({ sequence: 1, alias: this.aliasText},
    (result) =&gt; {
      this.logText += &quot;设置别名 &quot; + result.sequence + &quot; &quot; + result.alias + &quot;\n&quot;
    }, (error) =&gt; {
      alert(error.code)
    }
  )
},
getAlias: function () {
  this.$vha.jpush.getAlias({ sequence: 2},
    (result) =&gt; {
      this.logText += &quot;查询别名 &quot; + JSON.stringify(result) + &quot;\n&quot;
    }, (error) =&gt; {
      alert(error.code)
    }
  )
},
deleteAlias: function () {
  this.$vha.jpush.deleteAlias({ sequence: 3},
    (result) =&gt; {
      this.logText += &quot;删除别名 &quot; + JSON.stringify(result) + &quot;\n&quot;
    }, (error) =&gt; {
      alert(error.code)
    }
  )
}</code></pre>
</section>
<!-- ------------------------------------------- -->
    <section id="lastSection" class="_df _jcsb">
      <a href="https://github.com/neoStudioGroup/vha-native/blob/master/_docs/_data/JPush.md" target="_blank">在 GitHub 上编辑此页</a>
      <span>上次更新：2018-10-18 15:49:13</span>
    </section>
  </div>
</template>