import Vue from 'vue'
import Router from 'vue-router'
import ListaHoteles from '@/components/ListaHoteles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListaHoteles',
      component: ListaHoteles
    }
  ]
})
