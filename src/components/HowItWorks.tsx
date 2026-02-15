"use client";

import { motion } from "motion/react";

const steps = [
    {
        number: "01",
        title: "CLICK THE BUTTON",
        description:
            "Fill out a brief form with your Instagram handle, follower count, and contact info. Takes 30 seconds.",
    },
    {
        number: "02",
        title: "EXPLAIN WHAT YOU WANT",
        description:
            "We hop on a call to understand your niche, audience pain points, and product ideas. We do the thinking together.",
    },
    {
        number: "03",
        title: "GET YOUR PRODUCT",
        description:
            "We build your custom software product, give you promo materials and referral links. You launch, you earn. Risk-free.",
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative py-24 md:py-32 bg-brutal-dark">
            {/* Top border */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-brutal-border" />

            <div className="section-container">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.15, ease: "linear" }}
                    className="text-center mb-20"
                >
                    <p className="font-display text-xs tracking-[0.3em] text-brutal-muted mb-3 uppercase">
                        SIMPLE PROCESS
                    </p>
                    <h2 className="font-display font-bold text-section uppercase text-white">
                        HOW IT WORKS
                    </h2>
                    <div className="w-20 h-1 bg-silver mt-4 mx-auto" />
                </motion.div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: i * 0.12,
                                duration: 0.15,
                                ease: "linear",
                            }}
                            className="relative p-8 md:p-10 border border-brutal-border group"
                        >
                            {/* Step number */}
                            <span className="font-display text-7xl md:text-8xl font-bold text-silver/10 block mb-4 leading-none">
                                {step.number}
                            </span>

                            {/* Arrow connector (desktop only) */}
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-3 z-10">
                                    <div className="w-6 h-6 border-t-2 border-r-2 border-silver rotate-45" />
                                </div>
                            )}

                            <h3 className="font-display font-bold text-card-title uppercase text-white mb-4">
                                {step.title}
                            </h3>
                            <p className="text-brutal-muted font-body text-sm leading-relaxed">
                                {step.description}
                            </p>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-silver group-hover:w-full" style={{ transition: "width 0.15s linear" }} />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.15 }}
                    className="text-center mt-16"
                >
                    <a href="#cta" className="brutal-btn-primary text-base px-12 py-5">
                        START NOW — IT&apos;S FREE
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
