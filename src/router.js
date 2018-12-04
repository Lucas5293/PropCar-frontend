import Vue from 'vue'
import TelaInicial from './components/TelaInicial.vue'
import Login from './components/Login.vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
        path: '/',
        name: 'login',
        component: Login
        },
        {
        path: '/home',
        name: 'home',
        component: TelaInicial,
            meta: {
                requiresAuth: true
            }
        }
    ]
 });
 router.beforeEach((to, from, next) => {
     if (to.path != "/") {
         if (store.state.token != null) {
            next();
         } else {
            next({path: '/'})
         }
     } else {
         next();
     }
})

 export default router;