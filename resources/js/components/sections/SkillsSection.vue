<script setup lang="ts">
import { skillGroups } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading.vue';
import DynamicIcon from '@/components/ui/DynamicIcon.vue';
</script>

<template>
    <section id="skills" class="scroll-mt-24 py-24">
        <div class="section-shell">
            <SectionHeading
                eyebrow="Skills"
                title="The stack I build with"
                subtitle="Battle-tested tools across backend, frontend and testing."
            />

            <div class="grid gap-6 md:grid-cols-3">
                <div
                    v-for="(group, index) in skillGroups"
                    :key="group.category"
                    class="glass card-tilt group rounded-3xl p-7"
                    data-aos="fade-up"
                    :data-aos-delay="index * 120"
                >
                    <div class="mb-5 flex items-center gap-3">
                        <span class="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 to-violet-500/20 text-brand-300 ring-1 ring-white/10 transition group-hover:scale-110">
                            <DynamicIcon :name="group.icon" :size="22" />
                        </span>
                        <h3 class="text-xl font-bold text-white">{{ group.category }}</h3>
                    </div>

                    <div class="flex flex-wrap gap-2">
                        <span
                            v-for="skill in group.skills"
                            :key="skill"
                            class="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300 transition hover:border-brand-400/40 hover:bg-brand-500/10 hover:text-white"
                        >
                            {{ skill }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
