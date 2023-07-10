import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import App from './App.vue'
import Main from './components/MainPage.vue'
import CategoryListPage from './components/CategoryListPage.vue'
import Jewelery from './components/JeweleryPage.vue'

const routes = [
    // { path: '/', name : "Main", component: Main },
    { path: '/',  component: Main },
    { path: '/jewelery', name:"jewelery", component: CategoryListPage, props : {category :'jewelery' } },
    { path: '/electronics', name:"electronics",component: CategoryListPage , props : {category :'electronics' }},
    { path: '/men',name:"men", component: CategoryListPage , props : {category :"men's clothing" }},
    { path: '/women', name:"women",component: CategoryListPage, props : {category :"women's clothing" } },
    { path: '/product/:id', component: Jewelery , props : true},
    { path: "/:pathMatch(.*)", name : 'No-match', redirect : '/' },
  ]

 const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

 export default router 