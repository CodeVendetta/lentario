<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-poppins">
      <div class="bg-white rounded-lg p-6 w-full max-w-md">
        <div class="flex justify-between items-center mb-7">
          <h3 class="font-semibold text-[#0C8CE9]">Form Peminjaman Ruangan</h3>
          <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
  
        <div class="mt-4 flex flex-col gap-1 text-[#1E1E1E]">
          <label class="text-xs">Nama Ruangan</label>
          <select v-model="roomName" class="w-full border border-gray-300 px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="" disabled>Pilih ruangan</option>
            <option value="Ruang A">Ruang A</option>
            <option value="Ruang B">Ruang B</option>
            <option value="Ruang C">Ruang C</option>
          </select>
        </div>
  
        <div class="mt-4 flex flex-col gap-1 text-[#1E1E1E]">
          <label class="text-xs">Email Pengirim</label>
          <input v-model="email" type="email" placeholder="Masukkan email" class="w-full border border-gray-300 px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
  
        <div class="mt-4 flex flex-col gap-1 text-[#1E1E1E]">
          <label class="text-xs">Tanggal Mulai</label>
          <input v-model="startDate" type="date" class="w-full border border-gray-300 px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" @change="validateDates">
        </div>
  
        <div class="mt-4 flex flex-col gap-1 text-[#1E1E1E]">
            <label class="text-xs">Tanggal Selesai</label>
            <input v-model="endDate" type="date" class="w-full border px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2" :class="dateError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'" @change="validateDates">
            <p v-if="dateError" class="text-red-500 text-xs mt-1 ml-2">{{ dateError }}</p>
        </div>
  
        <div class="mt-4 flex justify-end">
          <button @click="saveData" class="bg-[#0C8CE9] text-white px-4 py-2 rounded hover:bg-[#317db4] text-xs">
            Ajukan
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: Boolean, // Diterima dari parent
    },
    data() {
      return {
        roomName: "",
        email: "",
        startDate: "",
        endDate: "",
        dateError: ""
      };
    },
    methods: {
      validateDates() {
        if (this.startDate && this.endDate) {
          if (this.startDate > this.endDate) {
            this.dateError = "Tanggal mulai harus sebelum tanggal selesai!";
          } else {
            this.dateError = "";
          }
        }
      },
      saveData() {
        if (!this.roomName || !this.email || !this.startDate || !this.endDate) {
          alert("Harap isi semua data!");
          return;
        }
        if (this.dateError) {
          alert(this.dateError);
          return;
        }
        alert("Data berhasil disimpan!");
      }
    }
  };
  </script>
  