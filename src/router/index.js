import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import homePage from '@/components/homePage'
import sourceManage from '@/components/sourceManage'
import page1 from '@/components/page1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homePage',
      name: 'home',
      component: homePage
    },
    {
      path:'/sourceManage',
      name:'sourceManage',
      component:sourceManage
    },
    {
      path:'/page1',
      name:'page1',
      component:page1
    }
  ]
})
