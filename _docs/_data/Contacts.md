---
{
  "title": "通讯录管理",
  "name": "Contacts",
  "time": "2018-10-18 15:49:13"
}
---
<!-- ------------------------------------------- -->
<section id="Contacts">

# **[Contacts](#Contacts)**

<p><a class="ui-r-npm" href="https://www.npmjs.com/package/cordova-plugin-contacts" target="_blank">cordova-plugin-contacts</a></p>

> cordova plugin add cordova-plugin-contacts

<br />

### 在设备上读取、创建和删除通讯录

<p class="_cl-aaaaaa">应用场景：读取联系人。</p>

+ ~~Browser~~
+ Android
+ iOS
+ ~~WeChat~~

</section>
<!-- ------------------------------------------- -->
<section id="Methods">

## **[方法](#Methods)**

<p class="ui-r-note _bdc-info">create()</p>

Shows the splashscreen

<p class="ui-r-note _bdc-info">hide()</p>

Hides the splashscreen

</section>
<!-- ------------------------------------------- -->
<section id="code">

## **[代码实例](#code)**

```javascript
getAll: function () {
  var options = {}
  options.filter = ""
  options.multiple = true
  this.$vha.contacts.find(options, (allContacts) => {
    let contactTxt = ""
    allContacts.forEach((element, index) => {
      contactTxt += element.displayName + " = "
      
      element.phoneNumbers.forEach((phone, index) => {
        if (index + 1 === element.phoneNumbers.length) {
          contactTxt += this._processphone(phone.value)
        } else {
          contactTxt += this._processphone(phone.value) + ","
        }
      })
      contactTxt +=  "\n"
    })
    this.logText += contactTxt + "\n"
  },(error) => {
    this.logText += "错误 : " + error + "\n"
  })
},
_processphone: function (phone) {
  if (phone.indexOf("-") != -1) {
    return phone.replace(/-/g,"")
  }else if (phone.indexOf(" ") != -1) {
    return phone.replace(/ /g,"")
  }else {
    return phone
  }
},
save: function () {
  this.$vha.contacts.save(this.contact, (result) => {
    this.logText += "成功 : " + result + "\n"
  }, (err) => {
    this.logText += "错误 : " + err + "\n"
  })
}
```

</section>
<!-- ------------------------------------------- -->