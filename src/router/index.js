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
import time from '@/view/time'
import avgle from '@/view/avgle'
import imge from '@/view/imge'
import mixin from '@/view/mixin'
import Carousel from '@/view/Carousel'
import father  from '@/view/father.vue'
import news from '@/view/news.vue'
import vueQuillEditor  from '@/view/vueQuillEditor'
import canvas from '@/view/CANVAS'

import  filter from "@/view/filter.vue"
import vHtml from '@/view/v-html'
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
    //   name: 'main',
    //   component: main
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
      path:'/user',
      name:'user',
      component: user,
      children:[
        {
          path:':id',
          name:'ele',
          component:ele,
        },
      ]
    },
    {
      path:'/manage',
      name:'manage',
      component:manage,
      // 子路由由children表示
      children:[
        {
          path:'/list',
          name:'list',
          component:list
        },
        {
          path:'/edit',
          name:'edit',
          component:edit,
          meta:{auth:true}
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
    },
    {
      path:'/time',
      name:'time',
      component:time
    },
    {
      path:'/avgle',
      name:'avgle',
      component:avgle
      
    },
    {
      path:'/imge',
      name:'imge',
      component:imge
    },
    {
      path:'/mixin',
      name:'mixin',
      component:mixin
    },
    {
      path:'/Navi',
      name:'Navi',
      component:Navi
    },
    {
      path:'/Dashboard',
      name:'Dashboard',
      component:Dashboard
    },
    {
      path:'/Carousel',
      name:'Carousel',
      component:Carousel
    },
    {
      path:'/Sidebar',
      name:'Sidebar',
      component:Sidebar
    },
    {
      path:'/vueQuillEditor',
      name:'vueQuillEditor',
      component:vueQuillEditor
    },    
    {
      path:'/father',
      name:'father',
      component:father
    },    
    {
      path:'/news',
      name:'news',
      component:news
    }, 
    {
      path:'/vHtml',
      name:'vHtml',
      component:vHtml
    },    
    {
      path:'/filter',
      name:'vHtml',
      component:filter
    }, 
    {
      path:'/canvas',
      name:'canvas',
      component:canvas
    }, 
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




router.beforeEach((to, from, next) => {
  // getToken(()=>{
  //   let token = window.localStorage
  //   return token
  // })
  // console.log(getToken())

  /*
  如果ture,在进入edit,如果fasle，则进入ele
  */
 let token = window.localStorage
 
  // let token = null;
  // console.log(token)
  //根据字段判断是否路由过滤
  // console.log(record => record.meta.auth)
  // console.log(to.matched.some(record => record.meta.auth))
  // console.log(to.matched)
  if (to.matched.some(record => record.meta.auth)) {
    if (token !== null) {
      console.log('ok')
      next()
    } else {
      //防止无限循环
      if (to.name === '/edit') {
        next();
        return
      }
      next({
        path: '/ele',
      });
    }
  } else {
    next()//若点击的是不需要验证的页面,则进行正常的路由跳转
  }
});


export default router; //将路由器导出
