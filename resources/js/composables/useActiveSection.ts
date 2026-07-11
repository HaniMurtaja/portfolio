import { ref, onMounted, onBeforeUnmount } from 'vue';

/**
 * Tracks which section is currently in view so the navbar can highlight the
 * active link. Uses IntersectionObserver against each section id.
 */
export function useActiveSection(sectionIds: string[]) {
    const activeSection = ref<string>(sectionIds[0] ?? '');
    let observer: IntersectionObserver | null = null;

    onMounted(() => {
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        activeSection.value = entry.target.id;
                    }
                });
            },
            { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer?.observe(el);
        });
    });

    onBeforeUnmount(() => observer?.disconnect());

    return { activeSection };
}
