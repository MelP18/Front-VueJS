import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/masterViews/Home.vue"
import Dashboard from '../views/homeWiews/Dashboard.vue'
import Project from '../views/homeWiews/Project.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path:'/',
        name:'index',
        component:Home,
        children:[
          {
            path:'',
            name:'dashboard',
            component:Dashboard
          },
          {
            path:'/project',
            name:'project',
            component:Project
          }
        ]
      }
  ]
})

export default router
