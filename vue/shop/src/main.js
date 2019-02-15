import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
// import '@/mock/mock.js'

// 按需引入vant
import { NavBar,Swipe, SwipeItem, Icon, Tabbar, TabbarItem, Lazyload, Button} from 'vant';

Vue.use(NavBar).use(Icon).use(Tabbar).use(TabbarItem).use(Lazyload).use(Swipe).use(SwipeItem).use(Button);
Vue.use(Lazyload)
// import Vant from 'vant';
// import 'vant/lib/index.css';
// vant 的完全引入
// Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
