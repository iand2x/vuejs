import { createRouter, createWebHistory } from "vue-router";
import HomeA from "../views/HomeA.vue";
import { auth } from "../firebase";

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
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/RegisterA.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login" && auth.currentUser) {
    next("/");
    return;
  }

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !auth.currentUser //not logged in
  ) {
    next("/login");
    return;
  }

  next();
});

export default router;
