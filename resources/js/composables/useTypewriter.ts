import { ref, onMounted, onBeforeUnmount } from 'vue';

/**
 * Cycles through a list of phrases with a typing / deleting effect.
 */
export function useTypewriter(
    words: string[],
    { typeSpeed = 85, deleteSpeed = 40, pause = 1600 } = {},
) {
    const output = ref('');
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const prefersReduced =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const loop = () => {
        const word = words[wordIndex] ?? '';

        if (deleting) {
            charIndex--;
            output.value = word.slice(0, charIndex);
            if (charIndex <= 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                timer = setTimeout(loop, typeSpeed);
                return;
            }
            timer = setTimeout(loop, deleteSpeed);
        } else {
            charIndex++;
            output.value = word.slice(0, charIndex);
            if (charIndex >= word.length) {
                deleting = true;
                timer = setTimeout(loop, pause);
                return;
            }
            timer = setTimeout(loop, typeSpeed);
        }
    };

    onMounted(() => {
        if (prefersReduced) {
            output.value = words[0] ?? '';
            return;
        }
        timer = setTimeout(loop, typeSpeed);
    });

    onBeforeUnmount(() => clearTimeout(timer));

    return { output };
}
