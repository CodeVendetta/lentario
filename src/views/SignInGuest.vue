<template>
    <div class="flex flex-row w-full">
        <div class="w-1/2">
          <FormSignIn />
        </div>
        <div class="w-1/2">
          <ImageSlider />
        </div>
    </div>
  </template>
    
  <script>
    import ImageSlider from '@/components/ImageSlider.vue'
    import FormSignIn from '@/components/FormSignIn.vue'
  
    export default {
      name: 'SignUpGuest',
      components: { 
        ImageSlider,
        FormSignIn
      }
    };
  </script>