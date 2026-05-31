"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { fadeUp } from "@/lib/motion";

const testimonials = [
    {
        name: "Marco Rossi",
        role: "Founder, Ristorante Locale",
        text: "Beehova ha trasformato la nostra presenza online con un sito elegante, veloce e facile da usare.",
    },
    {
        name: "Giulia Bianchi",
        role: "Marketing Manager",
        text: "Design moderno, comunicazione chiara e risultato professionale. Il progetto è stato curato nei dettagli.",
    },
    {
        name: "Luca Ferri",
        role: "Freelance Designer",
        text: "Un’esperienza ottima: sito responsive, animazioni fluide e una struttura davvero professionale.",
    },
];

export default function TestimonialsSection() {
    return (
        <section
            id="testimonials"
            className="relative overflow-hidden bg-[#FFFDF8] px-5 py-24"
        >
            <div className="absolute right-[-120px] top-20 h-72 w-72 rounded-full bg-[#FFB800]/10 blur-[60px]" />

            <div className="relative z-10 mx-auto max-w-7xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.25 }}
                    variants={fadeUp}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFB800]">
                        Testimonials
                    </p>

                    <h2 className="text-4xl font-bold leading-tight text-black md:text-5xl">
                        Cosa dicono i nostri clienti.
                    </h2>

                    <p className="mt-6 text-base leading-8 text-black/60 md:text-lg">
                        Feedback da clienti che hanno scelto Beehova per costruire una
                        presenza online moderna e professionale.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={fadeUp}
                            transition={{ delay: index * 0.08 }}
                            whileHover={{ y: -8 }}
                            className="group rounded-[34px] border border-black/5 bg-white p-7 shadow-sm transition-all duration-300 hover:border-[#FFB800]/40 hover:shadow-lg_rgba(255,184,0,0.14)]"
                        >
                            <Quote
                                size={34}
                                className="text-[#FFB800]"
                            />

                            <div className="mt-6 flex gap-1 text-[#FFB800]">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>

                            <p className="mt-6 leading-8 text-black/60">
                                “{item.text}”
                            </p>

                            <div className="mt-8 border-t border-black/5 pt-6">
                                <h3 className="text-lg font-bold text-black transition group-hover:text-[#FFB800]">
                                    {item.name}
                                </h3>

                                <p className="mt-1 text-sm text-black/45">
                                    {item.role}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}