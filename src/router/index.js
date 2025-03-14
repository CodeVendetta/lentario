import { createRouter, createWebHistory } from 'vue-router';
import BerandaGuest from '../views/BerandaGuest.vue';
import PeminjamanRuangBarangGuest from '../views/PeminjamanRuangBarangGuest.vue';

const routes = [
  {
    path: '/berandaguest',
    name: 'BerandaGuest',
    component: BerandaGuest
  },
  {
    path: '/peminjamanruangbaranguest',
    name: 'PeminjamanRuangBarangGuest',
    component: PeminjamanRuangBarangGuest
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
