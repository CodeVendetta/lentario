<template>
    <div class="flex flex-col justify-center items-center min-h-screen w-full font-poppins text-center px-6 text-[#1E1E1E]">
        <div class="mb-4">
            <h1 class="text-2xl font-bold">Daftar Akun</h1>
        </div>

        <form @submit.prevent="submitForm" class="flex flex-col gap-4 w-full max-w-xs">
            <div class="flex flex-col text-left gap-1">
                <label for="name" class="text-xs font-medium">Nama</label>
                <input v-model="name" type="text" id="name" placeholder="Masukkan Nama" class="border border-gray-300 px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <div class="flex flex-col text-left gap-1">
                <label for="nim" class="text-xs font-medium">NIM</label>
                <input v-model="nim" type="text" id="nim" placeholder="Masukkan NIM" class="border border-gray-300 px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <div class="flex flex-col text-left gap-1">
                <label class="text-xs">Program Studi</label>
                <div class="relative">
                    <select v-model="prodi" class="w-full border border-gray-300 px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-10">
                        <option value="" disabled selected>Pilih Program Studi</option>
                        <option value="Sistem Informasi">Sistem Informasi</option>
                        <option value="Teknologi Informasi">Teknologi Informasi</option>
                        <option value="Informatika">Informatika</option>
                    </select>
                    <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="flex flex-col text-left gap-1">
                <label for="email" class="text-xs font-medium">Email</label>
                <input v-model="email" type="email" id="email" placeholder="Masukkan email" class="border border-gray-300 px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <div class="flex flex-col text-left relative gap-1">
                <label class="block text-gray-700 text-xs">Kata Sandi</label>
                <input v-model="password" :type="showPassword ? 'text' : 'password'" class="w-full px-4 py-3 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Kata Sandi" />
                <button type="button" @click="togglePassword" class="absolute right-3 top-8 text-gray-500">
                    <Eye v-if="!showPassword" class="w-5 h-5" />
                    <EyeOff v-else class="w-5 h-5" />
                </button>
            </div>

            <div class="flex flex-col mb-2 text-left relative gap-1">
                <label class="block text-gray-700 text-xs">Konfirmasi Kata Sandi</label>
                <input v-model="password_confirmation" :type="showConfirmPassword ? 'text' : 'password'" class="w-full px-4 py-3 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Konfirmasi Kata Sandi" />
                <button type="button" @click="toggleConfirmPassword" class="absolute right-3 top-8 text-gray-500">
                    <Eye v-if="!showConfirmPassword" class="w-5 h-5" />
                    <EyeOff v-else class="w-5 h-5" />
                </button>
            </div>

            <button type="submit" class="bg-[#0C8CE9] text-white text-xs font-semibold py-3 rounded-lg hover:bg-[#0c8de9d1] transition">
                Daftar
            </button>

            <div v-if="message" 
                :class="message === 'Pendaftaran berhasil!' ? 'bg-green-500' : 'bg-red-500'"
                class="fixed bottom-5 right-5 text-white flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg">
                
                <span v-if="message === 'Pendaftaran berhasil!'" class="text-sm">🎉</span>
                <span class="font-semibold text-sm">{{ message }}</span>

                <button @click="message = ''" class="ml-auto">
                    <span class="text-white text-sm font-bold">✖</span>
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Eye, EyeOff } from 'lucide-vue-next';
import { validateForm } from '@/utils/validation';

const showPassword = ref(false);
const showConfirmPassword = ref(false);
const name = ref("");
const nim = ref("");
const prodi = ref("");
const email = ref("");
const password = ref("");
const password_confirmation = ref("");
const message = ref("");
const errors = ref({});

const togglePassword = () => {
    showPassword.value = !showPassword.value;
};

const toggleConfirmPassword = () => {
    showConfirmPassword.value = !showConfirmPassword.value;
};

const submitForm = async () => {
    const formData = {
        nama: name.value,
        nim: nim.value,
        option: prodi.value,
        email: email.value,
        password: password.value,
        confirmPassword: password_confirmation.value,
    };

    errors.value = validateForm(formData);

    if (Object.keys(errors.value).length > 0) {
        const errorMessages = Object.values(errors.value);
        let index = 0;

        const showNextError = () => {
            if (index < errorMessages.length) {
                message.value = errorMessages[index]; 
                index++;
                setTimeout(showNextError, 2000);
            } else {
                message.value = ""; 
            }
        };

        showNextError();
        return;
    }

    try {
        const response = await fetch("https://laravel-production-ea67.up.railway.app/api/user/register", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nama: name.value,
                nim: nim.value,
                prodi: prodi.value,
                email: email.value,
                password: password.value,
                password_confirmation: password_confirmation.value,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            message.value = data.message || "Terjadi kesalahan saat mendaftar.";
            return;
        }

        message.value = "Pendaftaran berhasil!";
    } catch (error) {
        message.value = "Gagal menghubungi server. Coba lagi nanti.";
    }
};

</script>

