<template>
    <div class="relative w-full font-poppins justify-center px-14 pt-14">
        <div class="relative flex flex-col w-full h-full border-none bg-white px-1 py-2 rounded-2xl">
            <div class="w-full flex justify-between items-center mb-3 mt-1 pl-3">
                <div>
                    <h3 class="text-lg font-semibold text-[#0C8CE9]">Data Barang</h3>
                </div>
            </div>

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
                                Nama Peminjam
                            </p>
                        </th>
                        <th class="p-4 border-b border-slate-200">
                            <p class="text-sm font-normal leading-none text-[#787878]">
                                Nama Barang
                            </p>
                        </th>
                        <th class="p-4 border-b border-slate-200">
                            <p class="text-sm font-normal leading-none text-[#787878]">
                                Mulai
                            </p>
                        </th>
                        <th class="p-4 border-b border-slate-200">
                            <p class="text-sm font-normal leading-none text-[#787878]">
                                Selesai
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
                            <p class="block">{{index+1}}</p>
                        </td>
                        <td class="p-4 py-5">
                            <p class="">{{item.user}}</p>
                        </td>
                        <td class="p-4 py-5">
                            <p class="">{{item.barang}}</p>
                        </td>
                        <td class="p-4 py-5">
                            <p class="">{{ new Date(item.tgl_mulai).toISOString().split('T')[0] }}</p>
                        </td>
                        <td class="p-4 py-5">
                            <p class="">{{ new Date(item.tgl_selesai).toISOString().split('T')[0] }}</p>
                        </td>
                        <td class="p-4 py-5 text-center text-[#0C8CE9] max-w-24">
                            <p class="">{{item.status}}</p>
                        </td>
                        <td class="p-4 py-5 text-center justify-center">
                            <button v-if="item.status == 'Menunggu Persetujuan' || item.status == 'Menunggu Konfirmasi Pengembalian'">
                                <img src="../assets/icontolak.svg" alt="" width="35">
                            </button>
                            <button v-if="item.status == 'Menunggu Persetujuan' || item.status == 'Menunggu Konfirmasi Pengembalian'">
                                <img src="../assets/iconsetuju.svg" alt="" width="25" class="pb-[5px]">
                            </button>
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
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
      data() {
          return {
              barangs: [],
              flattenedData: [],
              currentPage: 1,
              perPage: 5
          };
      },
      computed: {
          totalPages() {
              return Math.ceil(this.flattenedData.length / this.perPage);
          },
          paginatedData() {
              const start = (this.currentPage - 1) * this.perPage;
              return this.flattenedData.slice(start, start + this.perPage);
          },
          visiblePages() {
              const total = this.totalPages;
              const current = this.currentPage;
              let pages = [];
  
              if (total <= 5) {
                  return Array.from({ length: total }, (_, i) => i + 1);
              }
  
              if (current <= 3) {
                  pages = [1, 2, 3, 4, 5];
              } else if (current >= total - 2) {
                  pages = [total - 4, total - 3, total - 2, total - 1, total];
              } else {
                  pages = [current - 2, current - 1, current, current + 1, current + 2];
              }
  
              return pages;
          }
      },
      methods: {
          async fetchData() {
              try {
                  const token = localStorage.getItem("token");
  
                  if (!token) {
                      console.error("Token tidak ditemukan. Silakan login.");
                      return;
                  }
  
                  const response = await axios.get("https://laravel-production-ea67.up.railway.app/api/admin/barang-dipinjam", {
                      headers: {
                          Authorization: `Bearer ${token}`,
                          Accept: "application/json",
                      },
                  });
  
                  if (response.data && response.data.data) {
                      this.barangs = response.data.data;
                      this.flattenData();
                      console.log(this.barangs);
                  } else {
                      console.error("Format respons API tidak sesuai:", response.data);
                  }
              } catch (error) {
                  console.error("Gagal mengambil data:", error);
  
                  if (error.response) {
                      console.error("Respons API:", error.response.data);
                  }
  
                  if (error.response && error.response.status === 401) {
                      console.error("Token tidak valid atau kadaluarsa. Silakan login kembali.");
                  }
              }
          },
          flattenData() {
            this.barangs.forEach(item => {
                if (item.detail && Array.isArray(item.detail)) {
                    item.detail.forEach(detail => {
                        this.flattenedData.push({
                            id: detail.id,
                            user: item.user.nama,
                            status: detail.status_peminjaman,
                            barang: detail.nama_barang, 
                            tgl_mulai: detail.tgl_mulai,
                            tgl_selesai: detail.tgl_selesai
                        });
                    });
                }
            });
            console.log(this.flattenedData);
            },
          changePage(page) {
              this.currentPage = page;
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
  