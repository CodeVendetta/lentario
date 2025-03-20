<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-poppins">
      <div class="bg-white rounded-lg p-6 w-full max-w-md">
        <div class="flex justify-between items-center mb-7">
          <h3 class="font-semibold text-[#0C8CE9]">Tambah Data Ruang</h3>
          <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
  
        <div class="mt-4 flex flex-col gap-1 text-[#1E1E1E]">
          <label class="text-xs">Nama Barang</label>
          <input v-model="roomName" type="text" placeholder="Masukkan nama ruangan" class="w-full border border-gray-300 px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div class="mt-4 flex flex-col gap-1 text-[#1E1E1E]">
          <label class="text-xs">Status</label>
          <div class="relative">
            <select v-model="status" class="w-full border border-gray-300 px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-10">
              <option value="" disabled>Pilih Status</option>
              <option value="Tersedia">Tersedia</option>
              <option value="Tidak Tersedia">Tidak Tersedia</option>
            </select>
            <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>

        <div class="mt-4 flex flex-col gap-1">
            <label for="file_input" class="text-xs font-medium text-gray-700">Foto Ruang</label>
            <div class="relative w-full">
                <input id="file_input" type="file" class="hidden" onchange="updateFileName(this)">
                <label for="file_input" class="flex items-center w-full border border-gray-300 rounded-lg cursor-pointer bg-white transition">
                    <span class="bg-[#DDE1EB] text-[#60656E] px-4 py-3 text-xs font-medium rounded-l-lg">Choose File</span>
                    <span id="file_name" class="px-4 py-2 text-xs text-gray-600">No file chosen</span>
                </label>
            </div>
        </div>

        <div class="mt-4 flex justify-end gap-2">
            <button @click="$emit('close')" class="bg-[#DC3545] text-white px-4 py-2 rounded-3xl hover:bg-[#c13140] text-xs">Cancel</button>
            <button @click="saveData" class="bg-[#1EAE69] text-white px-4 py-2 rounded-3xl hover:bg-[#26a467] text-xs disabled:bg-[#73c59d] disabled:cursor-not-allowed" disabled>Simpan Perubahan</button>
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
        roomName: "",
        status: ""
      };
    }
  };
  </script>
  