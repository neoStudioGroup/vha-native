---
{
  "title": "本地数据库",
  "name": "SQLite",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="SQLite">

# **[SQLite](#SQLite)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-sqlite-storage" target="_blank">cordova-sqlite-storage</a></p>

> cordova plugin add cordova-sqlite-storage

<br />

### 调用SQLite本地数据库储存接口

<p class="_cl-aaaaaa">应用场景：本地数据存储</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info">echoTest()</p>

测试数据库


<p class="ui-r-note _bdc-info">selfTest()</p>

自我测试


<p class="ui-r-note _bdc-info">openDatabase()</p>

打开数据库

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

```javascript
Echotest: function () {
  this.$vha.sqlite.echoTest(() => {
    this.logText += "ECHO 测试 OK" + "\n"
  })
},
Selftest: function () {
  this.$vha.sqlite.selfTest(() => {
    this.logText += "SELF 测试 OK" + "\n"
  })
},
SQLite: function () {
  let db = this.$vha.sqlite.openDatabase({name: 'test.db', location: 'default'})
  let query = "INSERT INTO test_table (data, data_num) VALUES (?,?)"
  
  db.transaction((tr) => {
    tr.executeSql(query, [], (tx, result) => {
      console.log("insertId: " + result.insertId)
      this.logText += "insertId：" + result.insertId + "\n"
    },
    (transaction, error) => {
      this.logText += "出错：" + error + "\n"
    })
  })
}
```

</section>
<!-- ------------------------------------------- -->