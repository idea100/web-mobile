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
        <tab :animate="false" v-model="selectedTab">
          <tab-item active-class="active-tab" @on-item-click="onItemClick">商品详情</tab-item>
          <tab-item active-class="active-tab" @on-item-click="onItemClick">商品信息</tab-item>
          <tab-item active-class="active-tab" @on-item-click="onItemClick">规格参数</tab-item>
        </tab>
      </sticky>

      <div v-show="selectedTab === 0">
        商品详情
      </div>

      <div v-show="selectedTab === 1">
        商品信息
      </div>

      <div v-show="selectedTab === 2">
        规格参数
      </div>

    </view-box>

    <tabbar>
      <tabbar-item class="item-card">
        <span style="color: white;" slot="label">加入购物车</span>
      </tabbar-item>

      <tabbar-item class="item-xxx">
        <span slot="label">询价</span>
      </tabbar-item>
    </tabbar>
  </drawer>

</template>

<script>
  import { ViewBox, XHeader, Tab, TabItem, Sticky, Search, Tabbar, TabbarItem, Swiper, Scroller, Drawer } from 'vux'

  export default {
    components: {
      XHeader, Tab, TabItem, Sticky, ViewBox, Search, Tabbar, TabbarItem, Swiper, Scroller, Drawer
    },
    data () {
      return {
        selectedTab: 0
      }
    },
    methods: {
      onItemClick () {
        console.log(1)
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

  .item-card {
    background-color: red;
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

    .active-tab {
      color: #FF9900 !important;
      border-color: #FF9900 !important;
    }
  }
</style>
