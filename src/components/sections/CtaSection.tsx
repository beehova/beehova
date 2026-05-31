"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/motion";

export default function CtaSection() {
    return (
        <section className="relative overflow-hidden bg-white px-5 py-24">
            {/* BLUR */}
            <div className="absolute left-[-120px] bottom-[-120px] h-[300px] w-[300px] rounded-full bg-[#FFB800]/10 blur-[120px]" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-black px-8 py-16 text-white md:px-16"
            >
                {/* BACKGROUND SHAPES */}
                <div className="absolute right-[-40px] top-[-40px] h-52 w-52 rounded-full bg-[#FFB800]/10 blur-[90px]" />

                <div className="absolute bottom-[-50px] left-[-50px] h-52 w-52 rounded-full bg-[#FFB800]/10 blur-[90px]" />

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">

                    {/* TEXT */}
                    <div className="max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFB800]">
                            Let’s Build Together
                        </p>

                        <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                            Pronto a creare un sito web moderno per il tuo business?
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
                            Beehova ti aiuta a trasformare la tua idea in
                            un’esperienza digitale professionale, elegante e performante.
                        </p>
                    </div>

                    {/* BUTTON */}
                    <motion.a
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{
                            scale: 0.96,
                        }}
                        href="#contact"
                        className="flex items-center gap-3 rounded-full bg-[#FFB800] px-8 py-5 text-base font-bold text-black shadow-[0_18px_45px_rgba(255,184,0,0.35)]"
                    >
                        Inizia il tuo progetto
                        <ArrowUpRight size={22} />
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}