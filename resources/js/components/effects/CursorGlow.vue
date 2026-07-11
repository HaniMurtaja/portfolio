<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

/**
 * A soft glow that trails the cursor. Disabled on touch devices and when the
 * user prefers reduced motion.
 */
const glow = ref<HTMLElement | null>(null);
const visible = ref(false);

const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;
const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let raf = 0;
const move = (e: MouseEvent) => {
    if (!glow.value) return;
    visible.value = true;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
        glow.value!.style.transform = `translate3d(${e.clientX - 200}px, ${e.clientY - 200}px, 0)`;
    });
};

onMounted(() => {
    if (isTouch || prefersReduced) return;
    window.addEventListener('mousemove', move, { passive: true });
});

onBeforeUnmount(() => {
    window.removeEventListener('mousemove', move);
    cancelAnimationFrame(raf);
});
</script>

<template>
    <div
        v-if="!isTouch && !prefersReduced"
        ref="glow"
        class="pointer-events-none fixed left-0 top-0 -z-[5] h-[400px] w-[400px] rounded-full transition-opacity duration-500"
        :class="visible ? 'opacity-100' : 'opacity-0'"
        style="background: radial-gradient(circle, rgba(129, 140, 248, 0.15) 0%, transparent 65%);"
        aria-hidden="true"
    ></div>
</template>
