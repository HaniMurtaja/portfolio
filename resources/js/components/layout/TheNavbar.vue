<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Menu, X, Download, Sun, Moon } from 'lucide-vue-next';
import { navLinks, profile } from '@/data/portfolio';
import { useActiveSection } from '@/composables/useActiveSection';
import { useUiStore } from '@/stores/ui';

const ui = useUiStore();
const { activeSection } = useActiveSection(navLinks.map((l) => l.id));
const scrolled = ref(false);

const onScroll = () => (scrolled.value = window.scrollY > 24);

const go = (id: string) => {
    ui.closeMenu();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
};

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }));
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));
</script>

<template>
    <header
        class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
        :class="scrolled ? 'py-3' : 'py-5'"
    >
        <nav class="section-shell">
            <div
                class="flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300"
                :class="scrolled ? 'glass-strong shadow-lg shadow-black/30' : ''"
            >
                <!-- Brand -->
                <a
                    href="#home"
                    class="group flex items-center gap-2.5"
                    aria-label="Hani Murtaja — home"
                    @click.prevent="go('home')"
                >
                    <span
                        class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 text-sm font-black text-white shadow-lg shadow-brand-500/30 transition group-hover:scale-105"
                    >HM</span>
                    <span class="hidden text-sm font-semibold tracking-wide text-white sm:block">
                        Hani<span class="text-brand-400">.</span>Murtaja
                    </span>
                </a>

                <!-- Desktop links -->
                <ul class="hidden items-center gap-1 lg:flex">
                    <li v-for="link in navLinks" :key="link.id">
                        <a
                            :href="`#${link.id}`"
                            class="relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors"
                            :class="activeSection === link.id ? 'text-white' : 'text-slate-400 hover:text-white'"
                            @click.prevent="go(link.id)"
                        >
                            {{ link.label }}
                            <span
                                v-if="activeSection === link.id"
                                class="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-brand-400 to-violet-400"
                            ></span>
                        </a>
                    </li>
                </ul>

                <!-- Actions -->
                <div class="flex items-center gap-2">
                    <button
                        type="button"
                        class="glass flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 transition hover:text-white"
                        :aria-label="ui.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
                        @click="ui.toggleTheme"
                    >
                        <Sun v-if="ui.theme === 'dark'" :size="17" />
                        <Moon v-else :size="17" />
                    </button>

                    <a
                        :href="profile.resume"
                        download
                        class="btn-glow hidden items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 sm:flex"
                    >
                        <Download :size="16" />
                        Resume
                    </a>

                    <button
                        type="button"
                        class="glass flex h-9 w-9 items-center justify-center rounded-lg text-white lg:hidden"
                        :aria-label="ui.mobileMenuOpen ? 'Close menu' : 'Open menu'"
                        :aria-expanded="ui.mobileMenuOpen"
                        @click="ui.toggleMenu"
                    >
                        <X v-if="ui.mobileMenuOpen" :size="18" />
                        <Menu v-else :size="18" />
                    </button>
                </div>
            </div>

            <!-- Mobile menu -->
            <transition name="mobile-menu">
                <div v-if="ui.mobileMenuOpen" class="mt-2 lg:hidden">
                    <ul class="glass-strong space-y-1 rounded-2xl p-3 shadow-lg shadow-black/30">
                        <li v-for="link in navLinks" :key="link.id">
                            <a
                                :href="`#${link.id}`"
                                class="block rounded-lg px-4 py-2.5 text-sm font-medium transition"
                                :class="activeSection === link.id ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'"
                                @click.prevent="go(link.id)"
                            >
                                {{ link.label }}
                            </a>
                        </li>
                        <li>
                            <a
                                :href="profile.resume"
                                download
                                class="mt-1 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-500 to-violet-500 px-4 py-2.5 text-sm font-semibold text-white"
                            >
                                <Download :size="16" /> Download Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </transition>
        </nav>
    </header>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
    transition: opacity 0.25s ease, transform 0.25s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>
