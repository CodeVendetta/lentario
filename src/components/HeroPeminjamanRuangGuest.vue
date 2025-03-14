<template>
    <BgHero :bgHero="bgImage" class="text-center flex-col gap-3">
      <h1 class="text-white text-6xl font-semibold mt-[-100px]">Peminjaman</h1>
      <h1 class="text-white text-6xl font-semibold">Ruangan</h1>
    </BgHero>
  </template>
  
  <script setup>
    import BgHero from "@/components/BgHero.vue";
    import bgImage from "@/assets/BG-Hero.svg";
  </script>
  