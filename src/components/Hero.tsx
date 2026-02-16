"use client";

import { motion } from "motion/react";

const wordVariants = {
    hidden: { y: 120, opacity: 0 },
    visible: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: i * 0.12,
            duration: 0.6,
            ease: "easeOut" as const,
        },
    }),
};

export default function Hero() {
    const headline = "MONETIZE YOUR CONTENT";
    const words = headline.split(" ");

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center items-center grid-bg overflow-hidden"
        >
            {/* Geometric accent shapes */}
            <div className="absolute top-20 right-10 w-32 h-32 border-2 border-silver/10 rotate-45 hidden md:block" />
            <div className="absolute bottom-32 left-16 w-20 h-20 border-2 border-silver/5 hidden md:block" />
            <div className="absolute top-1/3 left-8 w-px h-40 bg-silver/10 hidden md:block" />
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-silver/20" />
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-silver/15" />

            <div className="section-container text-center relative z-10 pt-20">
                {/* Overline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.05, duration: 0.5, ease: "easeOut" }}
                    className="font-display text-xs md:text-sm tracking-[0.3em] text-brutal-muted uppercase mb-8"
                >
                     FOR PAKISTANI CREATORS
                </motion.p>

                {/* Main Headline */}
                <h1 className="font-display font-bold text-hero uppercase leading-none mb-8 overflow-hidden">
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            variants={wordVariants}
                            className={`inline-block mr-[0.3em] ${word === "MONETIZE" ? "text-silver" : "text-white"
                                }`}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                    className="text-brutal-muted text-body-lg max-w-2xl mx-auto mb-12 font-body"
                >
                    Personalized software products your audience will
                    love.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a href="#cta" className="brutal-btn-primary text-base px-10 py-5">
                        GET STARTED
                    </a>
                    <a href="#how-it-works" className="brutal-btn-secondary text-base px-10 py-5">
                        HOW IT WORKS
                    </a>
                </motion.div>

                {/* Stats bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                    className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
                >
                    {[
                        { value: "0%", label: "RISK" },
                        { value: "∞", label: "POTENTIAL" },
                        { value: "100%", label: "MANAGED" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <p className="font-display font-bold text-3xl md:text-4xl text-silver">
                                {stat.value}
                            </p>
                            <p className="font-display text-xs tracking-[0.2em] text-brutal-muted mt-1">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom divider line */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-brutal-border" />

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="w-5 h-8 border-2 border-brutal-muted rounded-none flex justify-center pt-1">
                    <div className="w-1 h-2 bg-silver" />
                </div>
            </motion.div>
        </section>
    );
}
