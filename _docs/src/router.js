import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/index.vue'
import GettingStarted from '@/pages/index/Getting-Started.vue'
import Authentication from '@/pages/index/Authentication.vue'
import Errors from '@/pages/index/Errors.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { 
      path: '/',
      component: index,
      redirect: '/Getting-Started',
      children: [
        {
          path: '/Getting-Started',
          component: GettingStarted
        },
        {
          path: '/Authentication',
          component: Authentication
        },
        {
          path: '/Errors',
          component: Errors
        }
      ]
    }
  ]
})
