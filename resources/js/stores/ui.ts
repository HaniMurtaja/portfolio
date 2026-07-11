import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

type Theme = 'dark' | 'light';

/**
 * Global UI state: colour theme (persisted) and the mobile menu toggle.
 */
export const useUiStore = defineStore('ui', () => {
    const stored = (localStorage.getItem('theme') as Theme | null) ?? 'dark';
    const theme = ref<Theme>(stored);
    const mobileMenuOpen = ref(false);

    const applyTheme = (value: Theme) => {
        const root = document.documentElement;
        root.classList.toggle('dark', value === 'dark');
        root.classList.toggle('light', value === 'light');
        root.style.colorScheme = value;
    };

    applyTheme(theme.value);

    watch(theme, (value) => {
        localStorage.setItem('theme', value);
        applyTheme(value);
    });

    const toggleTheme = () => {
        theme.value = theme.value === 'dark' ? 'light' : 'dark';
    };

    const toggleMenu = () => {
        mobileMenuOpen.value = !mobileMenuOpen.value;
    };

    const closeMenu = () => {
        mobileMenuOpen.value = false;
    };

    return { theme, mobileMenuOpen, toggleTheme, toggleMenu, closeMenu };
});
