<script setup lang="ts">
defineProps<{
    eyebrow: string;
    title: string;
    subtitle?: string;
}>();
</script>

<template>
    <div class="mx-auto mb-14 max-w-2xl text-center" data-aos="fade-up">
        <span
            class="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-300"
        >
            <span class="h-1.5 w-1.5 rounded-full bg-brand-400"></span>
            {{ eyebrow }}
        </span>
        <h2 class="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {{ title }}
        </h2>
        <p v-if="subtitle" class="mt-4 text-lg leading-relaxed text-slate-400">
            {{ subtitle }}
        </p>
    </div>
</template>
