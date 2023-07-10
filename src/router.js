import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import App from './App.vue'
import Main from './components/MainPage.vue'
import CategoryListPage from './components/CategoryListPage.vue'
import Jewelery from './components/JeweleryPage.vue'

const routes = [
    // { path: '/', name : "Main", component: Main },
    { path: '/',  component: Main },
    { path: '/jewelery', component: CategoryListPage },
    { path: '/electronics', component: CategoryListPage },
    { path: '/men', component: CategoryListPage },
    { path: '/women', component: CategoryListPage },
    { path: '/product/:id', component: Jewelery , props : true},
    { path: "/:pathMatch(.*)", name : 'No-match', redirect : '/' },
  ]

 const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

 export default router 