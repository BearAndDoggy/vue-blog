import Vue from 'vue'
import Router from 'vue-router'
import Create from '@/components/Create'
import Details from '@/components/Details'
import Edit from '@/components/Edit'
import Index from '@/components/Index'
import Register from '@/components/Register'
import User from '@/components/User'
import My from '@/components/My'
import Login from '@/components/Login'


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
