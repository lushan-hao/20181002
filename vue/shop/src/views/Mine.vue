<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="登陆">
        <van-cell-group>
          <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="loginUsername"/>
          <van-field
            label="密码"
            type="password"
            required
            clearable
            placeholder="请输入密码"
            v-model="loginPassword"
          />
        </van-cell-group>
        <div>
          <van-button type="primary" size="large">登陆</van-button>
        </div>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="registUsername"/>
          <van-field
            label="密码"
            type="password"
            required
            clearable
            placeholder="请输入密码"
            v-model="registPassword"
          />
        </van-cell-group>
        <div>
          <van-button type="primary" @click="registHandler" size="large">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import axios from "axios";
import url from "@/service.config.js";
export default {
  data() {
    return {
      active: 2,
      loginUsername: "",
      loginPassword: "",
      registUsername: "",
      registPassword: ""
    };
  },
  methods: {
    //注册的处理方法
    registHandler() {
      console.log(url.registUser);
      axios({
        url: url.registUser,
        methods: "post",
        data: {
          userName: this.registUsername,
          password: this.registPassword
        },
      }).then(res => {
          if (res.data.code == 200) {
            // Toast.success("注册成功");
            console.log('s');
          } else {
            // Toast.fail("注册失败");
            console.log(res.data.code);
          }
        }).catch(err => {
          // Toast.fail("注册失败");
          console.log('e2');
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>