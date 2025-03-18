<template>
    <SidebarAdmin activePage="Dashboard" />
  </template>
    
  <script>
    import SidebarAdmin from '@/components/SidebarAdmin.vue'
  
    export default {
      name: 'DashboardAdmin',
      components: { 
        SidebarAdmin
      }
    };
  </script>