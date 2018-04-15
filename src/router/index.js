import Vue from 'vue'
import Router from 'vue-router'

// import Main from '@/view/Main'
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
import Dashboard from '@/view/Dashboard'
import Navi from '@/view/Navigator'
import Sidebar from '@/view/Sidebar'
import fuzzySearch from '@/view/fuzzySearch'
import ele from '@/view/ele'
import todolist from '@/view/todolist'
import drag from  '@/view/drag'
// const Login = () => import('@/view/Login')

Vue.use(Router)


const router = new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   component: {
    //       default:Dashboard,
    //       navigator:Navi,
    //       sidebar:Sidebar
    //   }
    // },
    // {
    //   path: '/',
    //   name: 'Main',
    //   component: Main
    // },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
      component: user,
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
    {
      path:'/tea',
      name:'tea',
      component:tea
    },
    {
      path:'/fuzzySearch',
      name:'fuzzySearch',
      component:fuzzySearch
    },
    {
      path:'/ele',
      name:'ele',
      component:ele
    },
    {
      path:'/todolist',
      name:'todolist',
      component:todolist
    },
    {
      path:'/drag',
      name:'drag',
      component:drag
    }
    // {
    //   path:'/a',
    //   name:'a',
    //   component:a
    // },
    // {
    //   path:'/b',
    //   name:'b',
    //   component:b
    // },
    // {
    //   path:'/c',
    //   name:'c',
    //   component:c
    // }
  ]
})

export default router; //将路由器导出
