import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/DefaultPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'default',
      component: defaultPage,
      // redirect: '/index',
    //   children: [{
    //     path: 's/:name',
    //     name: 'goods',
    //     component: goodsList
    //   }, {
    //     path: '/index',
    //     name: 'index',
    //     component: Index
    //   }, {
    //     path: '/changeCity',
    //     name: 'changeCity',
    //     component: ChangeCity
    //   }]
    // }, {
    //   path: '/blank',
    //   name: 'blank',
    //   component: blankPage,
    //   children: [{
    //     path: 'login',
    //     name: 'login',
    //     component: Login
    //   }, {
    //     path: 'register',
    //     name: 'register',
    //     component: Register
    //   }]
    }
  ]
})
