<template>
    <NavbarGuest activePage="Rekapitulasi" />
    <HeroRekapitulasiGuest />
    <TableRekapRuangGuest />
    <TableRekapBarangGuest />
    <FooterGuest />
  </template>
    
  <script>
    import NavbarGuest from '@/components/NavbarGuest.vue'
    import HeroRekapitulasiGuest from '@/components/HeroRekapitulasiGuest.vue'
    import TableRekapRuangGuest from '@/components/TableRekapRuangGuest.vue'
    import TableRekapBarangGuest from '@/components/TableRekapBarangGuest.vue'
    import FooterGuest from '@/components/FooterGuest.vue'
  
    export default {
      name: 'RekapitulasiGuest',
      components: { 
        NavbarGuest,
        HeroRekapitulasiGuest,
        TableRekapRuangGuest,
        TableRekapBarangGuest,
        FooterGuest
      }
    };
  </script>