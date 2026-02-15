"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
    { label: "PROBLEM", href: "#problem" },
    { label: "SOLUTION", href: "#solution" },
    { label: "HOW IT WORKS", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.2, ease: "linear" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-none ${scrolled ? "bg-black/95 border-b-2 border-brutal-border" : "bg-transparent"
                }`}
        >
            <div className="section-container flex items-center justify-between h-16 md:h-20">
                {/* Logo */}
                <a href="#" className="font-display font-bold text-xl md:text-2xl tracking-tight">
                    H1<span className="text-silver">GROW</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="font-display text-xs tracking-widest text-brutal-muted hover:text-white transition-none uppercase"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#cta"
                        className="brutal-btn-primary text-xs px-6 py-3"
                    >
                        GET STARTED
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block w-6 h-0.5 bg-white transition-none ${mobileOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-white transition-none ${mobileOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-white transition-none ${mobileOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.15, ease: "linear" }}
                        className="md:hidden bg-black border-t-2 border-brutal-border overflow-hidden"
                    >
                        <div className="section-container py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="font-display text-sm tracking-widest text-brutal-muted hover:text-white uppercase py-2 border-b border-brutal-border"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="#cta"
                                onClick={() => setMobileOpen(false)}
                                className="brutal-btn-primary text-xs px-6 py-3 text-center mt-2"
                            >
                                GET STARTED
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
