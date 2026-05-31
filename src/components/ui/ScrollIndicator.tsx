"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
    return (
        <motion.a
            href="#services"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        >
            <div className="flex h-10 w-6 justify-center rounded-full border border-black/25 p-1">
                <motion.div
                    animate={{ y: [0, 14, 0] }}
                    transition={{ repeat: Infinity, duration: 1.4 }}
                    className="h-2 w-1 rounded-full bg-[#FFB800]"
                />
            </div>

            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-black/40">
        Scorri
      </span>
        </motion.a>
    );
}