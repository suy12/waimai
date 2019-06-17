import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/goods'
import Rating from '@/components/rating/rating'
import Seller from '@/components/seller/seller'

Vue.use(Router)

export default new Router({
	linkActiveClass:"current",
  routes: [
	{
	  	//路由从定向
	  	path:"/",
	  	redirect:"/goods"
	},
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/rating',
      name: 'rating',
      component: Rating
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    }
  ]
})
