import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index.vue'
import aaa from '@/pages/index/aaa.vue'
import bbb from '@/pages/index/bbb.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { 
      path: '/',
      component: index,
      redirect: '/aaa',
      children: [
        {
          path: '/aaa',
          component: aaa
        },
        {
          path: '/bbb',
          component: bbb
        }
      ]
    }
  ]
})
