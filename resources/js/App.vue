<script setup lang="ts">
import TheNavbar from '@/components/layout/TheNavbar.vue';
import TheFooter from '@/components/layout/TheFooter.vue';
import AnimatedBackground from '@/components/effects/AnimatedBackground.vue';
import CursorGlow from '@/components/effects/CursorGlow.vue';
import ParticleField from '@/components/effects/ParticleField.vue';
import BackToTop from '@/components/ui/BackToTop.vue';
</script>

<template>
    <div class="relative min-h-screen overflow-x-clip">
        <AnimatedBackground />
        <ParticleField />
        <CursorGlow />

        <TheNavbar />

        <main>
            <router-view v-slot="{ Component }">
                <transition name="page" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
        </main>

        <TheFooter />
        <BackToTop />
    </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
    transition: opacity 0.4s ease, transform 0.4s ease;
}
.page-enter-from {
    opacity: 0;
    transform: translateY(12px);
}
.page-leave-to {
    opacity: 0;
    transform: translateY(-12px);
}
</style>
