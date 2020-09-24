<!--
 * @Author: 冯超
 * @Date: 2020-07-08 16:12:32
 * @LastEditors: wangxuan
 * @LastEditTime: 2020-09-23 17:19:25
 * @Description: 文件说明
 * @FilePath: /vue-vant-base/src/App.vue
-->
<template>
  <div id="app">
    <transition :name="transitionName">
      <navigation>
        <router-view class="router" />
      </navigation>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      transitionName: 'van-slide-right'
    }
  },
  created() {
    this.$navigation.on('forward', () => {
      this.transitionName = 'van-slide-right'
    })
    this.$navigation.on('back', () => {
      this.transitionName = 'van-slide-left'
    })
  }
}
</script>

<style lang="less">
#app {
  height: 100vh;
  font-family: PingFangSC-Regular;
  background-color: #315fd1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/** 解决路由切换动画上下闪动问题 */
.router {
  position: absolute;
  top: safe-area-inset-top;
  top: env(safe-area-inset-top);
  width: 100%;
  transition: all 0.377s ease;
  backface-visibility: hidden;
}
</style>
