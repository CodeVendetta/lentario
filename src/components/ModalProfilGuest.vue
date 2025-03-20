<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-poppins">
    <div class="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
      <div class="flex justify-between items-center mb-7">
        <h3 class="font-semibold text-[#0C8CE9]">Profil</h3>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-700">&times;</button>
      </div>

      <div class="mt-4 flex flex-col gap-1 text-[#1E1E1E]">
        <label class="text-xs">Username</label>
        <input v-model="username" type="text" placeholder="iniyusernem"
          class="w-full border border-gray-300 px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" disabled>
      </div>

      <div class="mt-4 flex flex-col gap-1 text-[#1E1E1E]">
        <label class="text-xs">Nama</label>
        <input v-model="nama" type="text" placeholder="ininama"
          class="w-full border border-gray-300 px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" disabled>
      </div>

      <div class="mt-4 flex flex-col gap-1 text-[#1E1E1E]">
        <label class="text-xs">Email</label>
        <input v-model="email" type="email" placeholder="iniemail"
          class="w-full border border-gray-300 px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" disabled>
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
      username: "iniyusernem",
      nama: "ininama",
      email: "iniemail"
    };
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>
