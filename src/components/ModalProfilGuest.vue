<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-poppins">
    <div class="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
      <div class="flex justify-between items-center mb-7">
        <h3 class="font-semibold text-[#0C8CE9]">Profil</h3>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-700">&times;</button>
      </div>

      <div class="mt-4 flex flex-col gap-1 text-[#1E1E1E]">
        <label class="text-xs">Nama</label>
        <input v-model="nama" type="text" :placeholder="nama || 'Nama tidak tersedia'"
          class="w-full border border-gray-300 px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" disabled>
      </div>

      <div class="mt-4 flex flex-col gap-1 text-[#1E1E1E]">
        <label class="text-xs">NIM</label>
        <input v-model="nim" type="text" :placeholder="nim || 'NIM tidak tersedia'"
          class="w-full border border-gray-300 px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" disabled>
      </div>

      <div class="mt-4 flex flex-col gap-1 text-[#1E1E1E]">
        <label class="text-xs">Program Studi</label>
        <input v-model="prodi" type="text" :placeholder="prodi || 'Prodi tidak tersedia'"
          class="w-full border border-gray-300 px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" disabled>
      </div>

      <div class="mt-4 flex flex-col gap-1 text-[#1E1E1E]">
        <label class="text-xs">Email</label>
        <input v-model="email" type="email" :placeholder="email || 'Email tidak tersedia'"
          class="w-full border border-gray-300 px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" disabled>
      </div>

      <div class="mt-4 text-center">
        <router-link to="/signout">
          <button class="bg-[#DC3545] text-white px-4 py-2 rounded-3xl hover:bg-[#c13140] text-xs">
            Sign Out
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
  },
  data() {
    return {
      username: "",
      nama: "",
      email: ""
    };
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        document.body.classList.add("overflow-hidden");
        this.loadUserData(); // Ambil data saat modal dibuka
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    loadUserData() {
      const userData = JSON.parse(localStorage.getItem('user'))
      if (userData) {
        try {
          this.nama = userData.nama || "Nama tidak tersedia";
          this.nim = userData.nim || "NIM tidak tersedia";
          this.prodi = userData.prodi || "Prodi tidak tersedia";
          this.email = userData.email || "Email tidak tersedia";
        } catch (error) {
          console.error("Error parsing user data from localStorage:", error);
        }
      } else {
        console.warn("User data tidak ditemukan di localStorage");
      }
    }
  },
  mounted() {
    this.loadUserData(); // Load data saat komponen pertama kali dipasang
  }
};
</script>
