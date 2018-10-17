<style lang="stylus">
._PG-index
  height 100%
  
  *
    transition all .4s
  
  .ui-l-menu::-webkit-scrollbar-track-piece
    background-color transparent
  
  // UI组件-左侧列表
  ._UI-menu
    width 240px
    border-right 1px solid lineCl
    background-color #fbfbfb
    .ui-l-title
      cursor pointer
      padding 0 20px
      height 60px
      background url('../assets/images/cloud-bg.png') no-repeat 0% bottom
      background-color /*Tstart-mainCl*/mainCl/*Tend-mainCl*/
      box-shadow inset -10px 0 10px -10px rgba(0,0,0,.1)
      span
        margin-left 8px
        font-size 1.6em
    .ui-l-search
      input
        padding 13px
        border none
        width 100%
        font-weight 600
        color #000
        font-size 1.1em
        border-left 5px solid #fff
        border-bottom 1px solid lineCl
        box-sizing border-box
        background-color #fff
        &:focus
          border-left 5px solid /*Tstart-mainCl*/mainCl/*Tend-mainCl*/
    .ui-l-color
      padding 20px
      div
        cursor pointer
        width 18px
        height 18px
        border-radius 3px
        border 2px solid #fff
        box-shadow 0 0 0 1px #ddd
        box-sizing content-box
      
  // UI组件-右侧内容
  ._UI-content
    // padding 40px
    // background-color white
    #lastSection
      font-size 14px
      a
        color #1890ff !important
        &:hover
          text-decoration underline
      span
        color #aaa
    .ui-r-npm
      padding 6px
      padding-left 26px
      font-size .8em
      border 1px solid #eee
      border-radius 3px
      color #888888 !important
      background url('../assets/images/npm.png') no-repeat 6px center
      &:hover
        color #474a54 !important
    blockquote
      padding 10px
      border 0px
      border-radius 3px
      box-shadow 0 0 0 1px #eee
      p
        margin 0
    section
      padding 30px 50px
      width 100%
      font-size 1.2em
      color #474a54
      border-top 1px solid lineCl
      &:first-child
        border none
      h1, h2, h3, h4, h5, h6
        margin-bottom 30px
      a
        @extend ._clear-a
        color #474a54 !important
      table
        border 1px solid #E1E1E1
        margin 0 0 20px 0
        border-collapse collapse
        td, th
          border 1px solid #ccc
          padding 10px
          font-size .9em
          text-align left
        th
          background #f7f7f7

      pre
        padding 0
        margin 0
        code
          padding 15px
          border-radius 8px
          white-space pre-wrap
          font-size 16px
          letter-spacing .1px
          background-color #282c34
      dl
        border-top 1px solid #eee
        border-bottom 1px solid #eee
        padding 0 0 20px 0
        margin 0 0 20px 0
        dt
          width 30%
          float left
          font-weight 700
          position relative
          top 20px
        dd
          margin-left 30%
          padding-left 15px
          margin-top 20px
          &:after
            visibility hidden
            display block
            content ""
            clear both
            height 0
          +dd
            margin-top 0
            

        
        
      .ui-r-note
        border-left 5px solid #aaa
        padding 12px 15px
        margin-left -20px
        margin-right -15px
        background-color #FAFAFA
        border-radius 2px

</style>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<template>
  <div class="_PG-index _df">
    <!-- UI组件-左侧列表 -->
    <div class="_UI-menu _df _fdc">
      <div class="ui-l-title _df _aic _cl-fff" @click="$router.push('/')">
        <i class="fa fa-mobile-phone fa-2x"></i>
        <span class="_di">Native docs</span>
      </div>
      <div class="ui-l-search">
        <input class="_reInput" placeholder="Search" />
      </div>
      <div class="ui-l-menu _flexYauto">
        <UImenu :pData="menus" :getContainer="getContainer" :getContainerNode="getContainerNode"></UImenu>
        <!-- 
        <section>
          <p class="ui-l-i-title">Documentation</p>
          <ul>
            <li class="ui-l-i-avtive">
              <a href="#documentationgetting_started">
                Getting Started
              </a>
              <ul>
                <li class="ui-l-i-avtive">
                  <a href="#documentationgetting_started">
                    启动屏幕
                    <span>Splashscreen</span>
                  </a>
                </li>
                <li>
                  <a href="#documentationgetting_started">
                    状态栏
                    <span>StatusBar</span>
                  </a>
                </li>
                <li>
                  <a href="#documentationgetting_started">
                    网络状态
                    <span>Network</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#documentationauthentication">
                Authentication
              </a>
            </li>
            <li>
              <a href="#documentationerrors">
                Errors
              </a>
            </li>
          </ul>
        </section>
         -->
      </div>
      <div class="ui-l-color _df _jssa">
        <div style="background-color:#03a6ff" @click="onColor('mainCl', '#03a6ff')"></div>
        <div style="background-color:#f1404b" @click="onColor('mainCl', '#f1404b')"></div>
        <div style="background-color:#3ac569" @click="onColor('mainCl', '#3ac569')"></div>
        <div style="background-color:#35d69b" @click="onColor('mainCl', '#35d69b')"></div>
      </div>
    </div>
    <!-- UI组件-右侧内容 -->
    <div class="_UI-content _flexYauto">
      <router-view></router-view>
    </div>
  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
