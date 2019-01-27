import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Class from './views/Class.vue'
import ShopCar from './views/ShopCar.vue'
import Mine from './views/Mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/class',
      name: 'class',
      component: Class
    },
    {
      path: '/shopcar',
      name: 'class',
      component: ShopCar
    },
    {
       path: '/mine',
       name: 'mine', 
       component: Mine
    }
  ]
})
