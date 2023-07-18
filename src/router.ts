import { createRouter,  createWebHistory, RouteRecordRaw } from 'vue-router';

import Main from './pages/MainPage.vue';
import CategoryListPage from './pages/CategoryListPage.vue';
import ProductDetailPage from './pages/ProductDetailPage.vue';
import CartPage from './pages/CartPage.vue';
import ErrorPage from './pages/ErrorPage.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: "Main", component: Main },
  { path: '/jewelery', name: "jewelery", component: CategoryListPage, props: { category: 'jewelery' } },
  { path: '/electronics', name: "electronics", component: CategoryListPage, props: { category: 'electronics' } },
  { path: '/fashion', name: "fashion", component: CategoryListPage, props: { category: "fashion" } },
  { path: '/product/:id', component: ProductDetailPage, props: true },
  { path: '/cart', name: "cart", component: CartPage },
  { path: "/:pathMatch(.*)", name: 'No-match', component: ErrorPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