import UImenu from "../components/menu";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
export default {
  name: 'PGindex',
  data() {
    //动态数据
    return {
      menus: [
        {
          title: 'Documentation',
          list: [
            {
              text: 'Getting Started',
              note: '',
              noteClass: '',
              href: '/Getting-Started',
              select: false,
              showItem: false,
              item: [
                {
                  subText: '启动屏幕',
                  subNote: 'Splashscreen',
                  noteClass: '',
                  href: '#documentationgetting_started',
                  select: false
                },
                {
                  subText: '状态栏',
                  subNote: 'StatusBar',
                  noteClass: '',
                  href: '#documentationauthentication',
                  select: false
                },
                {
                  subText: '网络状态',
                  subNote: 'Network',
                  noteClass: '',
                  href: '#documentationerrors',
                  select: false
                }
              ]
            },
            {
              text: 'Authentication',
              note: '',
              noteClass: '',
              href: '/Authentication',
              select: false,
              showItem: false,
              item: [
                {
                  subText: '启动屏幕',
                  subNote: 'Splashscreen',
                  noteClass: '',
                  href: '#documentationgetting_started',
                  select: true
                },
                {
                  subText: '状态栏',
                  subNote: 'StatusBar',
                  noteClass: '',
                  href: '#documentationauthentication',
                  select: false
                },
                {
                  subText: '网络状态',
                  subNote: 'Network',
                  noteClass: '',
                  href: '#documentationerrors',
                  select: false
                }
              ]
            },
            {
              text: 'Errors',
              note: '',
              noteClass: '',
              href: '/Errors',
              select: false,
              showItem: false,
              item: [
              ]
            }
          ]
        },
        {
          title: 'Apis',
          list: [
            {
              text: '/books',
              note: 'POST',
              noteClass: '_cl-66bb6a',
              href: '#',
              select: false,
              showItem: false,
              item: [
              ]
            },
            {
              text: '/books',
              note: 'POST',
              noteClass: '_cl-42a5f5',
              href: '#',
              select: false,
              showItem: false,
              item: [
              ]
            },
            {
              text: '/books/:id',
              note: 'PUT',
              noteClass: '_cl-7e57c2',
              href: '#',
              select: false,
              showItem: false,
              item: [
              ]
            },
            {
              text: '/books/:id',
              note: 'DELETE',
              noteClass: '_cl-ff7043',
              href: '#',
              select: false,
              showItem: false,
              item: [
              ]
            }
          ]
        }
      ]
    }
  },
  components: {
    //组件 - 引入或定义
    UImenu
  },
  methods: {
    //方法 - 进入页面创建
    getContainer: function () {
      return document.querySelector('._UI-content')
    },
    getContainerNode: function () {
      return document.querySelectorAll('._UI-content>div>*')
    },
    onColor: function (name, color) {
      let temp_styles = document.querySelectorAll('head style')
      
      //取字符串中间内容
      let getStrMid = function (str, starStr, endStr) {
        let temp_for = str.indexOf(starStr) + starStr.length
        let temp_back = str.indexOf(endStr, temp_for)
        return str.substring(temp_for, temp_back)
      }
      
      temp_styles.forEach(element => {
        if (element.innerHTML.indexOf(`/*Tstart-`) != -1) {
          let temp_string = getStrMid(element.innerHTML, `/*Tstart-${name}*/`, `/*Tend-${name}*/`)
          let temp_innerHTML = element.innerHTML
          element.innerHTML = temp_innerHTML.replace(new RegExp(`(/${temp_string}/)`,'g'), `/${color}/`)
        }
      })
    }
  },
  watch: {
    //观察 - 数据或方法变动
    // 'this.$router': function () {
    //   console.log(this.$router)
    // }
  },
  created() {
    //实例创建完成后
  },
  mounted() {
    //挂载实例后 - this.el存在
    let loadCssCode = function (code){
      var style = document.createElement('style');
      style.type = 'text/css';
      style.rel = 'stylesheet';
      //for Chrome Firefox Opera Safari
      style.appendChild(document.createTextNode(code));
      //for IE
      //style.styleSheet.cssText = code;
      var head = document.getElementsByTagName('head')[0];
      head.appendChild(style);
    }
    loadCssCode(`
      ._PG-index ._UI-menu .ui-l-title {
        background-color: /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/;
      }
      ._PG-index ._UI-menu .ui-l-search input:focus {
        border-left: 5px solid /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/;
      }
      ._PG-index ._UI-menu .ui-l-menu .ui-l-i-avtive >a {
        color: /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/ !important;
      }
      ._PG-index ._UI-menu .ui-l-menu .ui-l-i-avtive >a:hover {
        color: /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/ !important;
      }
    `)

    //下次渲染时渲染代码高亮
    this.$nextTick(function() {
      let blocks = document.querySelectorAll("pre code")
      blocks.forEach(block => {
        // hljs.configure({languages: ['javascript']})
        hljs.highlightBlock(block)
        // hljs.registerLanguage('javascript', javascript);
      })
    })
    
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  }
}
</script>