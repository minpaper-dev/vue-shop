import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import App from './App.vue'
import Main from './components/MainPage.vue'
import CategoryListPage from './components/CategoryListPage.vue'
import ProductDetail from './components/ProductDetail.vue'
import CartPage from './components/CartPage.vue'
import ErrorPage from './components/ErrorPage.vue'

const routes = [
    // { path: '/', name : "Main", component: Main },
    { path: '/', name : "Main",  component: Main },
    { path: '/jewelery', name:"jewelery", component: CategoryListPage, props : {category :'jewelery' } },
    { path: '/electronics', name:"electronics",component: CategoryListPage , props : {category :'electronics' }},
    { path: '/men',name:"men", component: CategoryListPage , props : {category :"men's clothing" }},
    { path: '/women', name:"women",component: CategoryListPage, props : {category :"women's clothing" } },
    { path: '/product/:id', component: ProductDetail , props : true},
    { path: '/cart',name:"cart", component: CartPage },
    { path: "/:pathMatch(.*)", name : 'No-match', component : ErrorPage },
  ]

 const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

 export default router 