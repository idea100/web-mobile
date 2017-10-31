<template>
  <view-box class="home">
    <x-header
      :left-options="{backText: '易库易'}"
      class="header"
      style=""
    ></x-header>
    <div class="search-title">
      <span>YKY易库易</span>
      <span>电子元器件全透明交易平台</span>
    </div>
    <sticky scroll-box="vux_view_box_body" ref="sticky" :offset="46" :check-sticky-support="false">
      <search
        position="relative"
        :autoFixed="false"
        ref="search"></search>
    </sticky>


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

  </view-box>
</template>

<script>
import { ViewBox, XHeader, Tab, TabItem, Sticky, Search } from 'vux'

export default {
  components: {
    XHeader, Tab, TabItem, Sticky, ViewBox, Search
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~styles/base.scss";
  .home {
    padding-top: $head-height;
    box-sizing: border-box;

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
      padding: 10px 0;
    }


  }
</style>
