import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Class from './views/Class.vue'
import Shopcar from './views/Shopcar.vue'
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
      name: 'shopcar',
      component: Shopcar
    },
    {
       path: '/mine',
       name: 'mine', 
       component: Mine
    }
  ]
})
