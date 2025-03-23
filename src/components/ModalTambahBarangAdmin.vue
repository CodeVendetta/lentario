<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-poppins">
      <div class="bg-white rounded-lg p-6 w-full max-w-md">
        <div class="flex justify-between items-center mb-7">
          <h3 class="font-semibold text-[#0C8CE9]">Tambah Data Barang</h3>
          <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
  
        <div class="mt-4 flex flex-col gap-1 text-[#1E1E1E]">
          <label class="text-xs">Nama Barang</label>
          <input v-model="barangName" type="text" placeholder="Masukkan nama barang" class="w-full border border-gray-300 px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div class="mt-4 flex flex-col gap-1 text-[#1E1E1E]">
          <label class="text-xs">Jumlah Barang</label>
          <input v-model="jumlahBarang" type="number" placeholder="Masukkan jumlah" class="w-full border border-gray-300 px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

        <div class="mt-4 flex flex-col gap-1 text-[#1E1E1E]">
          <label class="text-xs">Status</label>
          <div class="relative">
              <select v-model="status" class="w-full border border-gray-300 px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-10">
                  <option value="" disabled>Pilih Status</option>
                  <option v-for="option in statusOptions" :key="option.id" :value="option.id">
                    {{ option.nama }}
                  </option>
              </select>
              <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
              </div>
          </div>
        </div>

        <div class="mt-4 flex flex-col gap-1">
          <label for="file_input" class="text-xs font-medium text-gray-700">Foto Barang</label>
          <div class="relative w-full">
            <input id="file_input" type="file" class="hidden" @change="handleFileUpload">
            <label for="file_input" class="flex items-center w-full border border-gray-300 rounded-lg cursor-pointer bg-white transition">
              <span class="bg-[#DDE1EB] text-[#60656E] px-4 py-3 text-xs font-medium rounded-l-lg">Choose File</span>
              <span v-if="fileName" class="text-xs text-gray-600 px-4 py-2">File: {{ fileName }}</span>
              <span v-else class="text-xs text-gray-600 px-4 py-2">No file chosen</span>
            </label>
          </div>
        </div>

        <div class="mt-4 flex justify-end gap-2">
          <button @click="$emit('close')" class="bg-[#DC3545] text-white px-4 py-2 rounded-3xl hover:bg-[#c13140] text-xs">Cancel</button>
          <button @click="submitForm" class="bg-[#1EAE69] text-white px-4 py-2 rounded-3xl hover:bg-[#26a467] text-xs" :disabled="!barangName || !status">
            Simpan Perubahan
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
  import { ref, onMounted } from 'vue';
  import { apiAdmin } from '@/api.js';
  
  export default {
    props: { isOpen: Boolean },
    setup(props, { emit }) {
      const barangName = ref("");
      const jumlahBarang = ref("");
      const status = ref("");
      const statusOptions = ref([]);
      const file = ref(null);
      const fileName = ref("");
      const message = ref("");
      const messageType = ref("");
  
      const fetchStatus = async () => {
        try {
          const token = localStorage.getItem("token");
          if (!token) {
            console.error("Token tidak ditemukan. Harap login kembali.");
            return;
          }
          const response = await apiAdmin.get('/status', {
            headers: { Authorization: `Bearer ${token}` }
          });
          statusOptions.value = response.data.status_barang;
        } catch (error) {
          console.error("Error fetching status:", error.response || error.message);
        }
      };
  
      const handleFileUpload = (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
          if (selectedFile.size > 2 * 1024 * 1024) {
            message.value = "Ukuran file maksimal 2MB!";
            messageType.value = "error";
            file.value = null;
            fileName.value = "";
          } else {
            file.value = selectedFile;
            fileName.value = selectedFile.name;
          }
        }
      };
  
      const submitForm = async () => {
        const formData = new FormData();
        formData.append("nama", barangName.value);
        formData.append("status", status.value);
        formData.append("stok", jumlahBarang.value);
        if (file.value) {
          formData.append("foto", file.value);
        }
        try {
          const token = localStorage.getItem("token");
          await apiAdmin.post("/barang/store", formData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          });
          message.value = "Data barang berhasil ditambahkan!";
          messageType.value = "success";

          setTimeout(() => {
            emit("close");
          }, 2000);
          window.location.reload();
        } catch (error) {
          message.value = error.response?.data?.message || "Gagal menambahkan barang.";
          messageType.value = "error";
        }
      };
  
      onMounted(fetchStatus);
  
      return { barangName, status, jumlahBarang, statusOptions, file, fileName, message, messageType, handleFileUpload, submitForm };
    },
  };
  </script>