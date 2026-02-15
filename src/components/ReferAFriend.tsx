"use client";

import { motion } from "motion/react";

export default function ReferAFriend() {
    return (
        <section id="refer" className="relative py-24 md:py-32 bg-black">
            {/* Top border */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-brutal-border" />

            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left — Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, ease: "linear" }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Network graphic */}
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            {/* Center node */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-silver flex items-center justify-center">
                                <span className="font-display font-bold text-black text-sm">YOU</span>
                            </div>

                            {/* Connected nodes */}
                            {[
                                { top: "10%", left: "20%", label: "01" },
                                { top: "5%", left: "65%", label: "02" },
                                { top: "45%", left: "85%", label: "03" },
                                { top: "80%", left: "70%", label: "04" },
                                { top: "75%", left: "15%", label: "05" },
                                { top: "40%", left: "5%", label: "06" },
                            ].map((node, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.08, duration: 0.1 }}
                                    className="absolute w-10 h-10 border-2 border-silver/40 flex items-center justify-center"
                                    style={{ top: node.top, left: node.left }}
                                >
                                    <span className="font-display text-xs text-silver/60">{node.label}</span>
                                </motion.div>
                            ))}

                            {/* Connection lines (SVG) */}
                            <svg
                                className="absolute inset-0 w-full h-full"
                                viewBox="0 0 320 320"
                                fill="none"
                                stroke="rgba(192,192,192,0.15)"
                                strokeWidth="1"
                            >
                                <line x1="160" y1="160" x2="84" y2="52" />
                                <line x1="160" y1="160" x2="228" y2="36" />
                                <line x1="160" y1="160" x2="292" y2="164" />
                                <line x1="160" y1="160" x2="244" y2="276" />
                                <line x1="160" y1="160" x2="68" y2="260" />
                                <line x1="160" y1="160" x2="36" y2="148" />
                            </svg>
                        </div>
                    </motion.div>

                    {/* Right — Text */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.15, ease: "linear" }}
                        >
                            <p className="font-display text-xs tracking-[0.3em] text-brutal-muted mb-3 uppercase">
                                GROW TOGETHER
                            </p>
                            <h2 className="font-display font-bold text-section uppercase text-white mb-6">
                                BRING YOUR CREW
                            </h2>
                            <div className="w-20 h-1 bg-silver mb-8" />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.15, ease: "linear" }}
                            className="text-white text-lg md:text-xl font-display font-medium mb-6"
                        >
                            Know other creators who deserve better monetization?
                            Refer them and unlock exclusive benefits.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.15, ease: "linear" }}
                            className="space-y-4 mb-10"
                        >
                            {[
                                "Priority product development for your brand",
                                "Better revenue splits for top referrers",
                                "Early access to new platform features",
                                "Exclusive creator community access",
                            ].map((benefit, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-2 h-2 bg-silver mt-2 shrink-0" />
                                    <p className="text-brutal-muted font-body text-sm md:text-base">
                                        {benefit}
                                    </p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.1 }}
                        >
                            <a href="#cta" className="brutal-btn-primary text-sm px-8 py-4 inline-block">
                                REFER A CREATOR
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
