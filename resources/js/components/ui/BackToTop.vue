<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { ArrowUp } from 'lucide-vue-next';

const visible = ref(false);
const progress = ref(0);

const onScroll = () => {
    const scrolled = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    progress.value = height > 0 ? Math.min(scrolled / height, 1) : 0;
    visible.value = scrolled > 600;
};

const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }));
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));
</script>

<template>
    <transition name="fade-scale">
        <button
            v-show="visible"
            type="button"
            aria-label="Back to top"
            class="glass-strong group fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg shadow-black/40 transition hover:scale-110"
            @click="toTop"
        >
            <!-- Circular progress ring -->
            <svg class="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 48 48">
                <circle cx="24" cy="24" r="21" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="2" />
                <circle
                    cx="24" cy="24" r="21" fill="none" stroke="url(#btt-grad)" stroke-width="2"
                    stroke-linecap="round"
                    :stroke-dasharray="2 * Math.PI * 21"
                    :stroke-dashoffset="2 * Math.PI * 21 * (1 - progress)"
                />
                <defs>
                    <linearGradient id="btt-grad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stop-color="#818cf8" />
                        <stop offset="100%" stop-color="#22d3ee" />
                    </linearGradient>
                </defs>
            </svg>
            <ArrowUp :size="18" class="transition-transform group-hover:-translate-y-0.5" />
        </button>
    </transition>
</template>

<style scoped>
.fade-scale-enter-active,
.fade-scale-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
    opacity: 0;
    transform: scale(0.7);
}
</style>
