import Vue from "vue";
import VueRouter from "vue-router";

import HomePage from "@/views/Home";
import Certificado from "@/views/certificado/index";

Vue.use(VueRouter);

const routes = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: HomePage },
    { path: "/certificado", component: Certificado },
  ],
});

export default routes;
