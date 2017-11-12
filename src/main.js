import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from 'router'
import { AlertPlugin } from 'vux'
import store from 'store'
import { sync } from 'vuex-router-sync'
import 'styles/index.scss'

Vue.use(AlertPlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app-box',
  router,
  render: h => h(App)
})
