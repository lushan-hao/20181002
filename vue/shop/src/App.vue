<template>
  <div id="app">
    <router-view></router-view>
    <ul class="foot-bar">
      <li class="foot-bar-item">
        <router-link to="/">首页</router-link>
        </li>
      <li class="foot-bar-item">
        <router-link to="/class">分类</router-link></li>
      <li class="foot-bar-item">
        <router-link to="/shopcar">购物车</router-link></li>
      <li class="foot-bar-item">
        <router-link to="/car">我的</router-link></li>
        
    </ul>
  </div>
</template>

<style lang="scss">
.foot-bar {
  display: flex;
  background-color: #ccc;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  &-item {
    flex-grow: 1;
    text-align: center;
  }
}
</style>
