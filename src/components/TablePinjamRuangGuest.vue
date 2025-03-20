<template>
    <div class="relative w-full font-poppins justify-center bg-white px-20">
        <div class="w-full flex justify-between items-center mb-3 mt-1 pl-3">
            <div>
                <h3 class="text-lg font-semibold text-[#0C8CE9]">Data Pinjam Ruang</h3>
            </div>
            <div class="ml-3">
                <div class="w-full max-w-sm min-w-[200px] relative">
                    <button @click="showModalTambah = true" class="bg-[#0C8CE9] text-white py-2 px-6 text-xs rounded-3xl font-semibold hover:bg-[#316e99]">
                        Tambah Data
                    </button>
                </div>
            </div>
        </div>

        <div class="relative flex flex-col w-full h-full border-none bg-white">
            <table class="w-full text-left table-auto min-w-max">
                <thead>
                    <tr>
                        <th class="p-4 border-b border-slate-200">
                            <p class="text-sm font-normal leading-none text-[#787878]">
                                No
                            </p>
                        </th>
                        <th class="p-4 border-b border-slate-200">
                            <p class="text-sm font-normal leading-none text-[#787878]">
                                Nama Ruangan
                            </p>
                        </th>
                        <th class="p-4 border-b border-slate-200">
                            <p class="text-sm font-normal leading-none text-[#787878] text-center">
                                Tanggal Mulai
                            </p>
                        </th>
                        <th class="p-4 border-b border-slate-200 text-center">
                            <p class="text-sm font-normal leading-none text-[#787878]">
                                Tanggal Selesai
                            </p>
                        </th>
                        <th class="p-4 border-b border-slate-200 text-center">
                            <p class="text-sm font-normal leading-none text-[#787878]">
                                Status
                            </p>
                        </th>
                        <th class="p-4 border-b border-slate-200 text-center">
                            <p class="text-sm font-normal leading-none text-[#787878]">
                                Action
                            </p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in paginatedData" :key="item.id" class="hover:bg-slate-50 border-b border-slate-200 text-[#1E1E1E] text-sm">
                        <td class="p-4 py-5">
                            <p class="block">{{ index + 1 + (currentPage - 1) * perPage }}</p>
                        </td>
                        <td class="p-4 py-5">
                            <p class="">{{item.ruang['nama']}}</p>
                        </td>
                        <td class="p-4 py-5 text-center">
                            <p>{{ new Date(item.tgl_mulai).toISOString().split('T')[0] }}</p>
                        </td>
                        <td class="p-4 py-5 text-center">
                            <p>{{ new Date(item.tgl_selesai).toISOString().split('T')[0] }}</p>
                        </td>
                        <td class="p-4 py-5 text-center text-[#0C8CE9] max-w-24">
                            <p class="">{{item.status_peminjaman['nama']}}</p>
                        </td>
                        <td v-if="item.status_peminjaman['nama'] === 'Disetujui'" class="p-4 py-5 text-center">
                            <button class="bg-[#DC3545] text-white text-[8px] py-2 px-6 rounded-3xl">kembalikan</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        
            <div class="flex items-center px-4 py-3 justify-center my-8">
                <div class="flex space-x-1">
                    <button 
                        @click="prevPage" 
                        :disabled="currentPage === 1" 
                        :class="{
                            'px-3 py-1 min-w-9 min-h-9 text-sm font-normal bg-white hover:bg-slate-50 transition duration-200 ease': true,
                            'text-[#A0A8B5]': currentPage === 1, 
                            'text-[#23262A]': currentPage !== 1
                        }">
                        &lt; Prev
                    </button>
            
                    <button 
                        v-for="page in visiblePages" 
                        :key="page" 
                        @click="changePage(page)"  
                        :class="{
                            'px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-[#0C8CE9] bg-[#F1F9FF] border border-[#0C8CE9] rounded hover:bg-[#0C8CE9] hover:text-white transition duration-200 ease': currentPage === page, 
                            'px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-[#60656E] bg-[#F0F1F5] rounded hover:bg-[#0C8CE9] hover:text-white transition duration-200 ease': currentPage !== page
                        }">
                        {{ page }}
                    </button>
                    
                    <button v-if="totalPages > 5 && currentPage < totalPages - 2" disabled class="px-3 py-1 min-w-9 min-h-9 text-sm font-normal text-[#60656E] bg-[#F0F1F5] rounded hover:bg-[#0C8CE9] hover:text-white transition duration-200 ease">...</button>
                    
                    <button 
                        @click="nextPage" 
                        :disabled="currentPage === totalPages" 
                        :class="{
                            'px-3 py-1 min-w-9 min-h-9 text-sm font-normal bg-white hover:bg-slate-50 transition duration-200 ease': true,
                            'text-[#23262A]': currentPage === 1, 
                            'text-[#A0A8B5]': currentPage === totalPages, 
                            'text-[#23262A]': currentPage !== 1 && currentPage !== totalPages
                        }">
                        Next &gt;
                    </button>
                </div>
            </div>
        </div>
    </div>

    <ModalTambahData :isOpen="showModalTambah" @close="showModalTambah = false" />
  </template>
  
  <script>
  import axios from 'axios';
  import ModalTambahData from "./ModalTambahPinjamRuang.vue";

  export default {
    components: {
        ModalTambahData
    },
      data() {
          return {
            showModalTambah: false,
            items: [],
            currentPage: 1,
            perPage: 5,
            user: localStorage.getItem('user')
          };
      },
      computed: {
          totalPages() {
              return Math.ceil(this.items.length / this.perPage);
          },
          paginatedData() {
              const start = (this.currentPage - 1) * this.perPage;
              return this.items.slice(start, start + this.perPage);
          },
          visiblePages() {
              const total = this.totalPages;
              const current = this.currentPage;
              let pages = [];
              if (total <= 5) {
                  pages = Array.from({ length: total }, (_, i) => i + 1);
              } else if (current <= 3) {
                  pages = [1, 2, 3, 4, 5, "...", total];
              } else if (current >= total - 2) {
                  pages = [1, "...", total - 4, total - 3, total - 2, total - 1, total];
              } else {
                  pages = [1, "...", current - 1, current, current + 1, "...", total];
              }
              return pages;
          }
      },
      methods: {
        openDetailModal(item) {
            this.selectedItem = item;
            this.showModalDetail = true;
        },
        async fetchData() {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.error("Token tidak ditemukan!");
                    return;
                }

                const response = await axios.get("https://laravel-production-ea67.up.railway.app/api/user/history/ruang", {
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });

                console.log("Response dari API:", response.data);

                if (response.status === 200) {
                    this.items = Array.isArray(response.data) ? response.data : response.data.data || [];
                } else {
                    console.error("Gagal mendapatkan data, status:", response.status);
                }
            } catch (error) {
                console.error("Error fetching data:", error.response ? error.response.data : error.message);
            }
        },
        changePage(page) {
            if (page !== "...") {
                this.currentPage = page;
            }
        },
        prevPage() {
            if (this.currentPage > 1) this.currentPage--;
        },
        nextPage() {
            if (this.currentPage < this.totalPages) this.currentPage++;
        }
      },
      mounted() {
          this.fetchData();
      }
  };
  </script>