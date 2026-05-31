"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FloatingElements from "@/components/ui/FloatingElements";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import {
    ArrowUpRight,
    Folder,
    TrendingUp,
    Zap,
} from "lucide-react";

import {
    fadeLeft,
    fadeRight,
    fadeUp,
} from "@/lib/motion";

export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-white px-5 pb-16 pt-32"
        >
            <FloatingElements />
            <ScrollIndicator />
            {/* BLUR BACKGROUNDS */}
            <div className="absolute left-[-120px] top-[120px] h-[280px] w-[280px] rounded-full bg-[#FFB800]/20 blur-[110px]" />

            <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-[#FFB800]/15 blur-[120px]" />

            {/* GRID */}
            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

                {/* LEFT CONTENT */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.25 }}
                    variants={fadeLeft}
                >
                    {/* BADGE */}
                    <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#FFB800]/30 bg-[#FFFBF2] px-5 py-3">
                        <div className="h-2 w-2 rounded-full bg-[#FFB800]" />

                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B8860B]">
                            Studio Digitale
                        </p>
                    </div>

                    {/* TITLE */}
                    <h1 className="max-w-2xl text-5xl font-bold leading-tight text-black md:text-6xl lg:text-7xl">
                        Creiamo siti web che fanno crescere il tuo brand online.
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="mt-7 max-w-xl text-base leading-8 text-black/60 md:text-lg">
                        Beehova realizza siti web moderni, veloci e responsive
                        per aziende che vogliono distinguersi nel mondo digitale.
                    </p>

                    {/* BUTTONS */}
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                        <motion.a
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            href="#contact"
                            className="flex items-center justify-center gap-2 rounded-full bg-[#FFB800] px-7 py-4 text-sm font-bold text-black shadow-[0_15px_35px_rgba(255,184,0,0.3)]"
                        >
                            Iniziamo
                            <ArrowUpRight size={18} />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            href="#projects"
                            className="flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-7 py-4 text-sm font-semibold text-black transition hover:border-[#FFB800]"
                        >
                            Vedi Progetti
                        </motion.a>
                    </div>

                    {/* STATS */}
                    <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">

                        {/* CARD 1 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.25 }}
                            variants={fadeUp}
                            whileHover={{ y: -6 }}
                            className="rounded-3xl border border-black/5 bg-[#FAFAFA] p-5 transition"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                                <Folder
                                    size={22}
                                    className="text-[#FFB800]"
                                />
                            </div>

                            <h3 className="text-3xl font-bold text-black">
                                +12
                            </h3>

                            <p className="mt-1 text-sm text-black/50">
                                Progetti completati
                            </p>
                        </motion.div>

                        {/* CARD 2 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.25 }}
                            variants={fadeUp}
                            whileHover={{ y: -6 }}
                            className="rounded-3xl border border-black/5 bg-[#FAFAFA] p-5 transition"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                                <Zap
                                    size={22}
                                    className="text-[#FFB800]"
                                />
                            </div>

                            <h3 className="text-3xl font-bold text-black">
                                Fast
                            </h3>

                            <p className="mt-1 text-sm text-black/50">
                                Prestazioni elevate
                            </p>
                        </motion.div>

                        {/* CARD 3 */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.25 }}
                            variants={fadeUp}
                            whileHover={{ y: -6 }}
                            className="rounded-3xl border border-black/5 bg-[#FAFAFA] p-5 transition"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                                <TrendingUp
                                    size={22}
                                    className="text-[#FFB800]"
                                />
                            </div>

                            <h3 className="text-3xl font-bold text-black">
                                SEO
                            </h3>

                            <p className="mt-1 text-sm text-black/50">
                                Ottimizzato Google
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.25 }}
                    variants={fadeRight}
                    className="relative"
                >
                    {/* FLOATING SHAPES */}
                    <motion.div
                        animate={{
                            y: [0, -18, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 5,
                        }}
                        className="absolute left-8 top-10 h-20 w-20 rounded-[30px] border border-[#FFB800]/20 rotate-12"
                    />

                    <motion.div
                        animate={{
                            y: [0, 15, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 6,
                        }}
                        className="absolute right-10 top-24 h-14 w-14 rounded-[20px] border border-[#FFB800]/20 -rotate-12"
                    />

                    {/* MAIN IMAGE */}
                    <motion.div
                        animate={{
                            y: [0, -12, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 4,
                        }}
                        className="relative z-10"
                    >
                        <Image
                            src="/images/hero/hero-illustration.svg"
                            alt="Beehova Hero"
                            width={700}
                            height={700}
                            priority
                            className="h-auto w-full object-contain"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}