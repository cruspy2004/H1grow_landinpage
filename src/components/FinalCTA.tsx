"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function FinalCTA() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        instagram: "",
        followers: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder — replace with actual form handling
        setSubmitted(true);
    };

    return (
        <section id="cta" className="relative py-24 md:py-32 bg-black">
            {/* Top border */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-brutal-border" />

            {/* Background geometric accents */}
            <div className="absolute top-20 left-10 w-40 h-40 border border-silver/5 rotate-12 hidden lg:block" />
            <div className="absolute bottom-20 right-10 w-32 h-32 border border-silver/5 -rotate-6 hidden lg:block" />

            <div className="section-container max-w-2xl text-center relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.15, ease: "linear" }}
                >
                    <h2 className="font-display font-bold text-hero uppercase text-white mb-6">
                        READY TO GROW?
                    </h2>
                    <p className="text-brutal-muted text-body-lg font-body mb-4">
                        Join the first wave of Pakistani creators building real, recurring revenue.
                    </p>
                    <p className="text-brutal-red font-display font-bold text-sm tracking-widest uppercase mb-12">
                        People abroad have been doing this, why not you? 
                    </p>
                </motion.div>

                {/* Form */}
                {!submitted ? (
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.15, ease: "linear" }}
                        className="space-y-4"
                    >
                        {[
                            {
                                name: "name" as const,
                                placeholder: "YOUR NAME",
                                type: "text",
                            },
                            {
                                name: "email" as const,
                                placeholder: "YOUR EMAIL",
                                type: "email",
                            },
                            {
                                name: "instagram" as const,
                                placeholder: "@INSTAGRAM HANDLE",
                                type: "text",
                            },
                            {
                                name: "followers" as const,
                                placeholder: "FOLLOWER COUNT",
                                type: "text",
                            },
                        ].map((field) => (
                            <input
                                key={field.name}
                                type={field.type}
                                placeholder={field.placeholder}
                                value={formData[field.name]}
                                onChange={(e) =>
                                    setFormData({ ...formData, [field.name]: e.target.value })
                                }
                                required
                                className="w-full bg-brutal-dark border-2 border-brutal-border text-white font-display text-sm tracking-wider uppercase px-6 py-5 placeholder:text-brutal-muted focus:border-silver focus:outline-none transition-none"
                            />
                        ))}

                        <button
                            type="submit"
                            className="w-full brutal-btn-primary text-base py-6 mt-4 font-bold tracking-widest"
                        >
                            CLAIM YOUR SPOT →
                        </button>
                    </motion.form>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.1 }}
                        className="border-2 border-silver bg-brutal-dark p-12"
                    >
                        <div className="w-12 h-12 bg-silver mx-auto mb-6 flex items-center justify-center">
                            <svg
                                className="w-6 h-6 text-black"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="3"
                            >
                                <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="font-display font-bold text-2xl uppercase text-white mb-4">
                            YOU&apos;RE IN
                        </h3>
                        <p className="text-brutal-muted font-body">
                            We&apos;ll reach out within 24 hours to set up your discovery call.
                            Get ready to grow.
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
