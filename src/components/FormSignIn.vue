<template>
  <div class="flex flex-col justify-center items-center min-h-screen w-full font-poppins text-center px-6 text-[#1E1E1E]">
    <div class="mb-6">
      <h1 class="text-2xl font-bold">Masuk</h1>
    </div>

    <form @submit.prevent="handleLogin" class="flex flex-col gap-4 w-full max-w-xs">
      <div class="flex flex-col text-left gap-1">
        <label for="email" class="text-xs font-medium">Email</label>
        <input v-model="email" type="email" id="email" placeholder="Masukkan email" 
               class="border border-gray-300 px-4 py-3 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
      </div>

      <div class="flex flex-col text-left relative gap-1">
        <label class="block text-gray-700 text-xs">Kata Sandi</label>
        <input v-model="password" :type="showPassword ? 'text' : 'password'" 
               class="w-full px-4 py-3 text-xs border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
               placeholder="Kata Sandi" />
        <button type="button" @click="togglePassword" class="absolute right-3 top-8 text-gray-500">
          <Eye v-if="!showPassword" class="w-5 h-5" />
          <EyeOff v-else class="w-5 h-5" />
        </button>
      </div>

      <button type="submit" class="bg-[#0C8CE9] text-white text-xs font-semibold py-3 rounded-lg hover:bg-[#0c8de9d1] transition">
        Masuk
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Eye, EyeOff } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { apiUser } from '@/api.js';

const router = useRouter();
const showPassword = ref(false);
const email = ref('');
const password = ref('');

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};

const handleLogin = async () => {
  const payload = { email: email.value, password: password.value };

  try {
    const response = await apiUser.post('/login', payload);
    
    const data = response.data;
    if (response.status === 200) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.user['role']);
      localStorage.setItem('user', JSON.stringify({
        nama: data.user['nama'],
        nim: data.user['nim'],
        prodi: data.user['prodi'],
        email: data.user['email']
      }));
      
      if (data.role === 'user') {
        router.push('/berandaguest');
      } else {
        router.push('/dashboardadmin');
      }
    } else {
      alert(data.message || 'Login gagal');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Terjadi kesalahan, coba lagi nanti');
  }
};
</script>