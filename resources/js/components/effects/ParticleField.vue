<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

/**
 * Lightweight canvas particle field with connecting lines. Sized to the
 * viewport, throttled via requestAnimationFrame, and skipped for reduced motion.
 */
const canvas = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;
let raf = 0;
let particles: { x: number; y: number; vx: number; vy: number }[] = [];

const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const resize = () => {
    if (!canvas.value) return;
    canvas.value.width = window.innerWidth;
    canvas.value.height = window.innerHeight;
    const count = Math.min(70, Math.floor(window.innerWidth / 22));
    particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
    }));
};

const draw = () => {
    if (!ctx || !canvas.value) return;
    const { width, height } = canvas.value;
    ctx.clearRect(0, 0, width, height);

    for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(165, 180, 252, 0.5)';
        ctx.fill();
    }

    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const a = particles[i];
            const b = particles[j];
            const dist = Math.hypot(a.x - b.x, a.y - b.y);
            if (dist < 120) {
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.strokeStyle = `rgba(129, 140, 248, ${0.12 * (1 - dist / 120)})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }

    raf = requestAnimationFrame(draw);
};

onMounted(() => {
    if (prefersReduced || !canvas.value) return;
    ctx = canvas.value.getContext('2d');
    resize();
    window.addEventListener('resize', resize);
    raf = requestAnimationFrame(draw);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', resize);
    cancelAnimationFrame(raf);
});
</script>

<template>
    <canvas
        v-if="!prefersReduced"
        ref="canvas"
        class="pointer-events-none fixed inset-0 -z-[8] opacity-60"
        aria-hidden="true"
    ></canvas>
</template>
