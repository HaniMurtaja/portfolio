<script setup lang="ts">
import { services } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading.vue';
import DynamicIcon from '@/components/ui/DynamicIcon.vue';
</script>

<template>
    <section id="services" class="scroll-mt-24 py-24">
        <div class="section-shell">
            <SectionHeading
                eyebrow="Services"
                title="How I can help you ship"
                subtitle="From first commit to production — end-to-end backend expertise."
            />

            <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <article
                    v-for="(service, index) in services"
                    :key="service.title"
                    class="glass card-tilt group relative overflow-hidden rounded-2xl p-6"
                    data-aos="fade-up"
                    :data-aos-delay="(index % 4) * 100"
                >
                    <!-- Hover gradient wash -->
                    <div class="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"></div>

                    <span class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 text-white shadow-lg shadow-brand-500/25 transition group-hover:-translate-y-1">
                        <DynamicIcon :name="service.icon" :size="22" />
                    </span>

                    <h3 class="text-base font-bold text-white">{{ service.title }}</h3>
                    <p class="mt-2 text-sm leading-relaxed text-slate-400">{{ service.description }}</p>
                </article>
            </div>
        </div>
    </section>
</template>
