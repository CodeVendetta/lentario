import { createRouter, createWebHistory } from 'vue-router';
import config from '../config.js';

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
    path: '/', 
    redirect: () => {
      const token = localStorage.getItem('token');
      const role = (localStorage.getItem('role') || '').trim().toLowerCase();
    
      if (!token) return '/signinguest';
      return role === 'user' ? '/berandaguest' : (role === 'admin' ? '/dashboardadmin' : '/signinguest');
    }    
  },
  { path: '/signupguest', name: 'SignUpGuest', component: SignUpGuest },
  { path: '/signinguest', name: 'SignInGuest', component: SignInGuest },

  { path: '/berandaguest', name: 'BerandaGuest', component: BerandaGuest, meta: { requiresAuth: true, role: 'user' } },
  { path: '/peminjamanruangbarangguest', name: 'PeminjamanRuangBarangGuest', component: PeminjamanRuangBarangGuest, meta: { requiresAuth: true, role: 'user' } },
  { path: '/peminjamanruangguest', name: 'PeminjamanRuangGuest', component: PeminjamanRuangGuest, meta: { requiresAuth: true, role: 'user' } },
  { path: '/peminjamanbarangguest', name: 'PeminjamanBarangGuest', component: PeminjamanBarangGuest, meta: { requiresAuth: true, role: 'user' } },
  { path: '/rekapitulasiguest', name: 'RekapitulasiGuest', component: RekapitulasiGuest, meta: { requiresAuth: true, role: 'user' } },
  { path: '/tentangkamiguest', name: 'TentangKamiGuest', component: TentangKamiGuest, meta: { requiresAuth: true, role: 'user' } },

  { path: '/dashboardadmin', name: 'DashboardAdmin', component: DashboardAdmin, meta: { requiresAuth: true, role: 'admin' } },
  { path: '/tambahdataadmin', name: 'TambahDataAdmin', component: TambahDataAdmin, meta: { requiresAuth: true, role: 'admin' } },
  { path: '/persetujuanadmin', name: 'PersetujuanAdmin', component: PersetujuanAdmin, meta: { requiresAuth: true, role: 'admin' } },

  { path: '/logout', name: 'Logout', beforeEnter: (to, from, next) => {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      alert('Anda telah berhasil logout!');
      next('/signinguest');
  }}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token') || config.tokenUser || config.tokenAdmin;
  const userRole = localStorage.getItem('role');
  const user = localStorage.getItem('user');

  console.log(`Navigating to: ${to.path}, Role: ${userRole}, User: ${user}`);

  if (to.meta.requiresAuth && !token) {
    alert('Anda harus login terlebih dahulu!');
    return next('/signinguest');
  }

  if (to.meta.role) {
    const requiredRole = (to.meta.role || '').trim().toLowerCase();
    const currentRole = (userRole || '').trim().toLowerCase();
  
    if (requiredRole !== currentRole) {
      return next(currentRole === 'user' ? '/berandaguest' : (currentRole === 'admin' ? '/dashboardadmin' : '/signinguest'));
    }
  }  

  next();
});


export default router;
