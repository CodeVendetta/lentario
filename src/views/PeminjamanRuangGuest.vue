<template>
    <NavbarGuest activePage="Peminjaman ruang & barang" />
    <HeroPeminjamanRuangOrBarangGuest title1="Ruangan" />
    <TablePinjamRuangGuest />
    <FooterGuest />
  </template>
    
  <script>
    import NavbarGuest from '@/components/NavbarGuest.vue'
    import HeroPeminjamanRuangOrBarangGuest from '@/components/HeroPeminjamanRuangOrBarangGuest.vue'
    import TablePinjamRuangGuest from '@/components/TablePinjamRuangGuest.vue'
    import FooterGuest from '@/components/FooterGuest.vue'
  
    export default {
      name: 'PeminjamanRuangGuest',
      components: { 
        NavbarGuest,
        HeroPeminjamanRuangOrBarangGuest,
        TablePinjamRuangGuest,
        FooterGuest
      }
    };
  </script>