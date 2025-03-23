<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-poppins">
    <div class="bg-white rounded-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
      <div class="flex justify-between items-center mb-7">
        <h3 class="font-semibold text-[#0C8CE9]">Detail Barang</h3>
        <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">&times;</button>
      </div>

      <div v-if="imageUrl" class="w-full">
        <img :src="imageUrl" class="w-full h-auto object-cover rounded-lg" alt="Gambar Ruangan">
      </div>
      <p v-else class="text-gray-500 text-sm text-center">Tidak ada gambar tersedia</p>
    </div>
  </div>
</template>

<script>
import { apiUser } from '@/api.js';
import { apiAdmin } from '@/api.js';

export default {
  props: {
    isOpen: Boolean,
    item: Number
  },
  data() {
    return {
      imageUrl: null
    };
  },
  watch: {
    isOpen(newVal) {
      if (newVal && this.item) {
        this.fetchRoomDetail();
      }
    }
  },
  methods: {
    async fetchRoomDetail() {
      try {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");
        const headers = token ? { Authorization: `Bearer ${token}`} : {};

        if (!token) {
            console.error("Token tidak ditemukan. Silakan login.");
            return;
        }

        if (role == 'user') {
          const response = await apiUser.get(`/barang/${this.item}`,{headers});
          
          const data = response.data;
          this.imageUrl = data.data.foto || null;
        } else if (role == 'admin') {
          const response = await apiAdmin.get(`/barang/${this.item}`,{headers});
          
          const data = response.data;
          this.imageUrl = data.data.foto || null;
        }
      } catch (error) {
        console.error("Error fetching room data:", error);
        this.imageUrl = null;
      }
    }
  }
};
</script>
