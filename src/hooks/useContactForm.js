import { useState } from "react";
import emailjs from "emailjs-com";

const ENABLE_RECAPTCHA = import.meta.env.VITE_ENABLE_RECAPTCHA !== "false";
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export default function useContactForm() {
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const recaptchaReady = ENABLE_RECAPTCHA && Boolean(RECAPTCHA_SITE_KEY);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (recaptchaReady && !recaptchaToken) {
            alert("Please verify that you are not a robot.");
            return;
        }

        setIsSubmitting(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                e.target,
                { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
            )
            .then(() => {
                alert("Message sent successfully!");
            })
            .catch((error) => {
                console.error("EmailJS error:", error);
                alert("Failed to send message. Please try again.");
            })
            .finally(() => {
                setIsSubmitting(false);
                setRecaptchaToken(null);
                e.target.reset();
            });
    };

    return {
        handleSubmit,
        recaptchaReady,
        recaptchaToken,
        setRecaptchaToken,
        isSubmitting,
        recaptchaSiteKey: RECAPTCHA_SITE_KEY,
    };
}
