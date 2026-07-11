<script setup lang="ts">
import { Briefcase } from 'lucide-vue-next';
import { experiences } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading.vue';
</script>

<template>
    <section id="experience" class="scroll-mt-24 py-24">
        <div class="section-shell">
            <SectionHeading
                eyebrow="Experience"
                title="A track record of shipping"
                subtitle="Five years across startups, incubators and product teams."
            />

            <div class="relative mx-auto max-w-3xl">
                <!-- Vertical line -->
                <div class="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-brand-500/60 via-violet-500/40 to-transparent md:left-1/2 md:-translate-x-1/2"></div>

                <div class="space-y-10">
                    <div
                        v-for="(item, index) in experiences"
                        :key="item.company + item.period"
                        class="relative pl-12 md:pl-0"
                        :class="index % 2 === 0 ? 'md:pr-[52%] md:text-right' : 'md:pl-[52%]'"
                        data-aos="fade-up"
                        :data-aos-delay="index * 80"
                    >
                        <!-- Node -->
                        <span
                            class="absolute left-4 top-1.5 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-500 text-white ring-4 ring-[#0a0a0f] md:left-1/2"
                        >
                            <Briefcase :size="14" />
                        </span>

                        <div class="glass card-tilt rounded-2xl p-6" :class="index % 2 === 0 ? 'md:text-left' : ''">
                            <span class="text-xs font-semibold uppercase tracking-widest text-brand-300">{{ item.period }}</span>
                            <h3 class="mt-1 text-lg font-bold text-white">{{ item.role }}</h3>
                            <p class="text-sm font-medium text-violet-300">{{ item.company }}</p>
                            <p class="mt-2 text-sm text-slate-400">{{ item.description }}</p>
                            <ul class="mt-3 space-y-1.5">
                                <li v-for="hl in item.highlights" :key="hl" class="flex gap-2 text-sm text-slate-300">
                                    <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400"></span>
                                    <span>{{ hl }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
