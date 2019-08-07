import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import homePage from '@/components/homePage'
import sourceManage from '@/components/sourceManage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sourceManage',
      component: sourceManage
    }
  ]
})
