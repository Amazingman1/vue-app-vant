<template>
  <div>
    <div class="img-content">
      <div class="img">
        <img style="width: 100%; height: 100%;" :src="Logo" alt="" />
      </div>
    </div>

    <div class="login">
      <div>
        <div style="padding: 10px; background-color: #ffffff;">
          <div id="myCode" ref="qrcode"></div>
        </div>
        <span class="text">请扫描自助注册激活二维码绑定酒店</span>
      </div>
    </div>
  </div>
</template>
<script>
import QRCode from 'qrcodejs2'
import { Button } from 'vant'
import App from '@/utils/appFn'
const Logo = require('@/assets/image/yunsahnzhulogo.png')

export default {
  name: 'Code',
  components: {
    [Button.name]: Button
  },
  data() {
    return {
      show: true,
      Logo: Logo
    }
  },
  mounted() {
    // this.makeCode()

    App({ order: 'machine_uuid' }).then(res => {
      this.makeCode(res.uuid)
      console.log(JSON.stringify(res))
    })
  },
  methods: {
    makeCode(uuid) {
      new QRCode(document.getElementById('myCode'), {
        text: `请联系客服申请激活! 客服电话：4001600703 ; MAC: ${uuid}`,
        // text: 'https://pms.lvyuetravel.com/epms/lv/rooms',
        width: 240,
        height: 240,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      })
    },
    canselBtn() {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  // height: 48vw;
  margin-top: 77px;
  background-color: #315fd1;
  .text {
    position: absolute;
    left: 33%;
    display: inline-block;
    margin-top: 30px;
    margin-left: 30px;
    font-size: 29px;
    color: #ffffff;
  }
}
.img-content {
  padding: 121px 0;
  background-color: #ffffff;
  .img {
    width: 574px;
    height: 175px;
    margin: auto;
  }
}
</style>
