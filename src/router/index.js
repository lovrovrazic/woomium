import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Connect from '@/components/Connect'
import Files from '@/components/Files'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/connect',
      name: 'Connect',
      component: Connect
    },
    {
      path: '/files',
      name: 'Files',
      component: Files
    }
  ]
})
