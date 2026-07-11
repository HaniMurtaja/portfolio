<script setup lang="ts">
import { navLinks, socialLinks, profile } from '@/data/portfolio';
import DynamicIcon from '@/components/ui/DynamicIcon.vue';

const year = new Date().getFullYear();

const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
};
</script>

<template>
    <footer class="relative border-t border-white/5 py-14">
        <div class="section-shell">
            <div class="grid gap-10 md:grid-cols-3">
                <!-- Brand -->
                <div>
                    <a href="#home" class="flex items-center gap-2.5" @click.prevent="go('home')">
                        <span class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 text-sm font-black text-white">HM</span>
                        <span class="text-base font-semibold text-white">Hani Murtaja</span>
                    </a>
                    <p class="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
                        Backend Software Engineer crafting scalable Laravel &amp; Vue applications, robust REST APIs and performant SaaS platforms.
                    </p>
                </div>

                <!-- Quick links -->
                <div>
                    <h3 class="text-sm font-semibold uppercase tracking-widest text-slate-300">Navigate</h3>
                    <ul class="mt-4 grid grid-cols-2 gap-2">
                        <li v-for="link in navLinks" :key="link.id">
                            <a
                                :href="`#${link.id}`"
                                class="text-sm text-slate-400 transition hover:text-brand-300"
                                @click.prevent="go(link.id)"
                            >{{ link.label }}</a>
                        </li>
                    </ul>
                </div>

                <!-- Connect -->
                <div>
                    <h3 class="text-sm font-semibold uppercase tracking-widest text-slate-300">Connect</h3>
                    <div class="mt-4 flex gap-3">
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
                    <a :href="`mailto:${profile.email}`" class="mt-4 block text-sm text-slate-400 transition hover:text-brand-300">
                        {{ profile.email }}
                    </a>
                </div>
            </div>

            <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
                <p class="text-sm text-slate-500">
                    &copy; {{ year }} Hani Murtaja. All rights reserved.
                </p>
                <p class="text-sm text-slate-500">
                    Built with <span class="text-brand-400">Laravel</span> &amp; <span class="text-emerald-400">Vue</span>.
                </p>
            </div>
        </div>
    </footer>
</template>
