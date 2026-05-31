"use client";

import Image from "next/image";

import {
    FaInstagram,
    FaBehance,
    FaLinkedinIn,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer
            id="contact"
            className="relative overflow-hidden bg-[#FFFDF8] px-5 pt-24"
        >
            {/* BLUR */}
            <div className="absolute right-[-120px] bottom-[-120px] h-[280px] w-[280px] rounded-full bg-[#FFB800]/10 blur-[110px]" />

            <div className="relative z-10 mx-auto max-w-7xl">

                {/* TOP */}
                <div className="grid gap-14 border-b border-black/5 pb-14 lg:grid-cols-[1.2fr_0.8fr]">

                    {/* LEFT */}
                    <div>
                        {/* LOGO */}
                        <Image
                            src="/images/logos/logo.svg"
                            alt="Beehova Logo"
                            width={170}
                            height={50}
                            className="h-auto w-[150px]"
                        />

                        <p className="mt-7 max-w-xl text-base leading-8 text-black/60">
                            Beehova crea siti web moderni, veloci e professionali
                            per aziende, brand e creatori che vogliono distinguersi online.
                        </p>

                        {/* SOCIALS */}
                        <div className="mt-8 flex items-center gap-4">

                            <a
                                href="#"
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFB800]"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFB800]"
                            >
                                <FaBehance />
                            </a>

                            <a
                                href="#"
                                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFB800]"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="grid gap-10 sm:grid-cols-2">

                        {/* LINKS */}
                        <div>
                            <h3 className="text-lg font-bold text-black">
                                Navigazione
                            </h3>

                            <div className="mt-6 flex flex-col gap-4">
                                <a
                                    href="#home"
                                    className="text-black/60 transition hover:text-[#FFB800]"
                                >
                                    Home
                                </a>

                                <a
                                    href="#services"
                                    className="text-black/60 transition hover:text-[#FFB800]"
                                >
                                    Servizi
                                </a>

                                <a
                                    href="#projects"
                                    className="text-black/60 transition hover:text-[#FFB800]"
                                >
                                    Progetti
                                </a>

                                <a
                                    href="#about"
                                    className="text-black/60 transition hover:text-[#FFB800]"
                                >
                                    Chi siamo
                                </a>
                            </div>
                        </div>


                        {/* CONTACT */}
                        <div>
                            <h3 className="text-lg font-bold text-black">
                                Contatti
                            </h3>

                            <div className="mt-6 flex flex-col gap-3">

                                {/* PHONE */}
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                                        <FaPhoneAlt className="text-[#FFB800]" />
                                    </div>

                                    <a
                                        href="tel:+39123456789"
                                        className="text-black/60 transition hover:text-[#FFB800]"
                                    >
                                        +39 123 456 789
                                    </a>
                                </div>

                                {/* EMAIL */}
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                                        <FaEnvelope className="text-[#FFB800]" />
                                    </div>

                                    <a
                                        href="mailto:hello@beehova.com"
                                        className="text-black/60 transition hover:text-[#FFB800]"
                                    >
                                        hello@beehova.com
                                    </a>
                                </div>

                                {/* LOCATION */}
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                                        <FaMapMarkerAlt className="text-[#FFB800]" />
                                    </div>

                                    <p className="text-black/60">
                                        Torino, Italia
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="flex flex-col items-center justify-between gap-5 py-7 text-center md:flex-row">

                    <p className="text-sm text-black/45">
                        © 2026 Beehova. Tutti i diritti riservati.
                    </p>

                    <p className="text-sm text-black/45">
                        Designed & Developed by Beehova
                    </p>
                </div>
            </div>
        </footer>
    );
}