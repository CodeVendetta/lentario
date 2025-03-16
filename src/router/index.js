import { createRouter, createWebHistory } from 'vue-router';
import SignUpGuest from '../views/SignUpGuest.vue';
import BerandaGuest from '../views/BerandaGuest.vue';
import PeminjamanRuangBarangGuest from '../views/PeminjamanRuangBarangGuest.vue';
import PeminjamanRuangGuest from '../views/PeminjamanRuangGuest.vue';
import PeminjamanBarangGuest from '../views/PeminjamanBarangGuest.vue';

const routes = [
  {
    path: '/signupguest',
    name: 'SignUpGuest',
    component: SignUpGuest
  },
  {
    path: '/berandaguest',
    name: 'BerandaGuest',
    component: BerandaGuest
  },
  {
    path: '/peminjamanruangbarangguest',
    name: 'PeminjamanRuangBarangGuest',
    component: PeminjamanRuangBarangGuest
  },
  {
    path: '/peminjamanruangguest',
    name: 'PeminjamanRuangGuest',
    component: PeminjamanRuangGuest
  },
  {
    path: '/peminjamanbarangguest',
    name: 'PeminjamanBarangGuest',
    component: PeminjamanBarangGuest
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
