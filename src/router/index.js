import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ()=> import('@/components/home/Home')
    },
    {
      path: '/goods',
      name: 'Goods',
      component: ()=> import('@/components/home/goods')
    },
    {
      path: '/seller',
      name: 'Seller',
      component: ()=> import('@/components/home/seller')
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: ()=> import('@/components/home/ratings')
    }
  ],
  
})
