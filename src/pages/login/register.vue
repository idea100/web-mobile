<template>
  <view-box class="login">
    <div class="logo">YKY</div>
    <div class="item">
      <input type="text" placeholder="账号">
    </div>
    <div class="item">
      <input type="text" placeholder="验证码">
      <div class="code">获取验证码</div>
    </div>
    <div class="item">
      <input type="password" placeholder="密码">
    </div>
    <div class="item xxx">
      <x-button type="primary" link="/login">注 册</x-button>
    </div>
    <div class="item" style="margin-top: -20px; font-size: 14px;">
      <span>点击注册即表示同意易库易<span style="color: #199dd7">用户注册</span>协议和<span style="color: #199dd7">交易条款</span></span>
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
      position: relative;
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

      .code {
        display: inline-block;
        position: absolute;
        right: 0;
        top: 0;
        box-sizing: border-box;
        height: 50px;
        background-color: #199dd7;
        color: white;
        line-height: 50px;
        width: 36%;
        text-align: center;
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
