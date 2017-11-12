import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: require('pages/home').default,
      children: [
        {
          path: '',
          redirect: 'product'
        },
        {
          path: 'product',
          component: require('pages/product').default
        },
        {
          path: 'quotation',
          component: require('pages/quotation').default
        },
        {
          path: 'shopping',
          component: require('pages/shopping').default
        },
        {
          path: 'user',
          component: require('pages/user').default
        }
      ]
    },
    {
      path: '/login',
      component: require('pages/login').default
    }
  ]
})
