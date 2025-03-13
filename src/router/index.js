import { createRouter, createWebHistory } from 'vue-router';
import BerandaGuest from '../views/BerandaGuest.vue';

const routes = [
  {
    path: '/berandaguest',
    name: 'BerandaGuest',
    component: BerandaGuest
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
