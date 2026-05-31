"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, ClipboardCheck, Rocket } from "lucide-react";
import { fadeUp } from "@/lib/motion";

const steps = [
    {
        icon: Search,
        number: "01",
        title: "Scoperta & Strategia",
        text: "Analizziamo obiettivi, pubblico e bisogni per creare una strategia chiara.",
    },
    {
        icon: PenTool,
        number: "02",
        title: "Design & Prototipo",
        text: "Creiamo interfacce moderne, intuitive e coerenti con il tuo brand.",
    },
    {
        icon: Code2,
        number: "03",
        title: "Sviluppo",
        text: "Sviluppiamo un sito veloce, responsive, sicuro e ottimizzato.",
    },
    {
        icon: ClipboardCheck,
        number: "04",
        title: "Test & Qualità",
        text: "Controlliamo ogni dettaglio su desktop, tablet e smartphone.",
    },
    {
        icon: Rocket,
        number: "05",
        title: "Lancio & Supporto",
        text: "Pubblichiamo il progetto e ti accompagniamo anche dopo il lancio.",
    },
];

export default function ProcessSection() {
    return (
        <section
            id="process"
            className="relative overflow-hidden bg-[#FFFDF8] px-5 py-24 text-black"
        >
            <div className="absolute right-[-120px] top-20 h-72 w-72 rounded-full bg-[#FFB800]/10 blur-[110px]" />

            <div className="relative z-10 mx-auto max-w-7xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.25 }}
                    variants={fadeUp}
                    className="max-w-3xl"
                >
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFB800]">
                        Processo
                    </p>

                    <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                        Un processo pensato per il tuo{" "}
                        <span className="text-[#FFB800]">successo.</span>
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-black/60 md:text-lg">
                        Seguiamo un metodo chiaro e professionale per trasformare la tua
                        idea in un sito moderno, veloce e pronto a crescere.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-6 lg:grid-cols-5">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.number}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.2 }}
                                variants={fadeUp}
                                whileHover={{ y: -8 }}
                                className="group relative rounded-[32px] border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#FFB800]/40 hover:shadow-[0_25px_80px_rgba(255,184,0,0.14)]"
                            >
                                <div className="mb-6 flex items-center justify-between lg:flex-col lg:items-start lg:gap-6">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-[#FFB800]/40 text-[#FFB800] transition group-hover:bg-[#FFB800] group-hover:text-black">
                                        <Icon size={30} />
                                    </div>

                                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#FFB800]/60 text-lg font-bold text-[#FFB800]">
                    {step.number}
                  </span>
                                </div>

                                <h3 className="text-xl font-bold transition group-hover:text-[#FFB800]">
                                    {step.title}
                                </h3>

                                <p className="mt-4 leading-7 text-black/55">
                                    {step.text}
                                </p>

                                {index !== steps.length - 1 && (
                                    <div className="absolute left-14 top-[92px] h-8 w-[1px] bg-[#FFB800]/30 lg:left-auto lg:right-[-14px] lg:top-14 lg:h-[1px] lg:w-7" />
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-14 flex justify-center">
                    <a
                        href="#contact"
                        className="flex w-full max-w-[420px] items-center justify-center gap-4 rounded-full border border-[#FFB800] px-8 py-5 text-base font-bold text-[#FFB800] transition hover:bg-[#FFB800] hover:text-black"
                    >
                        Inizia il tuo progetto
                        <Rocket size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
}