import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CtaSection from "@/components/sections/CtaSection";
import Footer from "@/components/layout/Footer";

import { FaWhatsapp } from "react-icons/fa";
import ContactModal from "@/components/ui/ContactModal";

export default function Home() {
    return (
        <main className="overflow-hidden">
            <Navbar />
            <ContactModal />

            <a
                href="https://wa.me/39123456789"
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-5 right-5 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_15px_40px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110"
            >
                <FaWhatsapp size={34} />
            </a>

            <HeroSection />

            <AboutSection />

            <ServicesSection />

            <ProjectsSection />

            <ProcessSection />

            <WhyUsSection />

            <TestimonialsSection />

            <CtaSection />

            <Footer />
        </main>
    );
}