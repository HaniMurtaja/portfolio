import { ref, onMounted, onBeforeUnmount, type Ref } from 'vue';

/**
 * Animates a number from 0 to `end` once its host element scrolls into view.
 */
export function useCountUp(el: Ref<HTMLElement | null>, end: number, duration = 1800) {
    const current = ref(0);
    let observer: IntersectionObserver | null = null;
    let frame = 0;

    const prefersReduced =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const run = (startTime: number) => {
        const tick = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            current.value = Math.round(eased * end);
            if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
    };

    onMounted(() => {
        if (prefersReduced) {
            current.value = end;
            return;
        }
        observer = new IntersectionObserver(
            (entries) => {
                if (entries[0]?.isIntersecting) {
                    run(performance.now());
                    observer?.disconnect();
                }
            },
            { threshold: 0.4 },
        );
        if (el.value) observer.observe(el.value);
    });

    onBeforeUnmount(() => {
        observer?.disconnect();
        cancelAnimationFrame(frame);
    });

    return { current };
}
