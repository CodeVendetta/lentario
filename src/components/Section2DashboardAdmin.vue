<template>
    <div class="flex flex-row justify-center w-full px-10 gap-8 mb-10">
        <div class="bg-white w-3/4 px-4 pt-5 pb-10 flex flex-col rounded-2xl">
            <h1 class="text-[#0C8CE9] font-semibold text-xl mb-5">Peminjaman Terbaru</h1>
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
                                    Nama
                                </p>
                            </th>
                            <th class="p-4 border-b border-slate-200">
                                <p class="text-sm font-normal leading-none text-[#787878] text-center">
                                    Barang Dipinjam
                                </p>
                            </th>
                            <th class="p-4 border-b border-slate-200 text-center">
                                <p class="text-sm font-normal leading-none text-[#787878]">
                                    Ruang Dipinjam
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
                                <p class="">{{item.nama}}</p>
                            </td>
                            <td class="p-4 py-5 text-center">
                                <p class="">{{item.barangpinjam}}</p>
                            </td>
                            <td class="p-4 py-5 text-center">
                                <p class="">{{item.ruangpinjam}}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="w-1/4">
            <h1 class="text-[#0C8CE9] font-semibold text-xl mb-3">Pengguna Baru</h1>
            <div class="bg-white rounded-2xl px-5 pb-5">
                <div v-for="(user, index) in users" :key="index" class="flex flex-row gap-2 items-center pt-5">
                    <div class="bg-[#0C8CE9] w-10 h-10 rounded-full"></div>
                    <div class="flex flex-col">
                        <h5 class="text-xs text-[#1E1E1E]">{{ user.name }}</h5>
                        <p class="text-xs text-[#0C8CE9]">{{ user.email }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    data() {
        return {
            items: Array.from({ length: 5 }, (_, i) => {
                const barangpinjam = Math.floor(Math.random() * 3) + 1;
                const ruangpinjam = Math.floor(Math.random() * 3) + 1;
                return {
                    no: i + 1,
                    nama: `Orang ke ${i + 1}`,
                    barangpinjam,
                    ruangpinjam
                };
            }),
            users: [
                { name: "Ini Nama", email: "iniemail@mail.com" },
                { name: "Ini Nama", email: "iniemail@mail.com" },
                { name: "Ini Nama", email: "iniemail@mail.com" },
                { name: "Ini Nama", email: "iniemail@mail.com" },
                { name: "Ini Nama", email: "iniemail@mail.com" },
                { name: "Ini Nama", email: "iniemail@mail.com" },
                { name: "Ini Nama", email: "iniemail@mail.com" },
            ],
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