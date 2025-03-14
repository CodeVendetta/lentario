<template>
    <NavbarGuest activePage="Peminjaman ruang & barang" />
    <HeroPeminjamanRuangGuest />
    <TablePinjamRuangGuest />
    <FooterGuest />
  </template>
    
  <script>
    import NavbarGuest from '@/components/NavbarGuest.vue'
    import HeroPeminjamanRuangGuest from '@/components/HeroPeminjamanRuangGuest.vue'
    import TablePinjamRuangGuest from '@/components/TablePinjamRuangGuest.vue'
    import FooterGuest from '@/components/FooterGuest.vue'
  
    export default {
      name: 'PeminjamanRuangGuest',
      components: { 
        NavbarGuest,
        HeroPeminjamanRuangGuest,
        TablePinjamRuangGuest,
        FooterGuest
      }
    };
  </script>