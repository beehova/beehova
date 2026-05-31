"use client";

import { motion } from "framer-motion";

import {
    Globe,
    MonitorSmartphone,
    Palette,
    Search,
} from "lucide-react";

import {
    fadeLeft,
    fadeRight,
    fadeUp,
} from "@/lib/motion";

const services = [
    {
        icon: Globe,
        title: "Sviluppo Web",
        description:
            "Realizziamo siti web moderni, veloci e responsive per ogni tipo di attività.",
    },
    {
        icon: MonitorSmartphone,
        title: "Responsive Design",
        description:
            "I tuoi contenuti saranno perfetti su desktop, tablet e smartphone.",
    },
    {
        icon: Palette,
        title: "UI / UX Design",
        description:
            "Creiamo interfacce eleganti e intuitive per migliorare l’esperienza utente.",
    },
    {
        icon: Search,
        title: "SEO Optimization",
        description:
            "Ottimizziamo il sito per Google per migliorare visibilità e performance.",
    },
];

type ServicesSectionProps = {
    onContactClick: () => void;
};

export default function ServicesSection({
                                            onContactClick,
                                        }: ServicesSectionProps) {
    return (
        <section
            id="services"
            className="relative overflow-hidden bg-white px-5 py-24"
        >
            {/* BLUR */}
            <div className="absolute right-[-120px] top-[120px] h-[280px] w-[280px] rounded-full bg-[#FFB800]/10 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* TOP */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeLeft}
                    className="max-w-3xl"
                >
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFB800]">
                        Servizi
                    </p>

                    <h2 className="text-4xl font-bold leading-tight text-black md:text-5xl">
                        Soluzioni digitali moderne per il tuo business.
                    </h2>

                    <p className="mt-6 text-base leading-8 text-black/60 md:text-lg">
                        Offriamo servizi di sviluppo web, design e ottimizzazione
                        per aiutare aziende e professionisti a crescere online.
                    </p>
                </motion.div>

                {/* CARDS */}
                <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeUp}
                                transition={{
                                    delay: index * 0.08,
                                }}
                                whileHover={{
                                    y: -8,
                                }}
                                className="group rounded-[34px] border border-black/5 bg-[#FAFAFA] p-7 transition"
                            >
                                {/* ICON */}
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow-sm transition group-hover:bg-[#FFB800]">
                                    <Icon
                                        size={28}
                                        className="text-[#FFB800] transition group-hover:text-black"
                                    />
                                </div>

                                {/* TITLE */}
                                <h3 className="text-2xl font-bold text-black">
                                    {service.title}
                                </h3>

                                {/* TEXT */}
                                <p className="mt-4 leading-8 text-black/55">
                                    {service.description}
                                </p>

                                {/* LINE */}
                                <div className="mt-7 h-[2px] w-14 bg-[#FFB800]" />
                            </motion.div>
                        );
                    })}
                </div>

                {/* BOTTOM BOX */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={fadeRight}
                    className="mt-16 rounded-[40px] bg-black px-8 py-10 text-white md:px-14"
                >
                    <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-[#FFB800]">
                                Beehova
                            </p>

                            <h3 className="mt-4 max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
                                Trasformiamo idee in esperienze digitali professionali.
                            </h3>
                        </div>

                        <button
                            onClick={onContactClick}
                            className="rounded-full bg-[#FFB800] px-7 py-4 text-sm font-bold text-black transition hover:scale-[1.03]"
                        >
                            Contattaci
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}