<template>
    <NavbarGuest activePage="Peminjaman ruang & barang" />
    <HeroPeminjamanRuangBarangGuest />
    <TableQtyPinjamRuangGuest />
    <TableQtyPinjamBarangGuest />
    <FooterGuest />
  </template>
    
  <script>
    import NavbarGuest from '@/components/NavbarGuest.vue'
    import HeroPeminjamanRuangBarangGuest from '@/components/HeroPeminjamanRuangBarangGuest.vue'
    import TableQtyPinjamRuangGuest from '@/components/TableQtyPinjamRuangGuest.vue'
    import TableQtyPinjamBarangGuest from '@/components/TableQtyPinjamBarangGuest.vue'
    import FooterGuest from '@/components/FooterGuest.vue'
  
    export default {
      name: 'PeminjamanRuangBarangGuest',
      components: { 
        NavbarGuest,
        HeroPeminjamanRuangBarangGuest,
        TableQtyPinjamRuangGuest,
        TableQtyPinjamBarangGuest,
        FooterGuest
      }
    };
  </script>