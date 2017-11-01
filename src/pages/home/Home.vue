<template>
  <view-box class="home">
    <x-header
      :left-options="{backText: '易库易'}"
      class="header"
      style=""
    ></x-header>
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

      <div class="item">
        <div class="item-img">
          <img src="../../assets/005.png">
        </div>
        <div>询价</div>
      </div>

      <div class="item">
        <div class="item-img">
          <img src="../../assets/006.png">
        </div>
        <div>订单追踪</div>
      </div>

      <div class="item">
        <div class="item-img">
          <img src="../../assets/007.png">
        </div>
        <div>分类</div>
      </div>

      <div class="item">
        <div class="item-img">
          <img src="../../assets/008.png">
        </div>
        <div>联系客服</div>
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

    <div class="row">
      <div style="text-align: center; margin: 5px 0;">热销商品</div>
    </div>


    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>
    <div style="height: 50px;">123</div>

    <tabbar>
      <tabbar-item>
        <img slot="icon" src="../../assets/001.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../../assets/002.png">
        <span slot="label">询报价</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../../assets/003.png">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item link="/login">
        <img slot="icon" src="../../assets/004.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>

  </view-box>
</template>

<script>
import { ViewBox, XHeader, Tab, TabItem, Sticky, Search, Tabbar, TabbarItem, Swiper } from 'vux'

const imgList = [
  './static/009.png',
  './static/010.png',
  './static/011.png'
]

const demoList = imgList.map((one, index) => ({
  url: 'javascript:',
  img: one
}))

export default {
  components: {
    XHeader, Tab, TabItem, Sticky, ViewBox, Search, Tabbar, TabbarItem, Swiper
  },
  data () {
    return {
      demo03_list: demoList
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~styles/base.scss";
  .home {
    padding-top: $head-height;
    box-sizing: border-box;
    background-color: #eff0f4;

    .header {
      background-color:#383c3e;
      width:100%;
      position:absolute;
      left:0;
      top:0;
      z-index:100;
    }

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
    }

  }
</style>
