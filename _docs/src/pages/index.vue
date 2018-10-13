<style lang="stylus">
._PG-index
  height 100%
  
  *
    transition all .5s
  
  .ui-l-menu::-webkit-scrollbar-track-piece
    background-color transparent
  
  // UI组件-左侧列表
  ._UI-leftList
    width 240px
    border-right 1px solid lineCl
    background-color #fbfbfb
    .ui-l-title
      cursor pointer
      padding 0 20px
      height 60px
      background url('../assets/images/cloud-bg.png') no-repeat scroll 0% bottom
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
        
    .ui-l-menu
      padding 20px 0
      .ui-l-i-title
        margin 8px 20px
        // line-height 1em
        font-size 1rem
        font-weight 700
        letter-spacing 1px
        color #888
      li
        a
          @extend ._clear-a
          padding 4px 26px
          display block
          font-size 1.1em
          color #777 !important
          // border-left 5px solid transparent
          &:hover
            color #000 !important
          span
            margin-left 2px
            color #aaa
            font-size 0.8em
      .ui-l-i-avtive
        >a
          color /*Tstart-mainCl*/mainCl/*Tend-mainCl*/ !important
          // border-left 5px solid mainCl
          &:hover
            color /*Tstart-mainCl*/mainCl/*Tend-mainCl*/ !important
      >section
        >ul
          >li
            >ul
              >li
                padding 0 14px
                font-size 0.8em

      
  // UI组件-右侧内容
  ._UI-rightBox
    // padding 40px
    // background-color white
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
    <div class="_UI-leftList _df _fdc">
      <div class="ui-l-title _df _aic _cl-fff" @click="$router.push('/')">
        <i class="fa fa-mobile-phone fa-2x"></i>
        <span class="_di">Native</span>
      </div>
      <div class="ui-l-search">
        <input class="_reInput" placeholder="Search" />
      </div>
      <div class="ui-l-menu _flexYauto">
        <section v-for="(menu, menuIndex) in menus" :key="menuIndex">
          <p class="ui-l-i-title">{{menu.title}}</p>
          <ul>
            <li :class="menuList.select ? 'ui-l-i-avtive' : ''" v-for="(menuList, menuListIndex) in menu.list" :key="menuListIndex">
              <a :href="menuList.href" @click="onItemshow(menuIndex, menuListIndex)">
                {{menuList.text}}
                <span :class="menuList.noteClass">{{menuList.note}}</span>
              </a>
              <ul v-show="menuList.showItem">
                <li :class="menuListItem.select ? 'ui-l-i-avtive' : ''" v-for="(menuListItem, menuListItemIndex) in menuList.item" :key="menuListItemIndex">
                  <a :href="menuListItem.href">
                    {{menuListItem.subText}}
                    <span :class="menuListItem.noteClass">{{menuListItem.subNote}}</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </section>
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
    <div class="_UI-rightBox _flexYauto">
      <router-view></router-view>
      
      
      
    </div>
  </div>
</template>
－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
<script type="text/ecmascript-6">
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
              href: '#documentationgetting_started',
              select: true,
              showItem: false,
              item: [
                {
                  subText: '启动屏幕',
                  subNote: 'Splashscreen',
                  noteClass: '',
                  href: '#',
                  select: true
                },
                {
                  subText: '状态栏',
                  subNote: 'StatusBar',
                  noteClass: '',
                  href: '#',
                  select: false
                },
                {
                  subText: '网络状态',
                  subNote: 'Network',
                  noteClass: '',
                  href: '#',
                  select: false
                }
              ]
            },
            {
              text: 'Authentication',
              note: '',
              noteClass: '',
              href: '#documentationauthentication',
              select: false,
              showItem: false,
              item: [
              ]
            },
            {
              text: 'Errors',
              note: '',
              noteClass: '',
              href: '#documentationerrors',
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
  },
  methods: {
    //方法 - 进入页面创建
    onItemshow: function (menusIndex, listIndex) {
      this.menus[menusIndex].list[listIndex].showItem = !this.menus[menusIndex].list[listIndex].showItem
    },
    onColor: function (name, color) {
      let tmp_styles = document.querySelectorAll('head style')
      
      //取字符串中间内容
      let getStrMid = function (str, starStr, endStr) {
        let tmp_for = str.indexOf(starStr) + starStr.length
        let tmp_back = str.indexOf(endStr, tmp_for)
        return str.substring(tmp_for, tmp_back)
      }
      
      tmp_styles.forEach(element => {
        if (element.innerHTML.indexOf(`/*Tstart-`) != -1) {
          let tmp_string = getStrMid(element.innerHTML, `/*Tstart-${name}*/`, `/*Tend-${name}*/`)
          let tmp_innerHTML = element.innerHTML
          element.innerHTML = tmp_innerHTML.replace(new RegExp(`(/${tmp_string}/)`,'g'), `/${color}/`)
        }
      })
    }
  },
  watch: {
    //观察 - 数据或方法变动
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
      ._PG-index ._UI-leftList .ui-l-title {
        background-color: /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/;
      }
      ._PG-index ._UI-leftList .ui-l-search input:focus {
        border-left: 5px solid /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/;
      }
      ._PG-index ._UI-leftList .ui-l-menu .ui-l-i-avtive >a {
        color: /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/ !important;
      }
      ._PG-index ._UI-leftList .ui-l-menu .ui-l-i-avtive >a:hover {
        color: /*Tstart-mainCl*/ #03a6ff /*Tend-mainCl*/ !important;
      }
    `)
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  }
}
</script>