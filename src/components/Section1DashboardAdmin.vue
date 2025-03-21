<template>
    <div class="flex flex-row py-24 justify-center max-h-10 w-full items-center gap-6 px-10">
        <div class="bg-white flex flex-row gap-3 px-4 py-6 rounded-2xl min-w-[230px]">
            <div class="bg-[#CEE8FB] p-4 rounded-full items-center">
                <img src="../assets/iconakunterdaftar.svg" alt="" width="30" />
            </div>
            <div class="flex flex-col justify-center">
                <p class="text-[#0C8CE9]">Akun Terdaftar</p>
                <p class="text-[#1E1E1E] font-semibold text-xl">{{ akunTerdaftar }}</p>
            </div>
        </div>
        <div class="bg-white flex flex-row gap-3 px-4 py-6 rounded-2xl min-w-[230px]">
            <div class="bg-[#CEE8FB] p-4 rounded-full items-center">
                <img src="../assets/icondataruangbarang.svg" alt="" width="30" />
            </div>
            <div class="flex flex-col justify-center">
                <p class="text-[#0C8CE9]">Data Barang</p>
                <p class="text-[#1E1E1E] font-semibold text-xl">{{ dataBarang }}</p>
            </div>
        </div>
        <div class="bg-white flex flex-row gap-3 px-4 py-6 rounded-2xl min-w-[230px]">
            <div class="bg-[#CEE8FB] p-4 rounded-full items-center">
                <img src="../assets/icondataruangbarang.svg" alt="" width="30" />
            </div>
            <div class="flex flex-col justify-center">
                <p class="text-[#0C8CE9]">Data Ruang</p>
                <p class="text-[#1E1E1E] font-semibold text-xl">{{ dataRuang }}</p>
            </div>
        </div>
        <div class="bg-white flex flex-row gap-3 px-4 py-6 rounded-2xl min-w-[230px]">
            <div class="bg-[#CEE8FB] p-4 rounded-full items-center">
                <img src="../assets/icondataterpinjam.svg" alt="" width="30" />
            </div>
            <div class="flex flex-col justify-center">
                <p class="text-[#0C8CE9]">Data Terpinjam</p>
                <p class="text-[#1E1E1E] font-semibold text-xl">{{ dataTerpinjam }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            akunTerdaftar: 0,
            dataBarang: 0,
            dataRuang: 0,
            dataTerpinjam: 0,
        };
    },
    async mounted() {
        try {
            const token = localStorage.getItem("token");
            const headers = token ? { Authorization: `Bearer ${token}` } : {};
            
            const [userRes, barangRes, ruangRes, terpinjamRes] = await Promise.all([
                axios.get("https://laravel-production-ea67.up.railway.app/api/admin/user/count", { headers }),
                axios.get("https://laravel-production-ea67.up.railway.app/api/admin/barang/count", { headers }),
                axios.get("https://laravel-production-ea67.up.railway.app/api/admin/ruang/count", { headers }),
                axios.get("https://laravel-production-ea67.up.railway.app/api/admin/dashboard/total-dipinjam", { headers })
            ]);
            
            this.akunTerdaftar = userRes.data.total_users;
            this.dataBarang = barangRes.data.total_barang;
            this.dataRuang = ruangRes.data.total_ruang;
            this.dataTerpinjam = terpinjamRes.data.total_semua;
        } catch (error) {
            console.error("Error fetching dashboard data:", error);
        }
    }
};
</script>