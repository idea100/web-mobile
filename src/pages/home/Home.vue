<template>
  <drawer>
    <x-header
      :left-options="{backText: '易库易'}"
      class="header"
      style=""
    ></x-header>

    <view-box class="home">
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

      <div class="operation">
        <div class="item" v-for="(item, index) in operateItems" :key="index">
          <div class="item-img">
            <img :src="item.src">
          </div>
          <div>{{ item.label }}</div>
        </div>
      </div>

      <div class="row">
        <swiper
          :list="demo03_list"
          auto style="width:100%; margin:0 auto;"
          height="180px"
          dots-class="custom-bottom"
          dots-position="center">
        </swiper>
      </div>

      <div class="row" style="padding-bottom: 20px;">
        <div style="text-align: center; margin: 5px 0;">热销商品</div>

        <div style="float: left; width: 50%;" v-for="item in 4" @click="onDetailClick">
          <div style="text-align: center;">
            <img style="width: 50%;" src="../../assets/009.png">
          </div>
          <div style="font-size: 14px; margin-left: 26px;">ADA48430-2BCPZ-R7</div>
          <div style="font-size: 12px; margin-left: 26px;">Analog Devices Inc</div>
          <div style="font-size: 14px; margin-left: 26px; color: red;">￥6.73827</div>
        </div>
        <div style="clear: both"></div>
        <div style="text-align: center; margin: 15px 0;">
          <span style="border: 1px solid #333; font-size: 14px; padding: 5px 10px;">更多商品&gt</span>
        </div>
      </div>

      <div class="row" style="padding-bottom: 20px;">
        <div style="text-align: center; font-size: 16px; padding-top: 20px; padding-bottom: 6px;">供应商列表</div>
        <div style="text-align: center; font-size: 14px; padding-bottom: 30px; color: #333">纯授权分销商，一站式超级采购大平台</div>
        <scroller lock-y :scrollbar-x=false>
          <div class="box1">
            <div class="box1-item" v-for="i in 7">
              <span>{{'供应商' + i + '(左右滑动)'}}</span>
            </div>
          </div>
        </scroller>
        <div style="text-align: center; margin: 36px 0;">
          <span style="border: 1px solid #333; font-size: 14px; padding: 5px 10px;">更多授权分销商&gt</span>
        </div>
      </div>

      <div class="row">
        <div style="text-align: center;">易库易</div>
        <div style="text-align: center;">供应链管理专家</div>
        <div style="text-align: center;">独特的B2B支付方式</div>
      </div>
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

const imgList = [
  './static/009.png',
  './static/010.png',
  './static/011.png'
]

const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))

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

const operateItems = [
  {
    src: require('../../assets/005.png'),
    label: '询价'
  }, {
    src: require('../../assets/006.png'),
    label: '订单追踪'
  }, {
    src: require('../../assets/007.png'),
    label: '分类'
  }, {
    src: require('../../assets/008.png'),
    label: '联系客服'
  }]

export default {
  components: {
    XHeader, Tab, TabItem, Sticky, ViewBox, Search, Tabbar, TabbarItem, Swiper, Scroller, Drawer
  },
  data () {
    return {
      demo03_list: demoList,
      tabbarItems,
      operateItems
    }
  },
  methods: {
    onDetailClick () {
      this.$router.push({ path: '/product' })
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

  .home {
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

    .operation {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      background-color: white;
      padding: 10px 0;
      margin-bottom: 10px;

      .item {
        display: inline-block;
        margin: auto;
        padding: 10px 0;
        flex-grow: 1;
        text-align: center;

        img {
          width: 40%;
          border-radius: 100%;
          border: 1px solid #999;
          padding: 10px;
        }
      }
    }

    .row {
      background-color: white;
      margin: 10px 0;

      &:after {
        @include cleanFloat;
      }

      .box1 {
        height: 100px;
        position: relative;
        width: 1490px;
      }
      .box1-item {
        width: 200px;
        height: 100px;
        background-color: #ccc;
        display:inline-block;
        margin-left: 15px;
        float: left;
        text-align: center;
        line-height: 100px;
      }
      .box1-item:first-child {
        margin-left: 0;
      }
    }

  }
</style>
