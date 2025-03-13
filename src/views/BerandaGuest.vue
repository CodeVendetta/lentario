<template>
  <NavbarGuest activePage="Beranda" />
  <HeroBerandaGuest />
  <FooterGuest />
</template>
  
<script>
  import NavbarGuest from '@/components/NavbarGuest.vue'
  import HeroBerandaGuest from '@/components/HeroBerandaGuest.vue'
  import FooterGuest from '@/components/FooterGuest.vue'

  export default {
    name: 'BerandaGuest',
    components: { 
      NavbarGuest,
      HeroBerandaGuest,
      FooterGuest
    }
  };
</script>