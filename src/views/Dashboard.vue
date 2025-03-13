<template>
  <NavbarGuest activePage="Beranda" />
  <FooterGuest />
</template>
  
<script>
  import NavbarGuest from '@/components/NavbarGuest.vue'
  import FooterGuest from '@/components/FooterGuest.vue'

  export default {
    name: 'DashBoard',
    components: { 
      NavbarGuest,
      FooterGuest
    }
  };
</script>