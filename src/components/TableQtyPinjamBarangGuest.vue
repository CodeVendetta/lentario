<template>
    <div class="relative w-full font-poppins justify-center bg-white px-20 pt-10">
        <div class="w-full flex justify-center items-center mb-4 mt-1 pl-3">
            <div>
                <h3 class="text-lg font-semibold text-[#0C8CE9]">Data Pinjam Barang</h3>
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
                            <p class="text-sm font-normal leading-none text-[#787878]">
                                Jumlah
                            </p>
                        </th>
                        <th class="p-4 border-b border-slate-200 text-center">
                            <p class="text-sm font-normal leading-none text-[#787878]">
                                Status
                            </p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in paginatedData" :key="item.id" class="hover:bg-slate-50 border-b border-slate-200 text-[#1E1E1E] text-sm">
                        <td class="p-4 py-5">
                            <p class="block">{{item.no}}</p>
                        </td>
                        <td class="p-4 py-5">
                            <p class="">{{item.ruangan}}</p>
                        </td>
                        <td class="p-4 py-5">
                            <p class="">{{item.jumlah}}</p>
                        </td>
                        <td class="p-4 py-5 text-center text-[#0C8CE9] max-w-24">
                            <p class="">{{item.status}}</p>
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
  export default {
    data() {
        function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        
        return {
            items: Array.from({ length: 50 }, (_, i) => {
                const statuses = ["Tersedia", "Tidak Tersedia"];
                const status = statuses[Math.floor(Math.random() * statuses.length)];
                return {
                    no: i + 1,
                    ruangan: `Barang ${i + 1}`,
                    jumlah: getRandom(1, 3),
                    status
                };
            }),
            currentPage: 1,
            perPage: 5
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
        changePage(page) {
            this.currentPage = page;
        },
        prevPage() {
            if (this.currentPage > 1) this.currentPage--;
        },
        nextPage() {
            if (this.currentPage < this.totalPages) this.currentPage++;
        }
    }
  };
  </script>
  