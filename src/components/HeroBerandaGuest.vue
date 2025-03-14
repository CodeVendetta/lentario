<template>
    <div
      class="w-full top-0 text-[#1F1F1F] font-poppins min-h-28 flex items-center justify-center mb-0"
      :style="{
        backgroundImage: `url(${bgHero})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '110vh'
      }"
    >
      <div class="text-center">
        <div class="py-20">
            <h1 class="text-5xl font-bold text-[#0C8CE9]">Len<span class="text-white">tario</span></h1>
            <p class="text-xl text-white font-medium mb-2">Peminjaman <span class="text-[#0C8CE9] font-semibold">Ruangan</span> dan <span class="text-[#0C8CE9] font-semibold">Barang</span></p>
            <p class="text-md text-white">Tersedia banyak ruangan dan barang yang dapat anda sewa <br>saat ini</p>
        </div>
        <div class="w-full bg-white mt-2 px-8 rounded-md">
            <h1 class="text-[#101828] font-semibold text-xl pt-6 pb-2">Mari cari ruangan & barang terbaik untuk anda</h1>
            <div class="w-full flex py-8 gap-14">
                <div class="flex gap-3">
                    <p class="text-2xl font-bold text-[#0C8CE9]">20+</p>
                    <p class="text-xs text-[#676767] text-start">Ruangan <br>tersedia</p>
                </div>
                <div class="flex gap-3">
                    <p class="text-2xl font-bold text-[#0C8CE9]">100+</p>
                    <p class="text-xs text-[#676767] text-start">Barang <br>tersedia</p>
                </div>
                <div class="flex gap-4">
                    <input class="text-xs min-w-[200px] border-b border-gray-300 px-4 py-2 shadow-sm text-[#101828] placeholder-[#101828] focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Apa Yang Kamu Butuhkan?">
                    <button class="text-xs bg-[#0C8CE9] text-white py-2 px-2 rounded-3xl hover:bg-white hover:border hover:border-[#0C8CE9] hover:text-[#0C8CE9]">Mulai Ajukan</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import bgHero from "@/assets/BG-Hero.svg";
  
  export default {
    name: "HeroBerandaGuest",
    data() {
      return {
        bgHero
      };
    },
  };
  </script>
  