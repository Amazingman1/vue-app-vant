<!--
 * @Author: wangxuan
 * @Date: 2020-09-22 15:25:41
 * @LastEditors: wangxuan
 * @LastEditTime: 2020-09-24 15:35:48
 * @FilePath: /vue-vant-base/src/views/login/index.vue
-->
<template>
  <div class="login">
    <div class="img">
      <img style="width: 100%; height: 100%;" :src="LoginLogal" alt="" />
    </div>
    <div class="form">
      <div class="form-text" @click="ClickCode">
        <span style="text-decoration: underline;">自助注册激活</span>
      </div>
      <div class="login-form">
        <van-form @submit="onSubmit">
          <div class="title" style="margin-top: 10vw;">
            <div style="font-size: 2vw; color: #777777;">
              USERLOGIN
            </div>
            <div>用户登陆</div>
          </div>
          <div style="margin-top: 5vw;">
            <div class="lable-text">
              账号：
            </div>
            <van-field
              v-model="username"
              name="用户名"
              style="padding-left: 70px; font-size: 26px;"
              placeholder="账号"
              size="mini"
            />
            <div class="lable-text">
              密码：
            </div>
            <van-field
              v-model="password"
              type="password"
              name="密码"
              style="padding-left: 70px; font-size: 26px;"
              size="mini"
              placeholder="密码"
            />
            <div class="btn">
              <van-button block type="info" native-type="submit">
                立即登陆
              </van-button>
            </div>
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
import { Button, Form, Field } from 'vant'
const LoginLogal = require('@/assets/image/login.png')
export default {
  name: 'Login',
  components: {
    [Button.name]: Button,
    [Form.name]: Form,
    [Field.name]: Field
  },
  data() {
    return {
      LoginLogal: LoginLogal,
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    },
    ClickCode() {
      this.$router.push({ name: 'Code' })
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  display: flex;
  height: 100%;
  background-color: #ffffff;

  .form {
    width: 100%;
    padding: 20px;
    background-color: #ffffff;
    .form-text {
      float: right;
      margin-bottom: 20px;
      font-size: 24px;
      color: #235ada;
      text-decoration: underline;
    }
    .title {
      font-size: 30px;
      color: #235ada;
    }
  }
  .img {
    float: left;
    width: 800px;
    height: 100%;
  }
}
.login-form {
  padding: 30px;
}
.lable-text {
  margin-top: 20px;
  font-size: 30px;
}
.btn {
  margin-top: 100px;
}
</style>
