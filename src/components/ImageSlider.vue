<template>
    <div class="relative w-full px-0 font-poppins">
        <div class="relative w-full h-screen overflow-hidden">
            <div v-for="(slide, index) in slides" :key="index" class="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out bg-pink-400" :class="{'opacity-100': currentIndex === index, 'opacity-0': currentIndex !== index }">
                <img :src="slide" class="absolute inset-0 min-w-full min-h-full object-cover scale-[120%]" alt="Slide">
            </div>
        </div>

        <div class="absolute inset-0 flex flex-col items-center justify-center z-10 px-24 text-center gap-5">
            <h1 class="text-white text-3xl font-bold leading-snug">Ada event? bingung izinnya kemana?</h1>
            <p class="text-white text-sm">Lentario adala solusi dari kamu yang membutukan ruagan untuk event</p>
        </div>

        <div class="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
            <button v-for="(slide, index) in slides" :key="'indicator-' + index" @click="goToSlide(index)" class="w-3 h-3 rounded-full transition-all duration-300" :class="{ 'bg-white': currentIndex === index, 'bg-gray-400': currentIndex !== index }"></button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import imgslide1 from '../assets/imgslide1.svg'; 

const slides = ref([imgslide1, imgslide1, imgslide1]);
const currentIndex = ref(0);
let interval = null;

const startAutoSlide = () => {
    interval = setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % slides.value.length;
    }, 3000);
};

const goToSlide = (index) => {
    currentIndex.value = index;
    restartAutoSlide();
};

const restartAutoSlide = () => {
    clearInterval(interval);
    startAutoSlide();
};

onMounted(startAutoSlide);

onUnmounted(() => clearInterval(interval));
</script>