// import from pages
import Overview from "../inventory/pages/Overview.vue";
import Create from "./pages/Create.vue";

export const routes = [
  { path: "/inventory/overview", component: Overview },
  { path: "", component: Overview },
  { path: "/inventory/create", component: Create },
];
