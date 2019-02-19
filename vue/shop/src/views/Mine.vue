<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="登陆">
        <van-cell-group>
          <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="loginUsername"/>
          <van-field label="密码" required clearable placeholder="请输入密码" v-model="loginPassword"/>
        </van-cell-group>
        <div>
          <van-button type="primary" size="large">登陆</van-button>
        </div>
      </van-tab>
      <van-tab title="注册">
          <van-cell-group>
          <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="registUsername"/>
          <van-field label="密码" required clearable placeholder="请输入密码" v-model="registPassword"/>
        </van-cell-group>
        <div>
          <van-button type="primary" size="large">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
      loginUsername: "",
      loginPassword: "",
      registUsername: "",
      registPassword: ""
    };
  }
};
</script>

<style lang="scss" scoped>
</style>