<template>
  <drawer>
    <x-header
      :left-options="{backText: '易库易'}"
      class="header"
      style=""
    ></x-header>

    <view-box class="detail">
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

      <component :is="tabContent"></component>

    </view-box>

    <tabbar>
      <tabbar-item class="item-card" @on-item-click="onTabbarItemClick1">
        <span style="color: white;" slot="label">加入购物车</span>
      </tabbar-item>

      <tabbar-item class="item-xxx" @on-item-click="onTabbarItemClick2">
        <span slot="label">询价</span>
      </tabbar-item>
    </tabbar>

    <div v-transfer-dom>
      <popup v-model="show" @on-hide="log('hide')" @on-show="log('show')">
        <div class="popup0">
          <div style="margin: 10px; font-size: 20px; text-align: center; margin-top: 30px;">成功添加商品</div>
        </div>

        <div class="item xxx">
          <x-button type="primary" @click.native=" show = false ">我知道了</x-button>
        </div>
      </popup>
    </div>

  </drawer>

</template>

<script>
  import { ViewBox, XHeader, Tab, TabItem, Sticky, Search, Tabbar, TabbarItem, Swiper, Scroller, Drawer, Popup, TransferDom, XButton } from 'vux'
  import ProductDetail from './product-detail'
  import ProductInfo from './product-info'
  import ProductParam from './product-param'

  export default {
    components: {
      XHeader, Tab, TabItem, Sticky, ViewBox, Search, Tabbar, TabbarItem, Swiper, Scroller, Drawer, Popup, XButton
    },
    directives: {
      TransferDom
    },
    data () {
      return {
        selectedTab: 0,
        show: false
      }
    },
    computed: {
      tabContent () {
        return this.selectedTab === 0 ? ProductDetail : this.selectedTab === 1 ? ProductInfo : ProductParam
      }
    },
    methods: {
      onItemClick () {
        console.log(1)
      },
      onTabbarItemClick1 () {
        this.show = true
      },
      onTabbarItemClick2 () {
        this.$vux.alert.show({
          title: 'don\'t click me, ok！'
        })
      },
      log (info) {
        console.log(info)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "~vux/src/styles/close.less";
  .header {
    background-color:#383c3e;
    width:100%;
    position:absolute;
    left:0;
    top:0;
    z-index:100;
  }

  .popup0 {
    padding-bottom:15px;
    height:400px;
  }

  .item-card {
    background-color: red;
  }

  .detail {
    box-sizing: border-box;
    background-color: #eff0f4;
    padding-top: 46px;

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
