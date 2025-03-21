<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-poppins">
    <div class="bg-white rounded-lg p-6 w-full max-w-md">
      <div class="flex justify-between items-center mb-7">
        <h3 class="font-semibold text-[#0C8CE9]">Form Peminjaman Ruangan</h3>
        <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">&times;</button>
      </div>

      <div class="mt-4 flex flex-col gap-1 text-[#1E1E1E]">
        <label class="text-xs">Nama Ruangan</label>
        <div class="relative">
          <select v-model="roomName" class="w-full border border-gray-300 px-4 py-3 text-xs rounded-lg appearance-none pr-10">
            <option value="" disabled>Pilih ruangan</option>
            <option v-for="room in rooms" :key="room.id" :value="room.id">
              {{ room.nama }}
            </option>
          </select>
          <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
          </div>
        </div>
      </div>

      <div class="mt-4 flex flex-col gap-1 text-[#1E1E1E]">
        <label class="text-xs">Email Pengirim</label>
        <input v-model="email" type="email" placeholder="Masukkan email" class="w-full border border-gray-300 px-4 py-3 text-xs rounded-lg">
      </div>

      <div class="mt-4 flex flex-col gap-1 text-[#1E1E1E]">
        <label class="text-xs">Tanggal Mulai</label>
        <input v-model="startDate" type="date" class="w-full border border-gray-300 px-4 py-3 text-xs rounded-lg">
      </div>

      <div class="mt-4 flex flex-col gap-1 text-[#1E1E1E]">
        <label class="text-xs">Tanggal Selesai</label>
        <input v-model="endDate" type="date" class="w-full border border-gray-300 px-4 py-3 text-xs rounded-lg">
      </div>

      <div class="mt-4 flex justify-end">
        <button @click="submitForm" class="bg-[#0C8CE9] text-white px-4 py-2 rounded hover:bg-[#317db4] text-xs">
          Ajukan
        </button>
      </div>

      <div v-if="message" :class="messageType === 'success' ? 'bg-green-500' : 'bg-red-500'" 
        class="fixed bottom-5 right-5 text-white flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg">
        <span v-if="messageType === 'success'" class="text-sm">🎉</span>
        <span class="font-semibold text-sm">{{ message }}</span>
        <button @click="message = ''" class="ml-auto text-white text-sm font-bold">✖</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { validateForm } from '@/utils/validation';
import axios from 'axios';

export default {
props: {
  isOpen: Boolean, 
},
data() {
    return {
      rooms: [],
    };
  },
mounted(){
  this.fetchRooms();
},
methods: {
  async fetchRooms() {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://laravel-production-ea67.up.railway.app/api/user/ruang",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      this.rooms = response.data.data;
    } catch (error) {
      console.error("Gagal mengambil data ruangan:", error);
    }
  }
},
setup(props, { emit }) {
  const roomName = ref("");
  const email = ref("");
  const startDate = ref("");
  const endDate = ref("");
  const message = ref("");
  const messageType = ref("");
  const errors = ref({});

  const submitForm = async () => {
    const formData = {
      ruang_id: roomName.value,
      email: email.value,
      tgl_mulai: startDate.value,
      tgl_selesai: endDate.value,
    };

    errors.value = validateForm(formData);

    if (Object.keys(errors.value).length > 0) {
      message.value = Object.values(errors.value)[0];
      messageType.value = "error";
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "https://laravel-production-ea67.up.railway.app/api/user/pinjam-ruang",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        message.value = data.message || "Terjadi kesalahan!";
        messageType.value = "error";
        return;
      }

      message.value = "Peminjaman berhasil!";
      messageType.value = "success";

      setTimeout(() => {
          emit('close');
          setTimeout(() => {
            window.location.reload();
          }, 300);
        }, 1000);
      
    } catch (error) {
      message.value = "Gagal menghubungi server.";
      messageType.value = "error";
    }
  };

  return {
    roomName,
    email,
    startDate,
    endDate,
    message,
    messageType,
    errors,
    submitForm,
  };
},
};
</script>