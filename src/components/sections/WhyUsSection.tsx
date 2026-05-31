"use client";

import { motion } from "framer-motion";

import {
    ShieldCheck,
    Rocket,
    Smartphone,
    Sparkles,
} from "lucide-react";

import {
    fadeLeft,
    fadeRight,
    fadeUp,
} from "@/lib/motion";

const reasons = [
    {
        icon: Rocket,
        title: "Velocità",
        text: "Siti web rapidi e ottimizzati per performance elevate.",
    },
    {
        icon: Smartphone,
        title: "Responsive",
        text: "Esperienza perfetta su desktop, tablet e smartphone.",
    },
    {
        icon: Sparkles,
        title: "Design Moderno",
        text: "Interfacce eleganti e professionali curate nei dettagli.",
    },
    {
        icon: ShieldCheck,
        title: "Affidabilità",
        text: "Soluzioni stabili, sicure e pensate per durare nel tempo.",
    },
];

export default function WhyUsSection() {
    return (
        <section
            id="why-us"
            className="relative overflow-hidden bg-white px-5 py-24"
        >
            {/* BLUR */}
            <div className="absolute left-[-120px] top-10 h-[280px] w-[280px] rounded-full bg-[#FFB800]/10 blur-[60px]" />

            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

                {/* LEFT */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeLeft}
                >
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFB800]">
                        Why Us
                    </p>

                    <h2 className="text-4xl font-bold leading-tight text-black md:text-5xl">
                        Perché scegliere{" "}
                        <span className="text-[#FFB800]">
              Beehova
            </span>
                        ?
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-black/60 md:text-lg">
                        Creiamo esperienze digitali moderne che aiutano brand
                        e aziende a distinguersi online con design,
                        performance e qualità professionale.
                    </p>

                    <div className="mt-10 flex flex-col gap-5">
                        {reasons.map((reason, index) => {
                            const Icon = reason.icon;

                            return (
                                <motion.div
                                    key={reason.title}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    variants={fadeUp}
                                    transition={{
                                        delay: index * 0.08,
                                    }}
                                    whileHover={{
                                        x: 8,
                                    }}
                                    className="group flex items-start gap-5 rounded-[28px] border border-black/5 bg-[#FAFAFA] p-5 transition-all duration-300 hover:border-[#FFB800]/30 hover:bg-white hover:shadow-[0_20px_60px_rgba(255,184,0,0.12)]"
                                >
                                    {/* ICON */}
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white transition-all duration-300 group-hover:bg-[#FFB800]">
                                        <Icon
                                            size={26}
                                            className="text-[#FFB800] transition duration-300 group-hover:text-black"
                                        />
                                    </div>

                                    {/* TEXT */}
                                    <div>
                                        <h3 className="text-xl font-bold text-black transition duration-300 group-hover:text-[#FFB800]">
                                            {reason.title}
                                        </h3>

                                        <p className="mt-2 leading-7 text-black/55">
                                            {reason.text}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeRight}
                    className="relative"
                >
                    {/* MAIN BOX */}
                    <div className="relative overflow-hidden rounded-[42px] bg-[#FFF9E8] p-10 shadow-lg_rgba(255,184,0,0.12)]">

                        {/* MINI SHAPES */}
                        <div className="absolute right-10 top-10 h-16 w-16 rounded-[24px] border border-[#FFB800]/20 rotate-12" />

                        <div className="absolute bottom-10 left-10 h-12 w-12 rounded-[18px] border border-[#FFB800]/20 -rotate-12" />

                        {/* CONTENT */}
                        <div className="relative z-10">
                            <div className="flex h-24 w-24 items-center justify-center rounded-[32px] bg-[#FFB800] shadow-[0_15px_40px_rgba(255,184,0,0.35)]">
                                <Sparkles
                                    size={44}
                                    className="text-black"
                                />
                            </div>

                            <h3 className="mt-8 text-3xl font-bold text-black">
                                Esperienze digitali che lasciano il segno.
                            </h3>

                            <p className="mt-5 leading-8 text-black/60">
                                Ogni progetto viene costruito con attenzione
                                al design, all’esperienza utente e alle performance
                                per offrire un risultato moderno e professionale.
                            </p>

                            {/* STATS */}
                            <div className="mt-10 grid grid-cols-2 gap-5">

                                <div className="rounded-3xl bg-white p-5 shadow-sm">
                                    <h4 className="text-4xl font-bold text-[#FFB800]">
                                        +12
                                    </h4>

                                    <p className="mt-2 text-sm text-black/55">
                                        Progetti completati
                                    </p>
                                </div>

                                <div className="rounded-3xl bg-white p-5 shadow-sm">
                                    <h4 className="text-4xl font-bold text-[#FFB800]">
                                        100%
                                    </h4>

                                    <p className="mt-2 text-sm text-black/55">
                                        Responsive Design
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}