import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Beehova | Sviluppo Web & Design Digitale",
    description:
        "Beehova crea siti web moderni, responsive e ottimizzati SEO per aziende, brand e professionisti.",
    keywords: [
        "Beehova",
        "sviluppo web",
        "web design",
        "siti web",
        "portfolio",
        "SEO",
        "Next.js",
    ],
    authors: [{ name: "Beehova" }],
    creator: "Beehova",
    openGraph: {
        title: "Beehova | Sviluppo Web & Design Digitale",
        description:
            "Siti web moderni, veloci e professionali per far crescere il tuo brand online.",
        type: "website",
        locale: "it_IT",
        siteName: "Beehova",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="it">
        <body>{children}</body>
        </html>
    );
}