<script setup lang="ts">
import { CheckCircle2, MapPin, Mail, GraduationCap } from 'lucide-vue-next';
import { profile, stats } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading.vue';
import StatCounter from '@/components/ui/StatCounter.vue';

const focusAreas = [
    'Backend Architecture',
    'REST API Design',
    'Database Design',
    'SaaS Platforms',
    'CMS Development',
    'Performance Optimization',
    'Agile Delivery',
    'Test-Driven Development',
];
</script>

<template>
    <section id="about" class="scroll-mt-24 py-24">
        <div class="section-shell">
            <SectionHeading
                eyebrow="About Me"
                title="Engineering behind the interface"
                subtitle="Where scalable backends, clean architecture and thoughtful APIs meet."
            />

            <div class="grid items-start gap-12 lg:grid-cols-5">
                <!-- Bio -->
                <div class="lg:col-span-3" data-aos="fade-right">
                    <div class="glass rounded-3xl p-8">
                        <p v-for="(paragraph, i) in profile.bio" :key="i" class="mb-4 text-base leading-relaxed text-slate-300 last:mb-0">
                            {{ paragraph }}
                        </p>

                        <div class="mt-6 grid gap-2 sm:grid-cols-2">
                            <div v-for="area in focusAreas" :key="area" class="flex items-center gap-2 text-sm text-slate-300">
                                <CheckCircle2 :size="16" class="shrink-0 text-brand-400" />
                                {{ area }}
                            </div>
                        </div>

                        <div class="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/5 pt-6 text-sm text-slate-400">
                            <span class="inline-flex items-center gap-2"><GraduationCap :size="16" class="text-violet-400" /> B.Sc. Computer Software Engineering — IUG</span>
                            <span class="inline-flex items-center gap-2"><MapPin :size="16" class="text-cyan-400" /> {{ profile.location }}</span>
                            <a :href="`mailto:${profile.email}`" class="inline-flex items-center gap-2 transition hover:text-brand-300"><Mail :size="16" class="text-brand-400" /> {{ profile.email }}</a>
                        </div>
                    </div>
                </div>

                <!-- Stats -->
                <div class="grid grid-cols-2 gap-4 lg:col-span-2" data-aos="fade-left" data-aos-delay="150">
                    <StatCounter
                        v-for="stat in stats"
                        :key="stat.label"
                        :value="stat.value"
                        :suffix="stat.suffix"
                        :label="stat.label"
                    />
                </div>
            </div>
        </div>
    </section>
</template>
