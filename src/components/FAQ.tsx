"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
    {
        question: "WHAT EXACTLY DOES H1GROW BUILD FOR ME?",
        answer:
            "We build custom software products tailored to your brand and audience. Think apps, tools, dashboards — digital products that solve real problems for your followers and generate recurring subscription revenue for you.",
    },
    {
        question: "HOW MUCH DOES IT COST TO GET STARTED?",
        answer:
            "Nothing. Zero upfront costs. We handle all development, hosting, and technical support. You focus on creating content and promoting the product to your audience.",
    },
    {
        question: "WHAT KIND OF REVENUE CAN I EXPECT?",
        answer:
            "Revenue depends on your audience size, engagement, and the product fit. We work with you to price products affordably (Rs. 299-999/month) to maximize conversions. Even with 10K followers, the math gets exciting fast.",
    },
    {
        question: "DO I NEED TECHNICAL SKILLS?",
        answer:
            "Absolutely not. We handle 100% of the technical work — development, design, hosting, customer support, and updates. You just need to promote the product to your audience.",
    },
    {
        question: "WHAT'S THE CATCH?",
        answer:
            "No catch. We operate on a revenue share model — we only make money when you make money. Our incentives are completely aligned with yours.",
    },
    {
        question: "HOW LONG DOES IT TAKE TO GET MY PRODUCT?",
        answer:
            "From our discovery call to your product launch, expect 2-4 weeks depending on complexity. We move fast — our team is from NUST SEECS, Pakistan's top tech university.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="relative py-24 md:py-32 bg-brutal-dark">
            {/* Top border */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-brutal-border" />

            <div className="section-container max-w-3xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.15, ease: "linear" }}
                    className="text-center mb-16"
                >
                    <p className="font-display text-xs tracking-[0.3em] text-brutal-muted mb-3 uppercase">
                        QUESTIONS?
                    </p>
                    <h2 className="font-display font-bold text-section uppercase text-white">
                        FAQ
                    </h2>
                    <div className="w-20 h-1 bg-silver mt-4 mx-auto" />
                </motion.div>

                {/* Accordion */}
                <div className="space-y-0">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.1, ease: "linear" }}
                            className="border-b border-brutal-border"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between py-6 text-left group"
                            >
                                <span
                                    className={`font-display font-bold text-sm md:text-base uppercase tracking-wide transition-none ${openIndex === i ? "text-silver" : "text-white"
                                        }`}
                                >
                                    {faq.question}
                                </span>
                                <span
                                    className={`font-display text-2xl ml-4 shrink-0 transition-none ${openIndex === i ? "text-silver" : "text-brutal-muted"
                                        }`}
                                >
                                    {openIndex === i ? "−" : "+"}
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.1, ease: "linear" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-6 pr-12 relative">
                                            {/* Silver accent bar */}
                                            <div className="absolute left-0 top-0 bottom-6 w-[3px] bg-silver" />
                                            <p className="text-brutal-muted font-body text-sm md:text-base leading-relaxed pl-6">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
