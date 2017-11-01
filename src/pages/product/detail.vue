<template>
  <drawer>
    <x-header
      :left-options="{backText: '易库易'}"
      class="header"
      style=""
    ></x-header>

    <view-box class="detail">
      <div class="search-title">
      <span style="font-size: 22px; font-weight: bold;">
        <span style="color: red;">YKY</span>
        易库易
      </span>
        <span>电子元器件全透明交易平台</span>
      </div>
      <sticky scroll-box="vux_view_box_body" ref="sticky" :offset="46" :check-sticky-support="false">
        <search
          position="relative"
          :autoFixed="false"
          ref="search"></search>
      </sticky>

    </view-box>

    <tabbar>
      <tabbar-item v-for="(item, index) in tabbarItems" :key="index" :link="item.link">
        <img slot="icon" :src="item.src">
        <span slot="label">{{ item.label }}</span>
      </tabbar-item>
    </tabbar>
  </drawer>

</template>

<script>
  import { ViewBox, XHeader, Tab, TabItem, Sticky, Search, Tabbar, TabbarItem, Swiper, Scroller, Drawer } from 'vux'

  const tabbarItems = [
    {
      src: require('../../assets/001.png'),
      label: '首页'
    }, {
      src: require('../../assets/002.png'),
      label: '询报价'
    }, {
      src: require('../../assets/003.png'),
      label: '购物车'
    }, {
      src: require('../../assets/004.png'),
      label: '我的',
      link: '/login'
    }]

  export default {
    components: {
      XHeader, Tab, TabItem, Sticky, ViewBox, Search, Tabbar, TabbarItem, Swiper, Scroller, Drawer
    },
    data () {
      return {
        tabbarItems
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~styles/base.scss";

  .header {
    background-color:#383c3e;
    width:100%;
    position:absolute;
    left:0;
    top:0;
    z-index:100;
  }

  .detail {
    box-sizing: border-box;
    background-color: #eff0f4;
    padding-top: $head-height;

    .search-title {
      background-color: black;
      margin-bottom: -1px;
      color: white;
      text-align: center;
      box-sizing: border-box;
      padding: 15px 0;
    }
  }
</style>
