import { createRouter, createWebHistory } from "vue-router";
import { routes } from "../domains/inventory/routes.js";

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
