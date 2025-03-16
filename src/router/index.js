import { createRouter, createWebHistory } from 'vue-router';
import SignUpGuest from '../views/SignUpGuest.vue';
import SignInGuest from '../views/SignInGuest.vue';
import BerandaGuest from '../views/BerandaGuest.vue';
import PeminjamanRuangBarangGuest from '../views/PeminjamanRuangBarangGuest.vue';
import PeminjamanRuangGuest from '../views/PeminjamanRuangGuest.vue';
import PeminjamanBarangGuest from '../views/PeminjamanBarangGuest.vue';
import RekapitulasiGuest from '../views/RekapitulasiGuest.vue';
import TentangKamiGuest from '../views/TentangKamiGuest.vue';

const routes = [
  {
    path: '/signupguest',
    name: 'SignUpGuest',
    component: SignUpGuest
  },
  {
    path: '/signinguest',
    name: 'SignInGuest',
    component: SignInGuest
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
  },
  {
    path: '/rekapitulasiguest',
    name: 'RekapitulasiGuest',
    component: RekapitulasiGuest
  },
  {
    path: '/tentangkamiguest',
    name: 'TentangKamiGuest',
    component: TentangKamiGuest
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
