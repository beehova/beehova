"use client";

import { useState } from "react";
import { X, Send } from "lucide-react";

export default function ContactModal() {
    const [open, setOpen] = useState(false);

    const [fullName, setFullName] = useState("");
    const [projectType, setProjectType] = useState("");
    const [phone, setPhone] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [email, setEmail] = useState("");
    const [note, setNote] = useState("");

    const myWhatsappNumber = "39123456789";

    const sendToWhatsapp = () => {
        const message = `
Nuova richiesta da Beehova:

Nome completo: ${fullName}
Tipo di progetto: ${projectType}
Telefono: ${phone}
WhatsApp: ${whatsapp}
Email: ${email}
Note: ${note}
`;

        const url = `https://wa.me/${myWhatsappNumber}?text=${encodeURIComponent(
            message
        )}`;

        window.open(url, "_blank");
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="fixed bottom-5 right-5 z-[9999] rounded-full bg-[#FFB800] px-6 py-4 text-sm font-bold text-black shadow-lg"
            >
                Let&apos;s Talk
            </button>

            {open && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40 px-5 backdrop-blur-sm">
                    <div className="w-full max-w-xl rounded-[32px] bg-white p-6 shadow-2xl">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-2xl font-bold">Parliamo del tuo progetto</h2>

                            <button onClick={() => setOpen(false)}>
                                <X size={26} />
                            </button>
                        </div>

                        <div className="grid gap-4">
                            <input
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Nome completo"
                                className="rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-[#FFB800]"
                            />

                            <input
                                value={projectType}
                                onChange={(e) => setProjectType(e.target.value)}
                                placeholder="Tipo di progetto: ristorante, portfolio, azienda..."
                                className="rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-[#FFB800]"
                            />

                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Numero di telefono"
                                className="rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-[#FFB800]"
                            />

                            <input
                                value={whatsapp}
                                onChange={(e) => setWhatsapp(e.target.value)}
                                placeholder="Numero WhatsApp"
                                className="rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-[#FFB800]"
                            />

                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                className="rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-[#FFB800]"
                            />

                            <textarea
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                placeholder="Note"
                                rows={4}
                                className="resize-none rounded-2xl border border-black/10 px-5 py-4 outline-none focus:border-[#FFB800]"
                            />

                            <button
                                onClick={sendToWhatsapp}
                                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#FFB800] px-6 py-4 font-bold text-black"
                            >
                                Invia
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}