import { createRouter, createWebHistory } from "vue-router";
import Login from "./views/Login.vue";
import Forget from "./views/Forget.vue";
import Dashboard from "./views/Dashboard.vue";
import Mail from "./views/Mail.vue";
import AppEmailBody from "./components/AppEmailBody.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            component: Login,
            alias: '/'
        },
        {
            path: '/forget',
            component: Forget
        },
        {
            path: '/dashboard',
            component: Dashboard
        },
        {
            path: '/mail',
            component: Mail,
            children: [
                {
                    path: ':mailId?',
                    component: AppEmailBody,
                    props: true
                }
            ]
        }
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})