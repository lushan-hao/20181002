<template>
  <div>
    <van-nav-bar title="首页" class="head">
      <van-icon name="search" slot="left"></van-icon>
      <van-icon name="cart" slot="right"></van-icon>
    </van-nav-bar>
    <van-swipe :autoplay="3000" class="homeswipe">
      <van-swipe-item v-for="(item,index) in imgAll" :key="index" class="homeswipe-index">
        <img v-lazy="item.imgSrc">
      </van-swipe-item>
    </van-swipe>

    <div class="hot">
      <p class="hot-title">热门商品</p>
      <swiper class="hot-price" :options="swiperOption">
        <swiper-slide class="hot-price-index" v-for="(item,index) in bookprice" :key="index">
          
          <!-- <p class="hot-price-index-class">类型{{item.catalog}}</p> -->
          <img :src="item.img" alt>
          <p class="hot-price-index-read">{{item.reading}}</p>
          <p class="hot-price-index-time">发行时间：
              <br/> {{item.bytime}}</p>
        </swiper-slide>
      </swiper>
    </div>
    <div class="recommend">
        <p class="hot-title">推荐商品</p>
        <hr/>
        <ul class="recommend-all">
          <li v-for="(item,index) in VarietyItem" :key="index" class="recommend-all-item">
            <img :src="item.img" alt>
            <p class="hot-price-index-title">{{item.title}}</p>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import axios from 'axios';
import url from '@/service.config.js';

export default {
  data() {
    return {
      imgAll: [
        {
          name: "img1",
          imgSrc:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548921502641&di=0fed944b7bd2821d67c483f2a2f12ccc&imgtype=0&src=http%3A%2F%2Fwww.hflz.com%2FuploadFiles%2Fimages%2F20151130%2Fcce1ba19da5b469e8323bf7addd37664%2F635844735406285628.jpg"
        },
        {
          name: "img2",
          imgSrc:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1766804843,2428109724&fm=26&gp=0.jpg"
        },
        {
          name: "img3",
          imgSrc: "http://pic35.photophoto.cn/20150620/0017031079860457_b.jpg"
        },
        {
          name: "img4",
          imgSrc:
            "http://img.zcool.cn/community/01d3f9554213660000019ae9b70ccc.jpg"
        }
      ],
      bookprice: [
        {
          title: "1984",
          catalog: "外国文学 小说 经典名著 ",
          tags: "世界名著 好书推荐 文学经典 科幻小说 讽喻小说 ",
          img:
            "http://apis.juhe.cn/goodbook/img/4dad281446fea4764dd078d7d6998c7a.jpg",
          reading: "21218人阅读",
          bytime: "2014年8月14日"
        },
        {
          title: "王子与贫儿",
          catalog: "儿童文学 经典名著 ",
          tags: "儿童文学经典作品 好书排行榜 童话小说 美国文学 讽刺小说 ",
          img:
            "http://apis.juhe.cn/goodbook/img/d9b6fb6c7b51a4959754de6a739dbec0.jpg",
          reading: "34045人阅读",
          bytime: "2014年7月30日"
        },
        {
          title: "长袜子皮皮",
          catalog: "儿童文学 经典名著 ",
          tags: "世界经典童话 儿童文学经典作品 外国文学经典 童书推荐 童年 ",
          img:
            "http://apis.juhe.cn/goodbook/img/53f6916b8b9b9cd0ab84e21f67e5dea3.jpg",
          reading: "4016人阅读",
          bytime: "2013年6月1日"
        },
        {
          title: "月亮和六便士",
          catalog: "外国文学 小说 经典名著 ",
          tags: "世界名著 好书 理想与现实 经典小说推荐 英国文学 ",
          img:
            "http://apis.juhe.cn/goodbook/img/724e8fb36260f71dc8c245edbcebb1c0.jpg",
          reading: "4824人阅读",
          bytime: "2013年6月13日"
        },
        {
          title: "霍乱时期的爱情",
          catalog: "外国文学 小说 经典名著 ",
          tags: "外国文学经典 拉美文学 经典好书推荐 经典爱情小说 诺贝尔文学奖 ",
          img:
            "http://apis.juhe.cn/goodbook/img/d539d14fe2e9450bb58164d4866819eb.jpg",
          reading: "5620人阅读",
          bytime: "2013年4月24日"
        },
        {
          title: "京华烟云",
          catalog: "中国文学 小说 经典名著 ",
          tags: "中国文学名著 中国近代历史 值得看的好书 小说推荐 经典好书推荐 ",
          img:
            "http://apis.juhe.cn/goodbook/img/8de57bb8f82c0f31035d25e48644f3dd.jpg",
          reading: "3754人阅读",
          bytime: "2013年4月12日"
        }
      ],
      VarietyItem: [

      ],
      swiperOption: {
          silderPerView:3
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  created(){
    // var url1 = 'http://www.weichuang.com/getList';
    // var url2 = 'http://www.weichuang.com/getUser';
    // var url3 = 'http://www.haoluweb.com/regexp';
    // var url4 = 'http://www.haoluweb.com/list';
    var url5 = url.getVarietyItem;
    axios.get(url5).then(res => {
      // console.log(res.data);
      this.VarietyItem = res.data;
    });
    //  axios.get('https://bird.ioliu.cn/v2?url=https://api.douban.com/v2/movie/top250').then(res=>{
    //     console.log(res);
    // }); 

  }
};
</script>

<style lang="scss" scoped>
.head{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999 !important;
}
.homeswipe {
  padding-top: 0.9rem;
  height: 3rem;
  &-index {
    img {
      width: 100%;
      height: 3rem;
    }
  }
}
.hot {
  background-color: #eee;
  &-title {
    font-size: 0.35rem;
    height: 0.4rem;
    line-height: 0.4rem;
    padding-top: 0.2rem;
    text-align: center;
    padding-bottom: 0.2rem;
  }
  &-price-index {
    width: 2.1rem !important ;
    text-align: center;
    &-title {
      font-size: 0.25rem;
      font-weight: 600;
      color: #272727;
    }
    img {
      width: 1.6rem;
      height: 2.2rem;
    }
    &-read{
      font-size: 0.1rem;
      opacity: 0.5;
    }
    &-time{
      font-size: 0.12rem;
    }
  }
}
.recommend{
  background-color: #eee;
  margin-bottom: 1rem;
  &-all{
    clear: both;
    overflow: hidden;
    &-item{
      width: 50%;
      float: left;
      text-align: center;
      padding-top: 0.2rem;
      img{
        width: 2.2rem;
        height: 2.8rem;
      }
    }
  }

}
</style>
