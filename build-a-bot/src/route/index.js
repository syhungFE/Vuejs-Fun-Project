import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../home/HomePage.vue'
import RobotsBuilder from '../build/RobotsBuilder.vue'
import ShoppingCart from '../cart/ShoppingCart.vue'

Vue.use(Router);
export default new Router({
    routes:[{
        path:'/',
        name:'Home',
        components:HomePage
    },{
        path:'/build',
        name:'Build',
        components:RobotsBuilder
    },{
        path:'/cart',
        name:'Cart',
        components:ShoppingCart
    }
]
})