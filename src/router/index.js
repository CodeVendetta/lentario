import { createRouter, createWebHistory } from 'vue-router';
import SignUpGuest from '../views/SignUpGuest.vue';
import SignInGuest from '../views/SignInGuest.vue';
import BerandaGuest from '../views/BerandaGuest.vue';
import PeminjamanRuangBarangGuest from '../views/PeminjamanRuangBarangGuest.vue';
import PeminjamanRuangGuest from '../views/PeminjamanRuangGuest.vue';
import PeminjamanBarangGuest from '../views/PeminjamanBarangGuest.vue';
import RekapitulasiGuest from '../views/RekapitulasiGuest.vue';
import TentangKamiGuest from '../views/TentangKamiGuest.vue';

import DashboardAdmin from '../views/DashboardAdmin.vue';
import TambahDataAdmin from '../views/TambahDataAdmin.vue';
import PersetujuanAdmin from '../views/PersetujuanAdmin.vue';

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
  },
  {
    path: '/dashboardadmin',
    name: 'DashboardAdmin',
    component: DashboardAdmin
  },
  {
    path: '/tambahdataadmin',
    name: 'TambahDataAdmin',
    component: TambahDataAdmin
  },
  {
    path: '/persetujuanadmin',
    name: 'PersetujuanAdmin',
    component: PersetujuanAdmin
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
