import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "@/components/Welcome";
import Chat from "@/components/Chat";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
    props: true
  }
];

const router = new VueRouter({
  routes
});

export default router;
