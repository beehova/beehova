"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Rocket } from "lucide-react";
import { fadeLeft, fadeRight, fadeUp } from "@/lib/motion";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#FAFAFA] px-5 py-24"
        >
            <div className="absolute left-[-100px] top-20 h-72 w-72 rounded-full bg-[#FFB800]/10 blur-[100px]" />

            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.25 }}
                    variants={fadeLeft}
                >
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFB800]">
                        Chi siamo
                    </p>

                    <h2 className="max-w-xl text-4xl font-bold leading-tight text-black md:text-5xl">
                        Un piccolo studio digitale con grandi idee.
                    </h2>

                    <p className="mt-6 max-w-xl text-base leading-8 text-black/60 md:text-lg">
                        Beehova nasce per aiutare brand, attività locali e professionisti a
                        costruire una presenza online moderna, chiara e professionale.
                        Progettiamo siti web veloci, eleganti e facili da usare.
                    </p>

                    <p className="mt-4 max-w-xl text-base leading-8 text-black/60 md:text-lg">
                        Uniamo design, sviluppo e strategia per creare esperienze digitali
                        che non siano solo belle da vedere, ma anche utili per crescere.
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.25 }}
                    variants={fadeRight}
                    className="grid gap-5"
                >
                    <motion.div
                        variants={fadeUp}
                        className="rounded-[32px] border border-black/5 bg-white p-6 shadow-sm"
                    >
                        <Code2 className="mb-4 text-[#FFB800]" size={30} />
                        <h3 className="text-xl font-bold">Sviluppo moderno</h3>
                        <p className="mt-2 leading-7 text-black/55">
                            Usiamo tecnologie moderne per creare siti rapidi, responsive e
                            pronti per crescere.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="rounded-[32px] border border-black/5 bg-white p-6 shadow-sm"
                    >
                        <Palette className="mb-4 text-[#FFB800]" size={30} />
                        <h3 className="text-xl font-bold">Design pulito</h3>
                        <p className="mt-2 leading-7 text-black/55">
                            Creiamo interfacce eleganti, semplici e coerenti con l’identità
                            del tuo brand.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="rounded-[32px] border border-black/5 bg-white p-6 shadow-sm"
                    >
                        <Rocket className="mb-4 text-[#FFB800]" size={30} />
                        <h3 className="text-xl font-bold">Obiettivo crescita</h3>
                        <p className="mt-2 leading-7 text-black/55">
                            Ogni sito è pensato per comunicare meglio, attirare clienti e
                            migliorare la presenza online.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}