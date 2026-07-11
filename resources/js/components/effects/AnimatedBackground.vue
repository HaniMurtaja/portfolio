<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

/**
 * Fixed, full-viewport animated backdrop: a slowly panning gradient, floating
 * colour blobs and a subtle grid — all with light mouse parallax.
 */
const root = ref<HTMLElement | null>(null);

const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let raf = 0;
const onMouseMove = (e: MouseEvent) => {
    if (!root.value || prefersReduced) return;
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        root.value?.style.setProperty('--px', `${x * 18}px`);
        root.value?.style.setProperty('--py', `${y * 18}px`);
    });
};

onMounted(() => window.addEventListener('mousemove', onMouseMove, { passive: true }));
onBeforeUnmount(() => {
    window.removeEventListener('mousemove', onMouseMove);
    cancelAnimationFrame(raf);
});
</script>

<template>
    <div ref="root" class="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0a0a0f]">
        <!-- Panning base gradient -->
        <div
            class="absolute inset-0 opacity-70"
            style="
                background:
                    radial-gradient(1200px 600px at 15% 10%, rgba(99, 102, 241, 0.18), transparent 60%),
                    radial-gradient(1000px 700px at 85% 20%, rgba(168, 85, 247, 0.16), transparent 55%),
                    radial-gradient(900px 800px at 50% 100%, rgba(6, 182, 212, 0.12), transparent 60%);
            "
        ></div>

        <!-- Floating blobs -->
        <div
            class="animate-blob absolute -top-32 -left-24 h-[32rem] w-[32rem] rounded-full bg-indigo-600/25 blur-[120px]"
            style="transform: translate(var(--px, 0), var(--py, 0));"
        ></div>
        <div
            class="animate-blob absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-600/20 blur-[120px]"
            style="animation-delay: -6s; transform: translate(calc(var(--px, 0) * -1), var(--py, 0));"
        ></div>
        <div
            class="animate-blob absolute -bottom-40 left-1/3 h-[30rem] w-[30rem] rounded-full bg-cyan-500/15 blur-[130px]"
            style="animation-delay: -12s;"
        ></div>

        <!-- Grid overlay -->
        <div
            class="absolute inset-0 opacity-[0.15]"
            style="
                background-image:
                    linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
                background-size: 56px 56px;
                mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%);
            "
        ></div>

        <!-- Vignette -->
        <div class="absolute inset-0" style="background: radial-gradient(120% 120% at 50% 0%, transparent 55%, #0a0a0f 100%);"></div>
    </div>
</template>
