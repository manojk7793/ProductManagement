import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Dashboard from './components/Dashboard.vue';

import ProductList from './components/Products/List.vue';
import ProductCreate from './components/Products/Add.vue';
import ProductEdit from './components/Products/Edit.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/products', component: ProductList, meta: { requiresAuth: true } },
  { path: '/product/add', name: 'ProductCreate' , component : ProductCreate, meta: { requiresAuth: true } },
  { path: '/product/:id/edit', name: 'ProductEdit' , component : ProductEdit, meta: { requiresAuth: true } }
];

export default routes;