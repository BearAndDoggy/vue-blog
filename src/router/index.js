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


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'HelloWorld',
      component: Login
    },
    {
      path: '/create',
      name: 'HelloWorld',
      component: Create
    },
    {
      path: '/details',
      name: 'HelloWorld',
      component: Details
    },
    {
      path: '/edit',
      name: 'HelloWorld',
      component: Edit
    },
    {
      path: '/register',
      name: 'HelloWorld',
      component: Register
    },
    {
      path: '/user',
      name: 'HelloWorld',
      component: User
    },
    {
      path: '/my',
      name: 'HelloWorld',
      component: My
    },
  ]
})
