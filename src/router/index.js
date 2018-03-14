import Vue from 'vue'
import Router from 'vue-router'


import HelloWorld from '@/view/HelloWorld'
import test1 from "@/view/test1"
import computed from '@/view/computed'
import test3 from '@/view/test3'
import user from '@/view/vueDemo/user'
import manage from '@/view/manage'
import list from '@/view/list'
import edit from '@/view/edit'
import directive from '@/view/directive'
import test4 from '@/view/test4'
import filterTime from '@/view/filterTime'
import tea from '@/view/tea'



Vue.use(Router)


const router = new Router({
  mode: 'history',
  routes: [

    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path:'*',
      redirect:'/'
    },
    {
      path: '/test1',
      name: 'test1',
      component: test1
    },
    {
      path: '/computed',
      name: 'computed',
      component: computed
    },
    {
      path: '/test3',
      name: 'test3',
      component: test3
    },
    {
      path:'/user/:id',
      name:'user',
      component: user
    },
    {
      path:'/manage',
      name:'manage',
      component:manage,
      //子路由由children表示
      children:[
        {
          path:'list',
          name:'list',
          component:list
        },
        {
          path:'edit',
          name:'edit',
          component:edit
        }
      ]
    },
    {
      path:'/directive',
      name:'directive',
      component:directive,
      children:[
        {
          path:'test4',
          name:'test4',
          component:test4
        }
      ]
    },
    {
      path:'/filterTime',
      name:'filterTime',
      component:filterTime
    },
    // {
    //   path:'/tea',
    //   name:'tea',
    //   component:tea
    // }
  ]
})

export default router; //将路由器导出
