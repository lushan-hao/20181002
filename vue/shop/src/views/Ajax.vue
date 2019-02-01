<template>
  <div>
    <van-button type="primary" @click="getData">获取数据</van-button>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{index+1}}: {{item.title}}</li>
    </ul>
  </div>
</template>


<script>
export default {
  data() {
    return { 
        list: [] 
    };
  },
  methods: {
    //Ajax原理
    ajax() {
      let shopUrl =
        "https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/top250";
      let xmlhttp;
      //创建XMLHttpRequest对象
      if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
      } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      //发送对象
      xmlhttp.open("GET", shopUrl, true);
      xmlhttp.send();
      //服务器端响应
      xmlhttp.addEventListener("readystatechange", () => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          let obj = JSON.parse(xmlhttp.responseText);
          console.log(obj);
          // console.log(this);
          this.list = obj.subjects;
        }
      });
    },
    getData() {
      this.ajax();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
