"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function Contact() {
    const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });
            if (!res.ok) throw new Error("Failed");
            setFormState("sent");
            setName("");
            setEmail("");
            setMessage("");
        } catch {
            setFormState("error");
        }
    };

    return (
        <section id="contact" className="relative pt-28 pb-24 md:pt-36 md:pb-32 bg-black">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-brutal-border" />

            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="font-display text-xs tracking-[0.3em] text-brutal-muted uppercase mb-4">
                        GET IN TOUCH
                    </p>
                    <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase leading-none mb-12">
                        CONTACT <span className="text-silver">US</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    {/* Left — Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    >
                        <p className="font-body text-brutal-muted leading-relaxed mb-10">
                            Have a question, want to partner up, or just want to say hi?
                            Reach out through any of these channels or use the form.
                        </p>

                        <div className="space-y-8">
                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 border-2 border-silver/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-5 h-5 text-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-display font-bold text-sm uppercase tracking-wider mb-1">EMAIL</p>
                                    <a href="mailto:haadheesheeraz2004@gmail.com" className="font-body text-silver hover:text-white transition-colors">
                                        haadheesheeraz2004@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 border-2 border-silver/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-5 h-5 text-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-display font-bold text-sm uppercase tracking-wider mb-1">PHONE</p>
                                    <a href="tel:+923258660707" className="font-body text-silver hover:text-white transition-colors">
                                        +92 325 866 0707
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 border-2 border-silver/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <svg className="w-5 h-5 text-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-display font-bold text-sm uppercase tracking-wider mb-1">LOCATION</p>
                                    <p className="font-body text-brutal-muted">
                                        Pakistan 🇵🇰
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        {formState === "sent" ? (
                            <div className="border-2 border-silver/30 p-8 md:p-10 text-center">
                                <div className="w-14 h-14 mx-auto mb-5 border-2 border-silver flex items-center justify-center">
                                    <svg className="w-7 h-7 text-silver" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <h3 className="font-display font-bold text-xl uppercase mb-3">
                                    MESSAGE SENT
                                </h3>
                                <p className="font-body text-brutal-muted text-sm mb-6">
                                    We&apos;ll get back to you as soon as possible.
                                </p>
                                <button
                                    onClick={() => setFormState("idle")}
                                    className="font-display text-xs tracking-widest text-silver hover:text-white uppercase cursor-pointer"
                                >
                                    SEND ANOTHER →
                                </button>
                            </div>
                        ) : formState === "error" ? (
                            <div className="border-2 border-red-500/30 p-8 md:p-10 text-center">
                                <div className="w-14 h-14 mx-auto mb-5 border-2 border-red-500/50 flex items-center justify-center">
                                    <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <h3 className="font-display font-bold text-xl uppercase mb-3">
                                    FAILED TO SEND
                                </h3>
                                <p className="font-body text-brutal-muted text-sm mb-6">
                                    Something went wrong. Please try again.
                                </p>
                                <button
                                    onClick={() => setFormState("idle")}
                                    className="font-display text-xs tracking-widest text-silver hover:text-white uppercase cursor-pointer"
                                >
                                    TRY AGAIN →
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="contact-name" className="font-display text-xs tracking-widest text-brutal-muted uppercase block mb-2">
                                        NAME
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full bg-transparent border-2 border-brutal-border px-4 py-3 font-body text-white placeholder-brutal-muted/50 focus:border-silver focus:outline-none transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="font-display text-xs tracking-widest text-brutal-muted uppercase block mb-2">
                                        EMAIL
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-transparent border-2 border-brutal-border px-4 py-3 font-body text-white placeholder-brutal-muted/50 focus:border-silver focus:outline-none transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="font-display text-xs tracking-widest text-brutal-muted uppercase block mb-2">
                                        MESSAGE
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        required
                                        rows={5}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full bg-transparent border-2 border-brutal-border px-4 py-3 font-body text-white placeholder-brutal-muted/50 focus:border-silver focus:outline-none transition-colors resize-none"
                                        placeholder="How can we help?"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={formState === "sending"}
                                    className="brutal-btn-primary text-sm px-10 py-4 w-full disabled:opacity-50"
                                >
                                    {formState === "sending" ? (
                                        <span className="flex items-center justify-center gap-3">
                                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            SENDING...
                                        </span>
                                    ) : (
                                        "SEND MESSAGE"
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
