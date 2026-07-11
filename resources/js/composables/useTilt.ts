import { onBeforeUnmount, type Ref } from 'vue';

/**
 * Adds a subtle 3D tilt that follows the cursor across an element. No-ops when
 * the user prefers reduced motion or on touch devices.
 */
export function useTilt(el: Ref<HTMLElement | null>, max = 8) {
    const prefersReduced =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onMove = (event: MouseEvent) => {
        const node = el.value;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;
        node.style.transform = `perspective(900px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translateZ(6px)`;
    };

    const reset = () => {
        if (el.value) el.value.style.transform = '';
    };

    const bind = () => {
        const node = el.value;
        if (!node || prefersReduced) return;
        node.addEventListener('mousemove', onMove);
        node.addEventListener('mouseleave', reset);
    };

    const unbind = () => {
        const node = el.value;
        if (!node) return;
        node.removeEventListener('mousemove', onMove);
        node.removeEventListener('mouseleave', reset);
    };

    onBeforeUnmount(unbind);

    return { bind, unbind };
}
