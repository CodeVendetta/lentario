<template>
    <SidebarAdmin activePage="Tambah Data">
        <TableTambahRuangAdmin/>
        <TableTambahBarangAdmin/>
    </SidebarAdmin>
  </template>
    
  <script>
    import SidebarAdmin from '@/components/SidebarAdmin.vue'
    import TableTambahRuangAdmin from '@/components/TableTambahRuangAdmin.vue'
    import TableTambahBarangAdmin from '@/components/TableTambahBarangAdmin.vue'
  
    export default {
      name: 'TambahDataAdmin',
      components: { 
        SidebarAdmin,
        TableTambahRuangAdmin,
        TableTambahBarangAdmin
      }
    };
  </script>