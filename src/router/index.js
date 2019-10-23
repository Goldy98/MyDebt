import Vue from "vue";
import VueRouter from "vue-router";
import Debt from "../components/Debt";
import Income from "../components/Income";

Vue.use(VueRouter);

const routes = [
  {
    path: "/debt",
    name: "Debt",
    component: Debt
  },
  {
    path: "/income",
    name: "Income",
    component: Income
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
