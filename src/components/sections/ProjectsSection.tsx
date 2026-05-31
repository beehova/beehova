"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/constants/projects";
import { fadeUp } from "@/lib/motion";

export default function ProjectsSection() {
    return (
        <section id="projects" className="bg-[#FAFAFA] px-5 py-24">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.25 }}
                    variants={fadeUp}
                    className="max-w-3xl"
                >
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFB800]">
                        Progetti
                    </p>

                    <h2 className="text-4xl font-bold leading-tight text-black md:text-5xl">
                        Alcuni lavori realizzati da Beehova.
                    </h2>

                    <p className="mt-6 text-base leading-8 text-black/60 md:text-lg">
                        Una selezione di progetti digitali creati con attenzione al design,
                        alla velocità e all’esperienza utente.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <motion.div
                            key={project.slug}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            variants={fadeUp}
                            whileHover={{ y: -8 }}
                            className="group overflow-hidden rounded-[36px] bg-white shadow-sm"
                        >
                            <Link href={`/projects/${project.slug}`}>
                                <div className="relative h-[260px] overflow-hidden bg-[#F5F5F5] md:h-[340px]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-7">
                                    <p className="text-sm font-semibold text-[#FFB800]">
                                        {project.category}
                                    </p>

                                    <div className="mt-3 flex items-center justify-between gap-4">
                                        <h3 className="text-2xl font-bold text-black">
                                            {project.title}
                                        </h3>

                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFB800]">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>

                                    <p className="mt-4 leading-7 text-black/55">
                                        {project.shortDescription}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}