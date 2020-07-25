import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RegisterUser from "@/components/RegisterUser.vue";
import LoginUser from "@/components/LoginUser.vue";
import Dashboard from "@/components/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: { requiresAuth: true } //This is a custom flag. We look for this setting in the BeforeEach route guard below
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },

  // USER //
  {
    path: "/user/register",
    name: "user-register",
    component: RegisterUser
  },
  {
    path: "/user/login",
    name: "user-login",
    component: LoginUser
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user');

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!loggedIn) {
      next({name: "user-login"});
      console.log("I am not logged in. Logged in status: " + loggedIn);
    } else {
      console.log("I am logged in. Logged in status: " + loggedIn);
      next();
    }
    
  } else next();
});

export default router;
