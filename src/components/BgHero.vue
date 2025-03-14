<template>
    <div
      class="w-full top-0 text-[#1F1F1F] font-poppins min-h-28 flex items-center justify-center mb-[-20px]"
      :style="{
        backgroundImage: `url(${bgHero})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '110vh'
      }"
    >
      <slot></slot>
    </div>
</template>
  
<script setup>
  import { defineProps } from "vue";
  
  defineProps({
    bgHero: {
      type: String,
      required: true
    }
  });
</script>
  