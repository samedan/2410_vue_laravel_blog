import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import Home from "../components/Home.vue";
import Dashboard from "../components/Dashboard.vue";
import CreatePost from "../components/CreatePost.vue";

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { guest: true },
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: { guest: true },
    },
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { tokenRequired: true },
    },
    {
        path: "/post/create",
        name: "CreatePost",
        component: CreatePost,
        meta: { tokenRequired: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.tokenRequired && !sessionStorage.getItem("TOKEN")) {
        next({ name: "Login" });
        // } else if (to.meta.guest && sessionStorage.getItem("TOKEN")) {
        //     next({ name: "Dashboard" });
    } else if (to.meta.guest && sessionStorage.getItem("TOKEN")) {
        next({ name: "Dashboard" });
    } else {
        next();
    }
});

export default router;
