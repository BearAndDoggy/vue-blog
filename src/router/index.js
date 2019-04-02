import Vue from 'vue'
import Router from 'vue-router'
import Create from '@/pages/Create'
import Details from '@/pages/Details'
import Edit from '@/pages/Edit'
import Index from '@/pages/Index'
import Register from '@/pages/Register'
import User from '@/pages/User'
import My from '@/pages/My'
import Login from '@/pages/Login'

import store from '@/store'


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/create',
      name: 'create',
      component: Create,
      meta: { requiresAuth: true }
    },
    {
      path: '/details/:blogId',
      name: 'details',
      component: Details
    },
    {
      path: '/edit/:blogId',
      name: 'edit',
      component: Edit,
      meta: { requiresAuth: true }
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    },
    {
      path: '/my',
      name: 'my',
      component: My,
      meta: { requiresAuth: true }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then((isLogin)=>{
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next() 
  }
})

export default router