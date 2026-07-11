<script setup lang="ts">
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-vue-next';
import { profile, socialLinks } from '@/data/portfolio';
import { useContactForm } from '@/composables/useContactForm';
import SectionHeading from '@/components/ui/SectionHeading.vue';
import DynamicIcon from '@/components/ui/DynamicIcon.vue';

const { form, errors, status, feedback, submit } = useContactForm();
</script>

<template>
    <section id="contact" class="scroll-mt-24 py-24">
        <div class="section-shell">
            <SectionHeading
                eyebrow="Contact"
                title="Let's build something great"
                subtitle="Have a project, role or idea in mind? My inbox is always open."
            />

            <div class="grid gap-8 lg:grid-cols-5">
                <!-- Info panel -->
                <div class="lg:col-span-2" data-aos="fade-right">
                    <div class="glass flex h-full flex-col rounded-3xl p-8">
                        <h3 class="text-xl font-bold text-white">Get in touch</h3>
                        <p class="mt-3 text-sm leading-relaxed text-slate-400">
                            I'm currently open to backend engineering roles, freelance projects and Laravel consultation. Let's talk.
                        </p>

                        <div class="mt-8 space-y-4">
                            <a
                                v-for="social in socialLinks"
                                :key="social.label"
                                :href="social.href"
                                :target="social.href.startsWith('http') ? '_blank' : undefined"
                                rel="noopener noreferrer"
                                class="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-3 transition hover:border-brand-400/30 hover:bg-brand-500/5"
                            >
                                <span class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500/20 to-violet-500/20 text-brand-300 ring-1 ring-white/10">
                                    <DynamicIcon :name="social.icon" :size="18" />
                                </span>
                                <div>
                                    <p class="text-xs text-slate-500">{{ social.label }}</p>
                                    <p class="text-sm font-medium text-slate-200 transition group-hover:text-white">
                                        {{ social.label === 'Email' ? profile.email : social.label === 'Phone' ? profile.phone : social.href.replace('https://', '') }}
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Form -->
                <div class="lg:col-span-3" data-aos="fade-left" data-aos-delay="150">
                    <div class="glass relative overflow-hidden rounded-3xl p-8">
                        <!-- Success overlay -->
                        <transition name="success">
                            <div
                                v-if="status === 'success'"
                                class="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[#0f0f17]/95 p-8 text-center backdrop-blur"
                            >
                                <span class="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 ring-4 ring-emerald-500/20">
                                    <CheckCircle2 :size="44" class="animate-[glow_2s_ease-in-out_infinite]" />
                                </span>
                                <h3 class="text-2xl font-bold text-white">Message sent!</h3>
                                <p class="max-w-sm text-sm text-slate-400">{{ feedback }}</p>
                                <button
                                    type="button"
                                    class="glass rounded-lg px-5 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                                    @click="status = 'idle'"
                                >
                                    Send another
                                </button>
                            </div>
                        </transition>

                        <form class="space-y-5" novalidate @submit.prevent="submit">
                            <!-- Honeypot (hidden from users) -->
                            <input
                                v-model="form.website"
                                type="text"
                                name="website"
                                tabindex="-1"
                                autocomplete="off"
                                aria-hidden="true"
                                class="hidden"
                            />

                            <div class="grid gap-5 sm:grid-cols-2">
                                <div>
                                    <label for="name" class="mb-1.5 block text-sm font-medium text-slate-300">Name</label>
                                    <input
                                        id="name"
                                        v-model="form.name"
                                        type="text"
                                        autocomplete="name"
                                        placeholder="Jane Doe"
                                        class="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-brand-400/60 focus:ring-2 focus:ring-brand-500/20"
                                        :class="errors.name ? 'border-rose-500/60' : ''"
                                        :aria-invalid="!!errors.name"
                                    />
                                    <p v-if="errors.name" class="mt-1 text-xs text-rose-400">{{ errors.name[0] }}</p>
                                </div>
                                <div>
                                    <label for="email" class="mb-1.5 block text-sm font-medium text-slate-300">Email</label>
                                    <input
                                        id="email"
                                        v-model="form.email"
                                        type="email"
                                        autocomplete="email"
                                        placeholder="jane@company.com"
                                        class="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-brand-400/60 focus:ring-2 focus:ring-brand-500/20"
                                        :class="errors.email ? 'border-rose-500/60' : ''"
                                        :aria-invalid="!!errors.email"
                                    />
                                    <p v-if="errors.email" class="mt-1 text-xs text-rose-400">{{ errors.email[0] }}</p>
                                </div>
                            </div>

                            <div>
                                <label for="subject" class="mb-1.5 block text-sm font-medium text-slate-300">Subject</label>
                                <input
                                    id="subject"
                                    v-model="form.subject"
                                    type="text"
                                    placeholder="Project inquiry"
                                    class="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-brand-400/60 focus:ring-2 focus:ring-brand-500/20"
                                    :class="errors.subject ? 'border-rose-500/60' : ''"
                                    :aria-invalid="!!errors.subject"
                                />
                                <p v-if="errors.subject" class="mt-1 text-xs text-rose-400">{{ errors.subject[0] }}</p>
                            </div>

                            <div>
                                <label for="message" class="mb-1.5 block text-sm font-medium text-slate-300">Message</label>
                                <textarea
                                    id="message"
                                    v-model="form.message"
                                    rows="5"
                                    placeholder="Tell me about your project or opportunity..."
                                    class="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-brand-400/60 focus:ring-2 focus:ring-brand-500/20"
                                    :class="errors.message ? 'border-rose-500/60' : ''"
                                    :aria-invalid="!!errors.message"
                                ></textarea>
                                <p v-if="errors.message" class="mt-1 text-xs text-rose-400">{{ errors.message[0] }}</p>
                            </div>

                            <p v-if="status === 'error' && feedback" class="flex items-center gap-2 text-sm text-rose-400">
                                <AlertCircle :size="16" /> {{ feedback }}
                            </p>

                            <button
                                type="submit"
                                :disabled="status === 'loading'"
                                class="btn-glow inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                <Loader2 v-if="status === 'loading'" :size="18" class="animate-spin" />
                                <Send v-else :size="18" />
                                {{ status === 'loading' ? 'Sending...' : 'Send Message' }}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.success-enter-active,
.success-leave-active {
    transition: opacity 0.4s ease, transform 0.4s ease;
}
.success-enter-from,
.success-leave-to {
    opacity: 0;
    transform: scale(1.05);
}
</style>
