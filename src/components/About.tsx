"use client";

import { motion } from "motion/react";

export default function About() {
    return (
        <section id="about" className="relative pt-28 pb-24 md:pt-36 md:pb-32 bg-black">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-brutal-border" />

            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="font-display text-xs tracking-[0.3em] text-brutal-muted uppercase mb-4">
                        WHO WE ARE
                    </p>
                    <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase leading-none mb-12">
                        ABOUT <span className="text-silver">H1GROW</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    {/* Left — Story */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    >
                        <h3 className="font-display font-bold text-xl uppercase mb-6 text-silver">
                            OUR MISSION
                        </h3>
                        <p className="font-body text-brutal-muted leading-relaxed mb-6">
                            H1Grow exists for one reason: to help Pakistani creators turn their
                            influence into real, recurring revenue. We build personalized software
                            products — apps, platforms, tools — that your audience will actually pay for.
                        </p>
                        <p className="font-body text-brutal-muted leading-relaxed mb-6">
                            Most creators are stuck trading time for money through sponsorships and
                            shoutouts. We flip the model. We handle the tech, the design, the
                            deployment — you bring the audience and the vision.
                        </p>
                        <p className="font-body text-brutal-muted leading-relaxed">
                            Zero risk. Zero upfront cost. Just genuine partnership where we grow
                            together.
                        </p>
                    </motion.div>

                    {/* Right — Values */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        <h3 className="font-display font-bold text-xl uppercase mb-6 text-silver">
                            WHAT WE BELIEVE
                        </h3>
                        <div className="space-y-6">
                            {[
                                {
                                    title: "CREATORS DESERVE MORE",
                                    text: "Your audience is your most valuable asset. We help you unlock its full potential with products that scale.",
                                },
                                {
                                    title: "NO GATEKEEPING",
                                    text: "You don't need to be a developer or have startup capital. We bring the tech — you bring the vision.",
                                },
                                {
                                    title: "BUILT IN PAKISTAN",
                                    text: "We're a Pakistani team building for Pakistani creators first. We understand the market, the culture, and the hustle.",
                                },
                                {
                                    title: "LONG-TERM PARTNERSHIPS",
                                    text: "We don't do one-off projects. We build alongside you, iterate based on your audience, and grow together.",
                                },
                            ].map((item, i) => (
                                <div key={i} className="border-l-2 border-silver/30 pl-5">
                                    <p className="font-display font-bold text-sm uppercase tracking-wider mb-1 text-white">
                                        {item.title}
                                    </p>
                                    <p className="font-body text-sm text-brutal-muted leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
