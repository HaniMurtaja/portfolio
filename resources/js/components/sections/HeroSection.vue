<script setup lang="ts">
import { ref } from 'vue';
import { Download, Mail, ArrowDown } from 'lucide-vue-next';
import { profile, socialLinks } from '@/data/portfolio';
import { useTypewriter } from '@/composables/useTypewriter';
import DynamicIcon from '@/components/ui/DynamicIcon.vue';

const { output } = useTypewriter(profile.roles);
const imageError = ref(false);

const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
};
</script>

<template>
    <section id="home" class="relative flex min-h-screen items-center pt-28 pb-16">
        <div class="section-shell grid w-full items-center gap-14 lg:grid-cols-2">
            <!-- Left: copy -->
            <div class="text-center lg:text-left">
                <span
                    class="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-slate-300"
                    data-aos="fade-up"
                >
                    <span class="relative flex h-2 w-2">
                        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                        <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                    </span>
                    Available for new opportunities
                </span>

                <h1 class="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl" data-aos="fade-up" data-aos-delay="100">
                    Hi, I'm
                    <span class="text-gradient block sm:inline">Hani Murtaja</span>
                </h1>

                <div class="mt-4 flex h-9 items-center justify-center text-xl font-semibold text-slate-300 sm:text-2xl lg:justify-start" data-aos="fade-up" data-aos-delay="200">
                    <span class="text-brand-300">{{ output }}</span>
                    <span class="ml-1 inline-block h-6 w-0.5 animate-pulse bg-brand-400 sm:h-7"></span>
                </div>

                <p class="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 lg:mx-0" data-aos="fade-up" data-aos-delay="300">
                    A Backend Software Engineer with 5+ years building scalable Laravel &amp; PHP applications, robust REST APIs and high-performance SaaS platforms.
                </p>

                <div class="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start" data-aos="fade-up" data-aos-delay="400">
                    <a
                        :href="profile.resume"
                        download
                        class="btn-glow inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:scale-[1.03] sm:w-auto"
                    >
                        <Download :size="18" /> Download Resume
                    </a>
                    <button
                        type="button"
                        class="glass inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.03] hover:bg-white/10 sm:w-auto"
                        @click="scrollTo('contact')"
                    >
                        <Mail :size="18" /> Contact Me
                    </button>
                </div>

                <!-- Socials -->
                <div class="mt-8 flex items-center justify-center gap-3 lg:justify-start" data-aos="fade-up" data-aos-delay="500">
                    <a
                        v-for="social in socialLinks"
                        :key="social.label"
                        :href="social.href"
                        :target="social.href.startsWith('http') ? '_blank' : undefined"
                        rel="noopener noreferrer"
                        :aria-label="social.label"
                        class="glass flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 transition hover:-translate-y-1 hover:text-white"
                    >
                        <DynamicIcon :name="social.icon" :size="18" />
                    </a>
                </div>
            </div>

            <!-- Right: profile image -->
            <div class="flex justify-center lg:justify-end" data-aos="zoom-in" data-aos-delay="200">
                <div class="animate-float relative">
                    <!-- Glowing rotating ring -->
                    <div class="animate-spin-slow absolute -inset-4 rounded-full bg-gradient-to-r from-brand-500 via-violet-500 to-cyan-400 opacity-70 blur-xl"></div>
                    <div class="absolute -inset-1 rounded-full bg-gradient-to-r from-brand-500 via-violet-500 to-cyan-400"></div>

                    <div class="relative h-64 w-64 overflow-hidden rounded-full border-4 border-[#0a0a0f] sm:h-80 sm:w-80">
                        <img
                            v-if="!imageError"
                            src="/images/profile.svg"
                            alt="Hani Murtaja, Backend Software Engineer"
                            class="h-full w-full object-cover"
                            width="320"
                            height="320"
                            @error="imageError = true"
                        />
                        <div v-else class="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-600 to-violet-600 text-7xl font-black text-white">
                            HM
                        </div>
                    </div>

                    <!-- Floating badges -->
                    <div class="glass-strong absolute -left-6 top-10 rounded-2xl px-4 py-2.5 shadow-lg" style="animation: float 5s ease-in-out infinite;">
                        <p class="text-xs text-slate-400">Experience</p>
                        <p class="text-lg font-bold text-white">5+ Years</p>
                    </div>
                    <div class="glass-strong absolute -right-4 bottom-12 rounded-2xl px-4 py-2.5 shadow-lg" style="animation: float 6s ease-in-out infinite; animation-delay: -2s;">
                        <p class="text-xs text-slate-400">Focus</p>
                        <p class="text-lg font-bold text-white">Laravel · APIs</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scroll cue -->
        <button
            type="button"
            aria-label="Scroll to about section"
            class="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 transition hover:text-white md:flex"
            @click="scrollTo('about')"
        >
            <span class="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown :size="18" class="animate-bounce" />
        </button>
    </section>
</template>
