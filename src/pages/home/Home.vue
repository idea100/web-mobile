<template>
  <drawer>
    <router-view></router-view>
    <tabbar>
      <tabbar-item v-for="(item, index) in tabbarItems" :key="index" :link="item.link">
        <img slot="icon" :src="item.src">
        <span slot="label">{{ item.label }}</span>
      </tabbar-item>
    </tabbar>
  </drawer>

</template>

<script>
import { fetchUserInfo } from 'service'
import { ViewBox, XHeader, Tabbar, TabbarItem, Drawer } from 'vux'

const tabbarItems = [
  {
    src: require('../../assets/001.png'),
    label: '首页',
    link: '/home/product'
  }, {
    src: require('../../assets/002.png'),
    label: '询报价',
    link: '/home/quotation'
  }, {
    src: require('../../assets/003.png'),
    label: '购物车',
    link: '/home/shopping'
  }, {
    src: require('../../assets/004.png'),
    label: '我的',
    link: '/home/user'
  }]

export default {
  components: {
    ViewBox, XHeader, Tabbar, TabbarItem, Drawer
  },
  data () {
    return {
      tabbarItems
    }
  },
  mounted () {
    fetchUserInfo()
      .then(resp => console.log(resp))
      .catch(e => console.log(e))
  },
  methods: {
  }
}
</script>
