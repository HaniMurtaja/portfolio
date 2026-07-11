import { reactive, ref } from 'vue';
import axios, { AxiosError } from 'axios';

interface ContactPayload {
    name: string;
    email: string;
    subject: string;
    message: string;
    website: string; // honeypot
}

type FieldErrors = Partial<Record<keyof ContactPayload, string[]>>;

/**
 * Encapsulates the contact form: reactive state, submission to the Laravel API,
 * validation-error surfacing and a success flag for the success animation.
 */
export function useContactForm() {
    const form = reactive<ContactPayload>({
        name: '',
        email: '',
        subject: '',
        message: '',
        website: '',
    });

    const errors = ref<FieldErrors>({});
    const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle');
    const feedback = ref('');

    const reset = () => {
        form.name = '';
        form.email = '';
        form.subject = '';
        form.message = '';
        form.website = '';
        errors.value = {};
    };

    const submit = async () => {
        if (status.value === 'loading') return;
        status.value = 'loading';
        errors.value = {};
        feedback.value = '';

        try {
            const token = document
                .querySelector<HTMLMetaElement>('meta[name="csrf-token"]')
                ?.content;

            const { data } = await axios.post('/api/contact', { ...form }, {
                headers: {
                    Accept: 'application/json',
                    ...(token ? { 'X-CSRF-TOKEN': token } : {}),
                },
            });

            status.value = 'success';
            feedback.value = data?.message ?? 'Your message has been sent.';
            reset();
        } catch (err) {
            const axiosError = err as AxiosError<{ errors?: FieldErrors; message?: string }>;
            if (axiosError.response?.status === 422) {
                errors.value = axiosError.response.data?.errors ?? {};
                feedback.value = 'Please fix the highlighted fields and try again.';
            } else if (axiosError.response?.status === 429) {
                feedback.value = 'Too many messages sent. Please try again in a minute.';
            } else {
                feedback.value = 'Something went wrong. Please email me directly.';
            }
            status.value = 'error';
        }
    };

    return { form, errors, status, feedback, submit, reset };
}
