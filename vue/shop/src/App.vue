<template>
  <div id="app">
    <router-view></router-view>
    <!-- <ul class="foot-bar">
      <li class="foot-bar-item">
        <router-link to="/">首页</router-link>
        </li>
      <li class="foot-bar-item">
        <router-link to="/class">分类</router-link></li>
      <li class="foot-bar-item">
        <router-link to="/shopcar">购物车</router-link></li>
      <li class="foot-bar-item">
        <router-link to="/mine">我的</router-link></li>
    </ul> -->
    <van-tabbar v-model="active">
  <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
  <van-tabbar-item icon="ellipsis" dot to="/class">分类</van-tabbar-item>
  <van-tabbar-item icon="friends-o" info="5" to="/shopcar">购物车</van-tabbar-item>
  <van-tabbar-item icon="setting-o" info="20" to="/mine">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>


<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>


<style lang="scss">
// .foot-bar {
//   display: flex;
//   background-color: #ccc;
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   height: 1rem;
//   line-height: 1rem;
//   &-item {
//     flex-grow: 1;
//     text-align: center;
//   }
// }
</style>
