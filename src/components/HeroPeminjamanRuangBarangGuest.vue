<template>
    <BgHero :bgHero="bgImage" class="flex-col gap-10">
      <div class="justify-center text-center">
        <h1 class="text-5xl text-white font-semibold py-4">Peminjaman</h1>
        <h1 class="text-5xl text-[#0C8CE9] font-semibold">Ruang & Barang</h1>
      </div>
      <div class="flex gap-7">
        <div class="bg-white text-center pb-4 rounded-xl relative">
            <img src="../assets/imgruang.svg" alt="" width="180" class="rounded-t-xl">
            <p class="absolute top-3 left-3 text-[8px] text-white bg-[#0C8CE9] py-1 px-2 rounded-md font-semibold z-10">Peminjaman</p>
            <p class="text-[10px] font-semibold pt-3 pb-5">Peminjaman Ruangan</p>
            <router-link to="/peminjamanruangguest">
              <button class="text-[10px] text-white bg-[#0C8CE9] px-8 py-2 rounded-md font-semibold hover:bg-[#0863a4]">
                Mulai Peminjaman
              </button>
            </router-link>
        </div>
        <div class="bg-white text-center pb-4 rounded-xl relative">
            <img src="../assets/imgbarang.svg" alt="" width="180" class="rounded-t-xl">
            <p class="absolute top-3 left-3 text-[8px] text-white bg-[#0C8CE9] py-1 px-2 rounded-md font-semibold z-10">Peminjaman</p>
            <p class="text-[10px] font-semibold pt-3 pb-5">Peminjaman Barang</p>
            <router-link to="/peminjamanbarangguest">
              <button class="text-[10px] text-white bg-[#0C8CE9] px-8 py-2 rounded-md font-semibold hover:bg-[#0863a4]">
                Mulai Peminjaman
              </button>
            </router-link>
        </div>
        <div class="bg-white text-center pb-4 rounded-xl relative">
            <img src="../assets/imgruang.svg" alt="" width="180" class="rounded-t-xl">
            <p class="absolute top-3 left-3 text-[8px] text-white bg-[#0C8CE9] py-1 px-4 rounded-md font-semibold z-10">Data</p>
            <p class="text-[10px] font-semibold pt-3 pb-5">Data Ruangan</p>
            <button class="text-[10px] text-white bg-[#0C8CE9] px-14 py-2 rounded-md font-semibold hover:bg-[#0863a4]" @click="scrollToTable">
              Cek Data
            </button>
        </div>
        <div class="bg-white text-center pb-4 rounded-xl relative">
            <img src="../assets/imgbarang.svg" alt="" width="180" class="rounded-t-xl">
            <p class="absolute top-3 left-3 text-[8px] text-white bg-[#0C8CE9] py-1 px-4 rounded-md font-semibold z-10">Data</p>
            <p class="text-[10px] font-semibold pt-3 pb-5">Data Barang</p>
            <button class="text-[10px] text-white bg-[#0C8CE9] px-14 py-2 rounded-md font-semibold hover:bg-[#0863a4]" @click="scrollToTable2">
              Cek Data
            </button>
        </div>
      </div>
    </BgHero>
  </template>
  
  <script setup>
    import BgHero from "@/components/BgHero.vue";
    import bgImage from "@/assets/BG-Hero.svg";

    const scrollToTable = () => {
      const targetElement = document.getElementById("tbldataruang");
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    const scrollToTable2 = () => {
      const targetElement = document.getElementById("tbldatabarang");
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };
  </script>