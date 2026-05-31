"use client";

import { motion } from "framer-motion";

export default function FloatingElements() {
    return (
        <>
            {/* HEXAGON 1 */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 8, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 6,
                }}
                className="absolute left-[8%] top-[20%] h-20 w-20 rounded-[28px] border border-[#FFB800]/20"
            />

            {/* HEXAGON 2 */}
            <motion.div
                animate={{
                    y: [0, 18, 0],
                    rotate: [0, -10, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 7,
                }}
                className="absolute right-[10%] top-[28%] h-14 w-14 rounded-[20px] border border-[#FFB800]/20"
            />

            {/* DOTS */}
            <motion.div
                animate={{
                    opacity: [0.4, 1, 0.4],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                }}
                className="absolute bottom-[18%] left-[12%] grid grid-cols-3 gap-2"
            >
                {Array.from({ length: 9 }).map((_, index) => (
                    <div
                        key={index}
                        className="h-1.5 w-1.5 rounded-full bg-[#FFB800]/40"
                    />
                ))}
            </motion.div>

            {/* BLUR CIRCLE */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                }}
                className="absolute right-[15%] bottom-[10%] h-40 w-40 rounded-full bg-[#FFB800]/10 blur-[80px]"
            />
        </>
    );
}