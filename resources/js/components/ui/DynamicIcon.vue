<script setup lang="ts">
import { computed } from 'vue';
import type { FunctionalComponent } from 'vue';
import {
    Server, Palette, FlaskConical, Globe, Webhook, Gauge,
    Database, Plug, Lightbulb, Github, Linkedin, Mail, Phone, Circle,
} from 'lucide-vue-next';

/**
 * Renders a Lucide icon by its string name (as stored in the content data).
 * Only the icons referenced by the content are registered here so the bundle
 * stays lean (tree-shaken instead of importing the whole Lucide set).
 */
const registry: Record<string, FunctionalComponent> = {
    Server, Palette, FlaskConical, Globe, Webhook, Gauge,
    Database, Plug, Lightbulb, Github, Linkedin, Mail, Phone, Circle,
};

const props = defineProps<{ name: string; size?: number | string; strokeWidth?: number }>();

const component = computed<FunctionalComponent>(() => registry[props.name] ?? Circle);
</script>

<template>
    <component :is="component" :size="size ?? 24" :stroke-width="strokeWidth ?? 1.75" />
</template>
