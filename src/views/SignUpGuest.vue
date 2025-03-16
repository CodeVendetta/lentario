<template>
    <div class="flex flex-row w-full">
        <div class="w-1/2">
          <ImageSlider />
        </div>
        <div class="w-1/2">
          <FormSignUp />
        </div>
    </div>
  </template>
    
  <script>
    import ImageSlider from '@/components/ImageSlider.vue'
    import FormSignUp from '@/components/FormSignUp.vue'
  
    export default {
      name: 'SignUpGuest',
      components: { 
        ImageSlider,
        FormSignUp
      }
    };
  </script>