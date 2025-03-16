<template>
    <BgHero :bgHero="bgImage" class="text-center flex-col gap-3">
      <h1 class="text-white text-6xl font-semibold mt-[-30px] mb-6">Rekapitulasi</h1>
      <h3 class="text-white text-2xl">{{ dateNow }}</h3>
    </BgHero>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import BgHero from "@/components/BgHero.vue";
  import bgImage from "@/assets/BG-Hero.svg";
  
  const dateNow = ref(new Date().toLocaleDateString("id-ID", {  
    year: "numeric", 
    month: "long", 
    day: "numeric" 
  }));
  </script>
  