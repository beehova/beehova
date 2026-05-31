import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";

import { projects } from "@/constants/projects";
import Navbar from "@/components/layout/Navbar";

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;

    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Navbar onContactClick={() => {}}/>

            <section className="px-5 pb-24 pt-32">
                <div className="mx-auto max-w-6xl">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-black/60 transition hover:text-[#FFB800]"
                    >
                        <ArrowLeft size={18} />
                        Torna alla Home
                    </Link>

                    <div className="mt-10">
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FFB800]">
                            {project.category}
                        </p>

                        <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-black md:text-6xl">
                            {project.title}
                        </h1>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-black/60">
                            {project.description}
                        </p>
                    </div>

                    <div className="relative mt-12 h-[320px] overflow-hidden rounded-[36px] bg-[#F5F5F5] md:h-[560px]">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                    <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_320px]">
                        <div>
                            <h2 className="text-2xl font-bold">Descrizione del progetto</h2>

                            <p className="mt-4 leading-8 text-black/60">
                                {project.description}
                            </p>
                        </div>

                        <div className="rounded-[30px] bg-[#FAFAFA] p-6">
                            <h3 className="text-lg font-bold">Tecnologie usate</h3>

                            <div className="mt-5 flex flex-wrap gap-3">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black/70"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>

                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-8 flex items-center justify-center gap-2 rounded-full bg-[#FFB800] px-6 py-4 text-sm font-bold text-black"
                            >
                                Visita il sito
                                <ExternalLink size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}