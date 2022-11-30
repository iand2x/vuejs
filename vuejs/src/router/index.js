import { createRouter, createWebHistory } from "vue-router";
import HomeA from "../views/HomeA.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeA,
    meta: { requiresAuth: true },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutA.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginA.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
