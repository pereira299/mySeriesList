import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/serie",
    name: "Serie",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Serie.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
