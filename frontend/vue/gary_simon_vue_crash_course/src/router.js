import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'skills',
      component: () => import('./components/Skills.vue')
    },
    {
      path: '/about/:name',
      name: 'about',
      component: () => import('./components/About.vue')
    }
  ]
})
