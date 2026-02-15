"use client";

import { motion } from "motion/react";

const benefits = [
    "Digital — no inventory or delivery issues",
    "Customized to your niche and audience needs",
    "Subscription-based for recurring monthly revenue",
    "Fully managed — we handle dev, hosting & support",
    "Completely risk-free for creators",
];

export default function Solution() {
    return (
        <section id="solution" className="relative py-24 md:py-32 bg-black">
            {/* Thick divider */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-brutal-border" />

            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left — Text content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.15, ease: "linear" }}
                        >
                            <p className="font-display text-xs tracking-[0.3em] text-brutal-muted mb-3 uppercase">
                                WHAT WE DO
                            </p>
                            <h2 className="font-display font-bold text-section uppercase text-silver">
                                THE SOLUTION
                            </h2>
                            <div className="w-20 h-1 bg-silver mt-4 mb-8" />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.15, ease: "linear" }}
                            className="text-white text-xl md:text-2xl lg:text-3xl font-display font-medium leading-snug mb-8"
                        >
                            We build personalized software products{" "}
                            <span className="inline-block bg-silver text-black px-3 py-1 font-bold">
                                TAILORED TO YOUR BRAND
                            </span>{" "}
                            that your audience will pay for — every single month.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.15, ease: "linear" }}
                            className="text-brutal-muted text-body-lg font-body mb-10"
                        >
                            Think of it like this: instead of selling overpriced hoodies,
                            you sell software that actually helps your followers — and
                            earns you real, recurring income.
                        </motion.p>

                        {/* Benefits list */}
                        <div className="space-y-4">
                            {benefits.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.25 + i * 0.07,
                                        duration: 0.1,
                                        ease: "linear",
                                    }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-2 h-2 bg-silver mt-2 shrink-0" />
                                    <p className="text-white font-body text-sm md:text-base">
                                        {benefit}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Visual block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.2, ease: "linear" }}
                        className="relative"
                    >
                        <div className="relative border-2 border-brutal-border bg-brutal-dark p-8 md:p-12">
                            {/* Decorative corner marks */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-silver -translate-x-px -translate-y-px" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-silver translate-x-px -translate-y-px" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-silver -translate-x-px translate-y-px" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-silver translate-x-px translate-y-px" />

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 border-b border-brutal-border pb-4">
                                    <div className="w-3 h-3 bg-brutal-red" />
                                    <div className="w-3 h-3 bg-silver/50" />
                                    <div className="w-3 h-3 bg-silver" />
                                    <span className="text-brutal-muted text-xs font-display ml-auto">
                                        your-product.h1grow.com
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    <div className="h-8 bg-silver/10 w-3/4" />
                                    <div className="h-4 bg-silver/5 w-full" />
                                    <div className="h-4 bg-silver/5 w-5/6" />
                                    <div className="h-4 bg-silver/5 w-2/3" />
                                    <div className="mt-6 flex gap-3">
                                        <div className="h-10 bg-silver w-32 flex items-center justify-center">
                                            <span className="text-black text-xs font-display font-bold">SUBSCRIBE</span>
                                        </div>
                                        <div className="h-10 border-2 border-brutal-border w-32 flex items-center justify-center">
                                            <span className="text-brutal-muted text-xs font-display">LEARN MORE</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-3 mt-6">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="aspect-square bg-silver/5 border border-brutal-border" />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Offset shadow block */}
                        <div className="absolute inset-0 border-2 border-silver/20 translate-x-3 translate-y-3 -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
