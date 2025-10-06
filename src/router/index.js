import Vue from 'vue'
import Router from 'vue-router'
import Landing from '../views/Landing.vue'
import Market from '@/views/Market.vue'
import Spot from '@/views/Spot.vue'
import Favourite from '@/views/Favourite.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/market',
      name: 'market',
      component: Market
    },
    {
      path: '/spot',
      name: 'spot',
      component: Spot
    },
    {
      path: '/favourite',
      name: 'favourite',
      component: Favourite
    }
  ]
})

