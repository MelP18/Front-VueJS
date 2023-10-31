import { createRouter, createWebHistory } from 'vue-router'
import Signin from '@/views/authenticationViews/Signin.vue'
import Home from "@/views/masterViews/Home.vue"
import Dashboard from '../views/homeWiews/Dashboard.vue'
import Project from '../views/homeWiews/Project.vue'
import Document from '../views/homeWiews/Document.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/signin',
            name: 'signin',
            component: Signin
        },
        {
            path: '/',
            name: 'index',
            component: Home,
            children: [
                {
                    path: '',
                    name: 'dashboard',
                    component: Dashboard
                },
                {
                    path: '/project',
                    name: 'project',
                    component: Project
                },
                {
                    path: '/document',
                    name: 'document',
                    component: Document
                }
            ]
        }
    ]
})

export default router
