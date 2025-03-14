import { createRouter, createWebHistory } from 'vue-router';
import BerandaGuest from '../views/BerandaGuest.vue';
import PeminjamanRuangBarangGuest from '../views/PeminjamanRuangBarangGuest.vue';
import PeminjamanRuangGuest from '../views/PeminjamanRuangGuest.vue';

const routes = [
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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
