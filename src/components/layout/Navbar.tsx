"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { FaInstagram, FaBehance, FaLinkedinIn } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "Servizi", href: "#services" },
        { label: "Progetti", href: "#projects" },
        { label: "Chi siamo", href: "#about" },
        { label: "Contatti", href: "#contact" },
    ];

    return (
        <>
            <header
                className={`fixed left-0 top-0 z-[9999] w-full transition-all duration-300 ${
                    scrolled
                        ? "bg-white/70 shadow-[0_12px_35px_rgba(0,0,0,0.08)] backdrop-blur-xl"
                        : "bg-transparent"
                }`}
            >
                <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">

                    {/* LOGO */}
                    <a href="#home" className="flex items-center">
                        <Image
                            src="/images/logos/logo.svg"
                            alt="Beehova logo"
                            width={155}
                            height={45}
                            priority
                            className="h-auto w-[135px] md:w-[155px]"
                        />
                    </a>

                    {/* DESKTOP LINKS */}
                    <div className="hidden items-center gap-9 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="relative text-sm font-medium text-black/70 transition duration-300 hover:text-[#FFB800] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#FFB800] after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* DESKTOP BUTTON */}
                    <a
                        href="#contact"
                        className="hidden items-center gap-2 rounded-full border border-[#FFB800] px-6 py-3 text-sm font-semibold transition hover:bg-[#FFB800] md:flex"
                    >
                        Let&apos;s Talk
                        <ArrowUpRight size={17} />
                    </a>

                    {/* MOBILE BUTTON */}
                    <button
                        type="button"
                        onClick={() => setMobileMenu(true)}
                        className="relative z-[99999] flex h-11 w-11 items-center justify-center  md:hidden"
                        aria-label="Open menu"
                    >
                        <Menu size={24} />
                    </button>
                </nav>
            </header>

            <AnimatePresence>
                {mobileMenu && (
                    <>
                        {/* OVERLAY */}
                        <motion.div
                            onClick={() => setMobileMenu(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[10000] bg-black/25 backdrop-blur-sm md:hidden"
                        />

                        {/* MOBILE MENU */}
                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                duration: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="fixed right-0 top-0 z-[10001] flex h-screen w-[84%] max-w-[380px] flex-col rounded-l-[40px] bg-white px-6 py-6 shadow-2xl md:hidden"
                        >

                            {/* TOP */}
                            <div className="flex items-center justify-between">
                                <Image
                                    src="/images/logos/logo.svg"
                                    alt="Beehova logo"
                                    width={140}
                                    height={42}
                                    className="h-auto w-[125px]"
                                />

                                <button
                                    onClick={() => setMobileMenu(false)}
                                    className="flex h-10 w-10 items-center justify-center rounded-full  transition hover:bg-[#FFB800]"
                                    aria-label="Close menu"
                                >
                                    <X size={22} />
                                </button>
                            </div>

                            {/* LINKS */}
                            <div className="mt-14 flex flex-col gap-2">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => setMobileMenu(false)}
                                        initial={{ opacity: 0, x: 24 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.06 }}
                                        className="group flex items-center justify-between rounded-2xl px-4 py-4 text-[18px] font-medium text-black/80 transition hover:bg-[#FAFAFA] hover:text-black"
                                    >
                                        {link.label}

                                        <ArrowUpRight
                                            size={18}
                                            className="text-[#FFB800] transition group-hover:rotate-45"
                                        />
                                    </motion.a>
                                ))}
                            </div>

                            {/* BUTTON */}
                            <a
                                href="#contact"
                                onClick={() => setMobileMenu(false)}
                                className="mt-8 flex items-center justify-center gap-2 rounded-full bg-[#FFB800] px-6 py-4 text-sm font-bold text-black shadow-[0_12px_30px_rgba(255,184,0,0.25)]"
                            >
                                Parliamone

                                <ArrowUpRight size={18} />
                            </a>

                            {/* SOCIALS */}
                            <div className="mt-auto pb-4">
                                <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.25em] text-black/40">
                                    Follow us
                                </p>

                                <div className="flex items-center justify-center gap-4">

                                    <a
                                        href="#"
                                        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FAFAFA] text-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFB800]"
                                    >
                                        <FaInstagram />
                                    </a>

                                    <a
                                        href="#"
                                        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FAFAFA] text-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFB800]"
                                    >
                                        <FaBehance />
                                    </a>

                                    <a
                                        href="#"
                                        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FAFAFA] text-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFB800]"
                                    >
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}