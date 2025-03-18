<template>
    <SidebarAdmin activePage="Dashboard">
        <Section1DashboardAdmin />
        <Section2DashboardAdmin />
    </SidebarAdmin>
  </template>
    
  <script>
    import SidebarAdmin from '@/components/SidebarAdmin.vue'
    import Section1DashboardAdmin from '@/components/Section1DashboardAdmin.vue'
    import Section2DashboardAdmin from '@/components/Section2DashboardAdmin.vue'
  
    export default {
      name: 'DashboardAdmin',
      components: { 
        SidebarAdmin,
        Section1DashboardAdmin,
        Section2DashboardAdmin
      }
    };
  </script>