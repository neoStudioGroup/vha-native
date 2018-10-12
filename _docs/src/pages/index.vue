<style lang="stylus">
._PG-index
  height 100%
  
  *
    transition all .5s
  
  .ui-l-item::-webkit-scrollbar-track-piece
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
        
    .ui-l-item
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
      padding 30px
      width 100%
      border-top 1px solid lineCl
      &:first-child
        border none
    

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
      <div class="ui-l-item _flexYauto">
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
        <section>
          <p class="ui-l-i-title">Apis</p>
          <ul>
            <li>
              <a href="#documentationgetting_started">
                /books
                <span class="_cl-66bb6a">POST</span>
              </a>
            </li>
            <li>
              <a href="#documentationgetting_started">
                /books
                <span class="_cl-42a5f5">POST</span>
              </a>
            </li>
            <li class="ui-l-i-avtive">
              <a href="#documentationauthentication">
                /books/:id
                <span class="_cl-7e57c2">PUT</span>
              </a>
            </li>
            <li>
              <a href="#documentationerrors">
                /books/:id
                <span class="_cl-ff7043">DELETE</span>
              </a>
            </li>
          </ul>
        </section>
        
      </div>
      <div class="ui-l-color _df _jssa">
        <div style="background-color:#03a6ff" @click="changeColor('mainCl', '#03a6ff')"></div>
        <div style="background-color:#f1404b" @click="changeColor('mainCl', '#f1404b')"></div>
        <div style="background-color:#3ac569" @click="changeColor('mainCl', '#3ac569')"></div>
        <div style="background-color:#35d69b" @click="changeColor('mainCl', '#35d69b')"></div>
      </div>
    </div>
    <!-- UI组件-右侧内容 -->
    <div class="_UI-rightBox _flexYauto">
      <section id="documentationgetting_started">
        <router-link to="/aaa">2222</router-link>
        1111111 <br>
        1111111 <br>
        1111111 <br>
        1111111 <br>
        1111111 <br>
        1111111 <br>
        1111111 <br>
        1111111 <br>
        1111111 <br>
        1111111 <br>
        1111111 <br>
        1111111 <br>
        1111111 <br>
        1111111 <br>
      </section>
      <section id="documentationauthentication">
        2222222 <br>
        2222222 <br>
        2222222 <br>
        2222222 <br>
        2222222 <br>
        2222222 <br>
        2222222 <br>
        2222222 <br>
        2222222 <br>
        2222222 <br>
        2222222 <br>
        2222222 <br>
        2222222 <br>
        2222222 <br>
        2222222 <br>
        2222222 <br>
        2222222 <br>
        2222222 <br>
      </section>
      <section id="documentationerrors">
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
        3333333 <br>
      </section>
      
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
    }
  },
  components: {
    //组件 - 引入或定义
  },
  methods: {
    //方法 - 进入页面创建
    changeColor: function (name, color) {
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
  },
  beforeDestroy() {
    //销毁前 - 实例仍然完全可用
  },
}
</script>