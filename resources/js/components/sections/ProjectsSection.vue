<script setup lang="ts">
import { ref, computed } from 'vue';
import { ExternalLink, ArrowUpRight } from 'lucide-vue-next';
import { projects } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading.vue';

const filters = ['All', ...Array.from(new Set(projects.map((p) => p.tag)))];
const active = ref<string>('All');

const filtered = computed(() =>
    active.value === 'All' ? projects : projects.filter((p) => p.tag === active.value),
);
</script>

<template>
    <section id="projects" class="scroll-mt-24 py-24">
        <div class="section-shell">
            <SectionHeading
                eyebrow="Featured Projects"
                title="Selected work"
                subtitle="Products and platforms I've helped design, build and scale."
            />

            <!-- Filter pills -->
            <div class="mb-10 flex flex-wrap justify-center gap-2" data-aos="fade-up">
                <button
                    v-for="filter in filters"
                    :key="filter"
                    type="button"
                    class="rounded-full px-4 py-1.5 text-sm font-medium transition"
                    :class="active === filter
                        ? 'bg-gradient-to-r from-brand-500 to-violet-500 text-white shadow-lg shadow-brand-500/25'
                        : 'glass text-slate-300 hover:text-white'"
                    @click="active = filter"
                >
                    {{ filter }}
                </button>
            </div>

            <!-- Grid -->
            <transition-group
                tag="div"
                name="project"
                class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
                <a
                    v-for="project in filtered"
                    :key="project.name"
                    :href="project.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="glass card-tilt group relative flex flex-col overflow-hidden rounded-3xl"
                >
                    <!-- Screenshot placeholder -->
                    <div class="relative h-44 overflow-hidden">
                        <div :class="['absolute inset-0 bg-gradient-to-br opacity-90 transition-transform duration-700 group-hover:scale-110', project.accent]"></div>
                        <div class="absolute inset-0 opacity-20" style="background-image: linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px); background-size: 22px 22px;"></div>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <span class="text-3xl font-black tracking-tight text-white/90 drop-shadow">{{ project.name }}</span>
                        </div>
                        <span class="glass-strong absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white">{{ project.tag }}</span>
                        <span class="glass-strong absolute right-3 top-3 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <ArrowUpRight :size="16" />
                        </span>
                    </div>

                    <!-- Body -->
                    <div class="flex flex-1 flex-col p-6">
                        <h3 class="text-lg font-bold text-white transition group-hover:text-brand-300">{{ project.name }}</h3>
                        <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{{ project.description }}</p>

                        <div class="mt-4 flex flex-wrap gap-1.5">
                            <span v-for="tech in project.tech" :key="tech" class="rounded-md bg-white/5 px-2 py-1 text-xs text-slate-300">{{ tech }}</span>
                        </div>

                        <span class="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300">
                            Visit Website <ExternalLink :size="15" />
                        </span>
                    </div>
                </a>
            </transition-group>
        </div>
    </section>
</template>

<style scoped>
.project-enter-active,
.project-leave-active {
    transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}
.project-enter-from,
.project-leave-to {
    opacity: 0;
    transform: scale(0.92) translateY(16px);
}
.project-leave-active {
    position: absolute;
}
</style>
