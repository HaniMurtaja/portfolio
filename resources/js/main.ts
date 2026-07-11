import { createApp } from 'vue';
import { createPinia } from 'pinia';
import AOS from 'aos';
import 'aos/dist/aos.css';

import App from '@/App.vue';
import { router } from '@/router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');

// Initialise AOS once the app is mounted.
AOS.init({
    once: true,
    duration: 700,
    easing: 'ease-out-cubic',
    offset: 60,
    disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
});

// Remove the server-rendered loading spinner.
const loader = document.getElementById('app-loader');
if (loader) {
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.5s ease';
    setTimeout(() => loader.remove(), 500);
}
