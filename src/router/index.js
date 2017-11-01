import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home'
import Login, { Register, ModifyPassword } from 'pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/modify-password',
      component: ModifyPassword
    }
  ]
})
