// import { createApp } from 'vue';
// import App from './App.vue';

// createApp(App).mount("#app");


import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import App from './App.vue';


const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('authToken');

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isLoggedIn) {
            next('/login');
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
        if (isLoggedIn) {
            next('/products');
        } else {
            next();
        }
    } else {
        next();
    }
});

const app = createApp(App);
app.use(router);
app.mount('#app');


