import {createWebHistory, createRouter} from "vue-router";
import login from "../pages/login";
import register from "../pages/register";
import dashboard from "../pages/dashboard";
import chatroom from "../pages/chatroom";

const routes = [
    {
        path: "/",
        redirect: to => {
            const token = localStorage.getItem('token')
            if (token) {
                return '/dashboard'
            } else {
                return '/login'
            }
        }
    },
    {
        path: "/login",
        component: login,
    },
    {
        path: "/register",
        component: register,
    },
    {
        path: '/dashboard',
        component: dashboard
    },
    {
        path: '/chatroom/:id',
        component: chatroom
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;