// import from pages
import Overview from "../inventory/pages/Overview.vue";
import Create from "./pages/Create.vue";
import Edit from "./pages/Edit.vue";

export const routes = [
  { path: "/inventory/overview", component: Overview },
  { path: "", component: Overview },
  { path: "/inventory/create", component: Create },
  { path: "/inventory/:id", component: Edit },
];
