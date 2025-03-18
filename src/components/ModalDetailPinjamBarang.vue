<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-poppins">
      <div class="bg-white rounded-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
        <div class="flex justify-between items-center mb-7">
          <h3 class="font-semibold text-[#0C8CE9]">Form Detail Peminjaman Barang</h3>
          <button @click="$emit('close')" class="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
  
        <!-- Carousel -->
        <div id="default-carousel" class="relative w-full" data-carousel="slide">
          <div class="relative h-full overflow-hidden rounded-lg">
            <div class="duration-700 ease-in-out" v-for="(image, index) in images" :key="index" :class="{'hidden': currentSlide !== index}">
              <img :src="image" class="w-full h-full object-cover" alt="...">
              <h1 class="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold text-center">Camera Cannon</h1>
            </div>
          </div>
  
          <!-- Navigation Buttons -->
          <button @click="prevSlide" class="absolute top-1/2 start-0 transform -translate-y-1/2 px-2 cursor-pointer bg-white mx-2 rounded-full text-[#0C8CE9]">
            &#10094;
          </button>
          <button @click="nextSlide" class="absolute top-1/2 end-0 transform -translate-y-1/2 px-2 cursor-pointer bg-white mx-2 rounded-full text-[#0C8CE9]">
            &#10095;
          </button>
        </div>
        
        <!-- Form Inputs -->
        <div class="mt-4 flex flex-col gap-1 text-[#1E1E1E]">
          <label class="text-xs">Tanggal Mulai</label>
          <input v-model="startDate" type="date" class="w-full border border-gray-300 px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" @change="validateDates">
        </div>
        
        <div class="mt-4 flex flex-col gap-1 text-[#1E1E1E]">
          <label class="text-xs">Tanggal Selesai</label>
          <input v-model="endDate" type="date" class="w-full border px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2" :class="dateError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'" @change="validateDates">
          <p v-if="dateError" class="text-red-500 text-xs mt-1 ml-2">{{ dateError }}</p>
        </div>
        
        <!-- Buttons -->
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
        startDate: "",
        endDate: "",
        dateError: "",
        currentSlide: 0,
        images: [
          require("@/assets/imgmodalpinjam.svg"),
          require("@/assets/imgmodalpinjam.svg"),
          require("@/assets/imgmodalpinjam.svg")
        ]
      };
    },
    methods: {
      validateDates() {
        if (this.startDate && this.endDate) {
          this.dateError = this.startDate > this.endDate ? "Tanggal mulai harus sebelum tanggal selesai!" : "";
        }
      },
      saveData() {
        if (!this.startDate || !this.endDate) {
          alert("Harap isi semua data!");
          return;
        }
        if (this.dateError) {
          alert(this.dateError);
          return;
        }
        alert("Data berhasil disimpan!");
      },
      prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
      },
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.images.length;
      }
    }
  };
  </script>
  