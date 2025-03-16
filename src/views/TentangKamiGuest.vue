<template>
    <NavbarGuest activePage="Tentang Kami" />
    <HeroTentangKamiGuest />
    <FooterGuest />
  </template>
    
  <script>
    import NavbarGuest from '@/components/NavbarGuest.vue'
    import HeroTentangKamiGuest from '@/components/HeroTentangKamiGuest.vue'
    import FooterGuest from '@/components/FooterGuest.vue'
  
    export default {
      name: 'BerandaGuest',
      components: { 
        NavbarGuest,
        HeroTentangKamiGuest,
        FooterGuest
      }
    };
  </script>