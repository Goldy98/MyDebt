import Vue from "vue";
import VueRouter from "vue-router";
import Debt from "../components/Debt";
import Income from "../components/Income";
import Details from "../components/Details";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Debt
  },
  {
    path: "/debt",
    name: "Debt",
    component: Debt
  },
  {
    path: "/income",
    name: "Income",
    component: Income
  },
  {
    path: "/details",
    name: "Details",
    component: Details
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
