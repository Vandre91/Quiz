import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Stats from '@/components/Stats'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Stats',
      name: 'Stats',
      component: Stats
    }
  ]
})
