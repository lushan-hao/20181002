<template>
  <div>
    <van-nav-bar title="首页">
      <van-icon name="search" slot="left"></van-icon>
      <van-icon name="cart" slot="right"></van-icon>
    </van-nav-bar>
    <van-swipe :autoplay="3000" >
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
