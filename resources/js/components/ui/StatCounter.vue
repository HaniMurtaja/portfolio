<script setup lang="ts">
import { ref } from 'vue';
import { useCountUp } from '@/composables/useCountUp';

const props = defineProps<{ value: number; suffix: string; label: string }>();

const el = ref<HTMLElement | null>(null);
const { current } = useCountUp(el, props.value);
</script>

<template>
    <div ref="el" class="glass card-tilt rounded-2xl p-5 text-center">
        <p class="text-3xl font-extrabold text-white sm:text-4xl">
            <span class="text-gradient">{{ current }}{{ suffix }}</span>
        </p>
        <p class="mt-1 text-xs font-medium uppercase tracking-wide text-slate-400 sm:text-sm">
            {{ label }}
        </p>
    </div>
</template>
