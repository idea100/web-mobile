<template>
  <view-box class="login">
    <div class="logo">YKY</div>
    <div class="item">
      <input type="text" placeholder="账号">
    </div>
    <div class="item">
      <input type="password" placeholder="密码">
    </div>
    <div class="item xxx">
      <x-button type="primary" link="/">登 录</x-button>
    </div>
    <div class="item" style="margin-top: -20px;">
      <span>还未注册？</span>
      <a href="javascript: void 0" class="href-btn" @click="onHrefClick('/register')">点击注册</a>
      <a href="javascript: void 0" class="href-btn" style="float: right;" @click="onHrefClick('/modify-password')">忘记密码</a>
    </div>
  </view-box>
</template>

<script>
  import { ViewBox, XButton } from 'vux'

  export default {
    name: 'Login',
    components: {
      ViewBox, XButton
    },
    methods: {
      onHrefClick (path) {
        this.$router.push({ path })
      }
    }
  }
</script>

<style scoped lang="scss">
  .login {
    box-sizing: border-box;
    padding: 40px;

    .logo {
      text-align: center;
      font-size: 40px;
      font-weight: bold;
      color: red;
      margin: 1px 0;
    }

    .item {
      margin: 30px 0;
      box-sizing: border-box;
      input {
        width: 100%;
        box-sizing: border-box;
        height: 50px;
        position: relative;
        border: 1px solid #333;
        padding: 0 20px;
        line-height: 30px;
        font-size: 20px;
      }
    }

    .xxx {
      .weui-btn {
        background-color: #199dd7;
      }
    }

    .href-btn {
      color: #199dd7;
    }
  }
</style>
