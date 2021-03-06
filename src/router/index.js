/**
 * 路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
//引入所有路由
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'

//生命使用的路由
Vue.use(VueRouter);
export default  new VueRouter({
   routes: [
     {
       path: '/msite',
       component: Msite
     },
     {
       path: '/order',
       component: Order
     },
     {
       path: '/profile',
       component: Profile
     },
     {
       path: '/search',
       component: Search
     },
     {
       path: '/',
       redirect: './msite'
     }
   ]
});

