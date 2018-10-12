import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// import toLink from "./components/toLink"
Vue.mixin({
  components: {
    //组件 - 引入或定义
    // toLink
  },
  created: function () {
    //实例创建完成后
  },
  methods: {
    //方法 - 进入页面创建
    toLink: function (herf, event) {
      console.log(event)
      this.$router.push(herf)
    }
  }
})

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
