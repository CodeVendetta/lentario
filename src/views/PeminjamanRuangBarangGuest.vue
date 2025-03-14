<template>
    <NavbarGuest activePage="Peminjaman ruang & barang" />
    <HeroPeminjamanRuangBarangGuest />
    <FooterGuest />
  </template>
    
  <script>
    import NavbarGuest from '@/components/NavbarGuest.vue'
    import HeroPeminjamanRuangBarangGuest from '@/components/HeroPeminjamanRuangBarangGuest.vue'
    import FooterGuest from '@/components/FooterGuest.vue'
  
    export default {
      name: 'PeminjamanRuangBarangGuest',
      components: { 
        NavbarGuest,
        HeroPeminjamanRuangBarangGuest,
        FooterGuest
      }
    };
  </script>