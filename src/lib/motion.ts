import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

export const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -16 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};

export const fadeRight: Variants = {
    hidden: { opacity: 0, x: 16 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.3, ease: "easeOut" },
    },
};