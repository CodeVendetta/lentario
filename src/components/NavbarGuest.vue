<template>
    <nav class="block w-full px-20 pt-6 pb-2 text-[#1F1F1F] font-['Poppins'] bg-white">
      <div class="container flex flex-wrap items-center justify-between mx-auto text-[#1F1F1F]">
        <a href="#" class="mr-4 block cursor-pointer py-1.5">
          <img src="../assets/LenTario.svg" alt="Logo" width="100">
        </a>
        <div class="hidden lg:block">
          <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
            <li v-for="item in menuItems" :key="item.name" 
                class="relative flex items-center p-1 text-xs gap-x-2 transition-all group"
                :class="{'text-[#0C8CE9]': activePage === item.name, 'hover:text-[#0C8CE9]': true}">
                <a :href="item.link" class="flex items-center relative">
                {{ item.name }}
                <span v-if="activePage === item.name"
                        class="absolute left-1/2 top-5 h-[3px] w-full bg-[#0C8CE9] rounded-full transition-all transform -translate-x-1/2">
                </span>
                </a>
            </li>
            <li class="flex items-center p-1 gap-x-2 pl-10">
              <button @click.prevent="showModal = true" class="text-xs text-white bg-[#0C8CE9] rounded-2xl py-2 px-4">Profile</button>
            </li>
          </ul>
        </div>
        <button
          class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button">
          <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>

    <ModalProfil :isOpen="showModal" @close="showModal = false" />
  </template>
  
  <script>
  import ModalProfil from "./ModalProfilGuest.vue";

  export default {
    name: 'NavbarGuest',
    components: {
      ModalProfil,
    },
    props: {
      activePage: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        showModal: false,
        menuItems: [
          { name: "Beranda", link: "/berandaguest" },
          { name: "Peminjaman ruang & barang", link: "/peminjamanruangbarangguest" },
          { name: "Rekapitulasi", link: "/rekapitulasiguest" },
          { name: "Tentang Kami", link: "tentangkamiguest" }
        ]
      };
    }
  };
  </script>
  