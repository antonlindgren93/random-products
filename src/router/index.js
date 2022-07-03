import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login";
import Products from "../components/Products";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
