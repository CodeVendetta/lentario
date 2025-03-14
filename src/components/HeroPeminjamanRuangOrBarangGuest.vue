<template>
    <BgHero :bgHero="bgImage" class="text-center flex-col gap-3">
      <h1 class="text-white text-6xl font-semibold mt-[-100px]">Peminjaman</h1>
      <h1 class="text-white text-6xl font-semibold">{{ title1 }}</h1>
    </BgHero>
  </template>
  
  <script setup>
    import { defineProps } from "vue";
    import BgHero from "@/components/BgHero.vue";
    import bgImage from "@/assets/BG-Hero.svg";

    defineProps({
      title1: {
        type: String,
        default: "Ruangan"
      }
    });
  </script>
  