import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/masterViews/Home.vue"
import Dashboard from '../views/homeWiews/Dashboard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path:'/',
        name:'index',
        component:Home,
        children:[
          {
            path:'/dashboard',
            name:'dashboard',
            component:Dashboard
          }
        ]
      }
  ]
})

export default router
