<template>
    <SidebarAdmin activePage="Persetujuan">
        <TablePersetujuanRuang />
        <TablePersetujuanBarang />
    </SidebarAdmin>
  </template>
    
  <script>
    import SidebarAdmin from '@/components/SidebarAdmin.vue'
    import TablePersetujuanRuang from '@/components/TablePersetujuanRuang.vue'
    import TablePersetujuanBarang from '@/components/TablePersetujuanBarang.vue'
  
    export default {
      name: 'PersetujuanAdmin',
      components: { 
        SidebarAdmin,
        TablePersetujuanRuang,
        TablePersetujuanBarang
      }
    };
  </script>