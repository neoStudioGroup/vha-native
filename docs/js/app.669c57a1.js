(function(t){function n(n){for(var r,i,s=n[0],c=n[1],l=n[2],u=0,_=[];u<s.length;u++)i=s[u],o[i]&&_.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);v&&v(n);while(_.length)_.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,s=1;s<e.length;s++){var c=e[s];0!==o[c]&&(r=!1)}r&&(a.splice(n--,1),t=i(i.s=e[0]))}return t}var r={},o={app:0},a=[];function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/vha-native/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var v=c;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0af1":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("097d");var r=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},a=[],i={name:"App",beforeCreate:function(){},props:{},data:function(){return{}},components:{},computed:{},methods:{},watch:{},created:function(){},mounted:function(){},activated:function(){},deactivated:function(){},beforeDestroy:function(){},destroyed:function(){}},s=i,c=(e("7faf"),e("2877")),l=Object(c["a"])(s,o,a,!1,null,null,null);l.options.__file="App.vue";var v=l.exports,u=e("8c4f"),_=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"_PG-index _df"},[e("div",{staticClass:"_UI-leftList _df _fdc"},[e("div",{staticClass:"ui-l-title _df _aic _cl-fff",on:{click:function(n){t.$router.push("/")}}},[e("i",{staticClass:"fa fa-mobile-phone fa-2x"}),e("span",{staticClass:"_di"},[t._v("Native")])]),t._m(0),e("div",{staticClass:"ui-l-menu _flexYauto"},t._l(t.menus,function(n,r){return e("section",{key:r},[e("p",{staticClass:"ui-l-i-title"},[t._v(t._s(n.title))]),e("ul",t._l(n.list,function(n,o){return e("li",{key:o,class:n.select?"ui-l-i-avtive":""},[e("a",{attrs:{href:t.procURL(n.href)},on:{click:function(n){t.onItemshow(r,o)}}},[t._v("\n              "+t._s(n.text)+"\n              "),e("span",{class:n.noteClass},[t._v(t._s(n.note))])]),e("ul",{directives:[{name:"show",rawName:"v-show",value:n.showItem,expression:"menuList.showItem"}]},t._l(n.item,function(n,r){return e("li",{key:r,class:n.select?"ui-l-i-avtive":""},[e("a",{attrs:{href:n.href}},[t._v("\n                  "+t._s(n.subText)+"\n                  "),e("span",{class:n.noteClass},[t._v(t._s(n.subNote))])])])}))])}))])})),e("div",{staticClass:"ui-l-color _df _jssa"},[e("div",{staticStyle:{"background-color":"#03a6ff"},on:{click:function(n){t.onColor("mainCl","#03a6ff")}}}),e("div",{staticStyle:{"background-color":"#f1404b"},on:{click:function(n){t.onColor("mainCl","#f1404b")}}}),e("div",{staticStyle:{"background-color":"#3ac569"},on:{click:function(n){t.onColor("mainCl","#3ac569")}}}),e("div",{staticStyle:{"background-color":"#35d69b"},on:{click:function(n){t.onColor("mainCl","#35d69b")}}})])]),e("div",{staticClass:"_UI-rightBox _flexYauto"},[e("router-view")],1)])},b=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"ui-l-search"},[e("input",{staticClass:"_reInput",attrs:{placeholder:"Search"}})])}],f=(e("3b2b"),e("a481"),e("ac6a"),e("1487")),d=e.n(f),h=(e("9f21"),{name:"PGindex",data:function(){return{menus:[{title:"Documentation",list:[{text:"Getting Started",note:"",noteClass:"",href:"/Getting-Started",select:!1,showItem:!1,item:[{subText:"启动屏幕",subNote:"Splashscreen",noteClass:"",href:"#documentationgetting_started",select:!0},{subText:"状态栏",subNote:"StatusBar",noteClass:"",href:"#documentationauthentication",select:!1},{subText:"网络状态",subNote:"Network",noteClass:"",href:"#documentationerrors",select:!1}]},{text:"Authentication",note:"",noteClass:"",href:"/Authentication",select:!1,showItem:!1,item:[]},{text:"Errors",note:"",noteClass:"",href:"/Errors",select:!1,showItem:!1,item:[]}]},{title:"Apis",list:[{text:"/books",note:"POST",noteClass:"_cl-66bb6a",href:"#",select:!1,showItem:!1,item:[]},{text:"/books",note:"POST",noteClass:"_cl-42a5f5",href:"#",select:!1,showItem:!1,item:[]},{text:"/books/:id",note:"PUT",noteClass:"_cl-7e57c2",href:"#",select:!1,showItem:!1,item:[]},{text:"/books/:id",note:"DELETE",noteClass:"_cl-ff7043",href:"#",select:!1,showItem:!1,item:[]}]}]}},components:{},methods:{onItemshow:function(t,n){this.menus[t].list[n].showItem=!this.menus[t].list[n].showItem},onColor:function(t,n){var e=document.querySelectorAll("head style"),r=function(t,n,e){var r=t.indexOf(n)+n.length,o=t.indexOf(e,r);return t.substring(r,o)};e.forEach(function(e){if(-1!=e.innerHTML.indexOf("/*Tstart-")){var o=r(e.innerHTML,"/*Tstart-".concat(t,"*/"),"/*Tend-".concat(t,"*/")),a=e.innerHTML;e.innerHTML=a.replace(new RegExp("(/".concat(o,"/)"),"g"),"/".concat(n,"/"))}})},procURL:function(t){return this.$router.history.base+t}},watch:{},created:function(){},mounted:function(){var t=function(t){var n=document.createElement("style");n.type="text/css",n.rel="stylesheet",n.appendChild(document.createTextNode(t));var e=document.getElementsByTagName("head")[0];e.appendChild(n)};t("\n      ._PG-index ._UI-leftList .ui-l-title {\n        background-color: /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/;\n      }\n      ._PG-index ._UI-leftList .ui-l-search input:focus {\n        border-left: 5px solid /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/;\n      }\n      ._PG-index ._UI-leftList .ui-l-menu .ui-l-i-avtive >a {\n        color: /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/ !important;\n      }\n      ._PG-index ._UI-leftList .ui-l-menu .ui-l-i-avtive >a:hover {\n        color: /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/ !important;\n      }\n    ");var n=this.$router.history.current.path;this.menus.forEach(function(t){t.list.forEach(function(t){"/"+n.replace(/\//g,"")===t.href&&(t.showItem=!0),t.select=!0})}),this.$nextTick(function(){var t=document.querySelectorAll("pre code");t.forEach(function(t){d.a.configure({languages:["javascript"]}),d.a.highlightBlock(t)})})},beforeDestroy:function(){}}),m=h,p=(e("a6d5"),Object(c["a"])(m,_,b,!1,null,null,null));p.options.__file="index.vue";var g=p.exports,x=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"index_PG-GettingStarted"},[e("section",{attrs:{id:"documentationgetting_started"}},[e("h1",[e("a",{attrs:{href:"#documentationgetting_started"}},[t._v("Getting Started")])]),e("p",[t._v("11111111111111111")]),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),e("pre",[t._v("  "),e("code",[t._v('StatusBaroverlaysWebView: function () {\n  this.$vha.statusbar.overlaysWebView(this.overlaysWebViewtruefalse)\n  if(this.overlaysWebViewtruefalse){\n    this.logText += "设置 overlaysWebView = false" + "\\n"\n    this.overlaysWebViewtruefalse = false\n    this.$vha.statusbar.overlaysWebView(this.overlaysWebViewtruefalse)\n  }else{\n    this.logText += "设置 overlaysWebView = true" + "\\n"\n    this.overlaysWebViewtruefalse = true\n    this.$vha.statusbar.overlaysWebView(this.overlaysWebViewtruefalse)\n  }\n}')]),t._v("\n")]),t._v("\n\n      \n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br"),t._v("\n      3333333 "),e("br")])])}],w={},C=Object(c["a"])(w,x,y,!1,null,null,null);C.options.__file="Getting-Started.vue";var T=C.exports,S=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"index_PG-GettingStarted"},[e("section",{attrs:{id:"documentationgetting_started"}},[e("h1",[e("a",{attrs:{href:"#documentationgetting_started"}},[t._v("Getting Started")])]),e("p",[t._v("2222222222222")]),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br")])])}],E={},I=Object(c["a"])(E,S,k,!1,null,null,null);I.options.__file="Authentication.vue";var G=I.exports,O=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"index_PG-GettingStarted"},[e("section",{attrs:{id:"documentationgetting_started"}},[e("h1",[e("a",{attrs:{href:"#documentationgetting_started"}},[t._v("Getting Started")])]),e("p",[t._v("33333333333")]),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br"),t._v("\n    3333333 "),e("br")])])}],P={},j=Object(c["a"])(P,O,$,!1,null,null,null);j.options.__file="Errors.vue";var L=j.exports;r["a"].use(u["a"]);var V=new u["a"]({mode:"history",base:"/vha-native/",routes:[{path:"/",component:g,redirect:"/Getting-Started",children:[{path:"/Getting-Started",component:T},{path:"/Authentication",component:G},{path:"/Errors",component:L}]}]}),W=e("2f62");r["a"].use(W["a"]),r["a"].mixin({components:{},created:function(){},methods:{toLink:function(t,n){console.log(n),this.$router.push(t)}}});var A=new W["a"].Store({state:{},mutations:{},actions:{}}),N=e("bc3a"),U=e.n(N),M=e("323e"),B=e.n(M);e("a5d8");r["a"].prototype.$ajax=U.a,V.beforeEach(function(t,n,e){console.log(t,n),""===t.hash&&B.a.start(),e()}),V.afterEach(function(){B.a.done()}),r["a"].config.productionTip=!1,new r["a"]({router:V,store:A,render:function(t){return t(v)}}).$mount("#app")},"7faf":function(t,n,e){"use strict";var r=e("0af1"),o=e.n(r);o.a},a6d5:function(t,n,e){"use strict";var r=e("cb4b"),o=e.n(r);o.a},cb4b:function(t,n,e){}});