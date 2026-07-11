import { onMounted, onBeforeUnmount, type Ref } from 'vue';

/**
 * Reveals an element (and optional staggered children) as it scrolls into view
 * using IntersectionObserver. Respects `prefers-reduced-motion`.
 */
export function useScrollReveal(
    target: Ref<HTMLElement | null>,
    options: { childSelector?: string; stagger?: number; threshold?: number } = {},
) {
    const { childSelector, stagger = 90, threshold = 0.15 } = options;
    let observer: IntersectionObserver | null = null;

    const prefersReduced =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    onMounted(() => {
        const el = target.value;
        if (!el) return;

        const reveal = () => {
            el.classList.add('is-visible');
            if (childSelector) {
                el.querySelectorAll<HTMLElement>(childSelector).forEach((child, i) => {
                    child.style.transitionDelay = `${i * stagger}ms`;
                    child.classList.add('is-visible');
                });
            }
        };

        if (prefersReduced) {
            reveal();
            return;
        }

        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        reveal();
                        observer?.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin: '0px 0px -8% 0px' },
        );

        observer.observe(el);
    });

    onBeforeUnmount(() => observer?.disconnect());
}
