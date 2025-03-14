<template>
  <NavbarGuest activePage="Beranda" />
  <HeroBerandaGuest />
  <Section2BerandaGuest />
  <Section3BerandaGuest />
  <FooterGuest />
</template>
  
<script>
  import NavbarGuest from '@/components/NavbarGuest.vue'
  import HeroBerandaGuest from '@/components/HeroBerandaGuest.vue'
  import Section2BerandaGuest from '@/components/Section2BerandaGuest.vue'
  import Section3BerandaGuest from '@/components/Section3BerandaGuest.vue'
  import FooterGuest from '@/components/FooterGuest.vue'

  export default {
    name: 'BerandaGuest',
    components: { 
      NavbarGuest,
      HeroBerandaGuest,
      Section2BerandaGuest,
      Section3BerandaGuest,
      FooterGuest
    }
  };
</script>