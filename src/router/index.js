import Vue from 'vue'
import Router from 'vue-router'
import ListaHoteles from '@/components/ListaHoteles'
import ListaHabitaciones from '@/components/ListaHabitaciones'
import CrearHoteles from '@/components/CrearHoteles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/hoteles'
    },
    {
      path: '/hoteles',
      name: 'ListaHoteles',
      component: ListaHoteles
    },
    {
      path: '/habitaciones',
      name: 'ListaHabitaciones',
      component: ListaHabitaciones
    },
    {
      path: '/crear-hoteles',
      name: 'CrearHoteles',
      component: CrearHoteles
    },
  ]
})
