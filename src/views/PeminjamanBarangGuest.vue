<template>
    <NavbarGuest activePage="Peminjaman ruang & barang" />
    <HeroPeminjamanRuangOrBarangGuest title1="Barang" />
    <TablePinjamBarangGuest />
    <FooterGuest />
  </template>
    
  <script>
    import NavbarGuest from '@/components/NavbarGuest.vue'
    import HeroPeminjamanRuangOrBarangGuest from '@/components/HeroPeminjamanRuangOrBarangGuest.vue'
    import TablePinjamBarangGuest from '@/components/TablePinjamBarangGuest.vue'
    import FooterGuest from '@/components/FooterGuest.vue'
  
    export default {
      name: 'PeminjamanBarangGuest',
      components: { 
        NavbarGuest,
        HeroPeminjamanRuangOrBarangGuest,
        TablePinjamBarangGuest,
        FooterGuest
      }
    };
  </script>