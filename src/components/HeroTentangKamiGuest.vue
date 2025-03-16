<template>
    <BgHero :bgHero="bgImage">
      <div class="text-center px-20 mt-[-100px]">
        <div class="flex flex-col gap-6 py-10 px-36">
          <h1 class="text-5xl font-bold text-white">Tentang Kami</h1>
          <p class="text-md text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, distinctio maxime a veritatis voluptatem architecto totam sunt, illo amet nihil ab ullam quasi quaerat neque laudantium. Iure illum sunt odio!
          </p>
        </div>

        <div class="flex flex-row justify-center gap-8 mt-8">
          <div class="relative bg-white py-6 px-14 flex items-center justify-center rounded-2xl mb-10">
            <img src="../assets/iconabt1.svg" alt="" width="100" class="absolute left-0 top-1/2 transform -translate-y-1/2">
            <div class="flex flex-col max-w-[220px] text-center relative gap-1">
              <h3 class="text-md text-[#0C8CE9] font-semibold">Call Us</h3>
              <p class="text-[10px] leading-tight">
                Hubungi kami pada email<br><span class="text-[#0C8CE9] font-semibold">iniemail@gmail.com</span> atau instagram kami
                <span class="text-[#0C8CE9] font-semibold">@iniig</span>
              </p>
            </div>
          </div>
          <div class="relative bg-white py-6 px-14 flex items-center justify-center rounded-2xl mt-10">
            <img src="../assets/iconabt1.svg" alt="" width="100" class="absolute left-0 top-1/2 transform -translate-y-1/2">
            <div class="flex flex-col max-w-[220px] text-center relative gap-1">
              <h3 class="text-md text-[#0C8CE9] font-semibold">Support Us</h3>
              <p class="text-[10px] leading-tight">
                Hubungi kami pada email<br><span class="text-[#0C8CE9] font-semibold">iniemail@gmail.com</span> atau instagram kami
                <span class="text-[#0C8CE9] font-semibold">@iniig</span>
              </p>
            </div>
          </div>
          <div class="relative bg-white py-6 px-14 flex items-center justify-center rounded-2xl mb-10">
            <img src="../assets/iconabt1.svg" alt="" width="100" class="absolute left-0 top-1/2 transform -translate-y-1/2">
            <div class="flex flex-col max-w-[220px] text-center relative gap-1">
              <h3 class="text-md text-[#0C8CE9] font-semibold">Visit Us</h3>
              <p class="text-[10px] leading-tight">
                Hubungi kami pada email<br><span class="text-[#0C8CE9] font-semibold">iniemail@gmail.com</span> atau instagram kami
                <span class="text-[#0C8CE9] font-semibold">@iniig</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </BgHero>
  </template>
  
  <script setup>
    import BgHero from "@/components/BgHero.vue";
    import bgImage from "@/assets/BG-Hero.svg";
  </script>
  