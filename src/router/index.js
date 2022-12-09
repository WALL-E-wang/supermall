import { createRouter, createWebHistory } from "vue-router";
const routerHistory = createWebHistory();
const home = () => import("@/views/home/home.vue");
const cart = () => import("@/views/cart/cart.vue");
const category = () => import("@/views/category/category.vue");
const profile = () => import("@/views/profile/profile.vue");

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: home,
  },
  {
    path: "/category",
    component: category,
  },
  {
    path: "/cart",
    component: cart,
  },
  {
    path: "/profile",
    component: profile,
  },
];
const router = createRouter({
  routes,
  history: routerHistory,
});

export default router;
