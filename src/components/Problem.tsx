"use client";

import { motion } from "motion/react";

const problems = [
    {
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="#FF0055" strokeWidth="2">
                <rect x="4" y="8" width="24" height="16" />
                <line x1="4" y1="16" x2="28" y2="16" />
                <line x1="12" y1="8" x2="12" y2="24" />
            </svg>
        ),
        title: "LOW-VALUE BRAND DEALS",
        description:
            "Brands underpay creators despite the value they generate. A typical sponsored post pays a few thousand rupees, regardless of reach.",
    },
    {
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="#FF0055" strokeWidth="2">
                <circle cx="16" cy="16" r="12" />
                <line x1="10" y1="20" x2="22" y2="12" />
                <line x1="22" y1="12" x2="22" y2="18" />
                <line x1="22" y1="12" x2="16" y2="12" />
            </svg>
        ),
        title: "NO AD REVENUE",
        description:
            "Platform ad revenue in Pakistan is extremely low. 50,000 views might generate Rs. 500 or less — barely enough for a meal.",
    },
    {
        icon: (
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="#FF0055" strokeWidth="2">
                <rect x="6" y="12" width="20" height="14" />
                <polyline points="6,12 16,4 26,12" />
                <line x1="6" y1="18" x2="26" y2="18" />
            </svg>
        ),
        title: "PHYSICAL PRODUCT NIGHTMARE",
        description:
            "Inventory costs, delivery complications, product damage, and thin margins. Physical merch is a headache creators don't need.",
    },
];

export default function Problem() {
    return (
        <section id="problem" className="relative py-24 md:py-32 bg-black">
            {/* Diagonal divider */}
            <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
                <div
                    className="w-full h-full bg-brutal-dark"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                />
            </div>

            <div className="section-container pt-8">
                {/* Section title */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.15, ease: "linear" }}
                    className="mb-16"
                >
                    <p className="font-display text-xs tracking-[0.3em] text-brutal-muted mb-3 uppercase">
                        STRUGGLING WITH 
                    </p>
                    <h2 className="font-display font-bold text-section uppercase text-brutal-red">
                        MONETIZATION?
                    </h2>
                    <div className="w-20 h-1 bg-brutal-red mt-4" />
                </motion.div>

                {/* Problem cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {problems.map((problem, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: i * 0.1,
                                duration: 0.15,
                                ease: "linear",
                            }}
                            className="group relative bg-brutal-dark border-l-4 border-l-brutal-red border border-brutal-border p-8 hover:translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_rgba(255,0,85,0.2)] transition-none cursor-default"
                            style={{
                                transition: "none",
                            }}
                            whileHover={{
                                x: 4,
                                y: -4,
                                boxShadow: "8px 8px 0px rgba(255,0,85,0.2)",
                            }}
                        >
                            <div className="mb-6">{problem.icon}</div>
                            <h3 className="font-display font-bold text-card-title uppercase text-white mb-4">
                                {problem.title}
                            </h3>
                            <p className="text-brutal-muted font-body text-sm leading-relaxed">
                                {problem.description}
                            </p>
                            {/* Card number */}
                            <span className="absolute top-4 right-4 font-display text-6xl font-bold text-brutal-red/10">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
