"use client";

import { X, Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type ContactPopupProps = {
    open: boolean;
    onClose: () => void;
};

export default function ContactPopup({ open, onClose }: ContactPopupProps) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/35 px-5 backdrop-blur-sm">
            <div className="w-full max-w-md rounded-[32px] bg-white p-6 shadow-2xl">
                <div className="mb-7 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FFB800]">
                            Contatto
                        </p>

                        <h2 className="mt-2 text-2xl font-bold text-black">
                            Parliamo del tuo progetto
                        </h2>
                    </div>

                    <button
                        onClick={onClose}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FAFAFA]"
                    >
                        <X size={22} />
                    </button>
                </div>

                <div className="grid gap-4">
                    <a
                        href="tel:+39123456789"
                        className="group flex items-center gap-4 rounded-3xl border border-black/5 bg-[#FAFAFA] p-5 transition hover:border-[#FFB800]/40 hover:bg-white hover:shadow-[0_15px_45px_rgba(255,184,0,0.12)]"
                    >
                        <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white text-[#FFB800] shadow-sm group-hover:bg-[#FFB800] group-hover:text-black">
                            <Phone size={24} />
                        </div>

                        <div>
                            <h3 className="font-bold text-black">Chiamaci</h3>
                            <p className="mt-1 text-sm text-black/55">+39 123 456 789</p>
                        </div>
                    </a>

                    <a
                        href="https://wa.me/39123456789"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-4 rounded-3xl border border-black/5 bg-[#FAFAFA] p-5 transition hover:border-[#FFB800]/40 hover:bg-white hover:shadow-[0_15px_45px_rgba(255,184,0,0.12)]"
                    >
                        <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white text-[#25D366] shadow-sm group-hover:bg-[#25D366] group-hover:text-white">
                            <FaWhatsapp size={25} />
                        </div>

                        <div>
                            <h3 className="font-bold text-black">WhatsApp</h3>
                            <p className="mt-1 text-sm text-black/55">Scrivici su WhatsApp</p>
                        </div>
                    </a>

                    <a
                        href="mailto:hello@beehova.com"
                        className="group flex items-center gap-4 rounded-3xl border border-black/5 bg-[#FAFAFA] p-5 transition hover:border-[#FFB800]/40 hover:bg-white hover:shadow-[0_15px_45px_rgba(255,184,0,0.12)]"
                    >
                        <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-white text-[#FFB800] shadow-sm group-hover:bg-[#FFB800] group-hover:text-black">
                            <Mail size={24} />
                        </div>

                        <div>
                            <h3 className="font-bold text-black">Email</h3>
                            <p className="mt-1 text-sm text-black/55">hello@beehova.com</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}