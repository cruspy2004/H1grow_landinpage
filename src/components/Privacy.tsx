"use client";

import { motion } from "motion/react";

export default function Privacy() {
    return (
        <section id="privacy" className="relative pt-28 pb-24 md:pt-36 md:pb-32 bg-black">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-brutal-border" />

            <div className="section-container max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="font-display text-xs tracking-[0.3em] text-brutal-muted uppercase mb-4">
                        LEGAL
                    </p>
                    <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase leading-none mb-12">
                        PRIVACY <span className="text-silver">POLICY</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    className="space-y-10"
                >
                    <p className="font-body text-brutal-muted text-sm">
                        Last updated: February 2026
                    </p>

                    {[
                        {
                            title: "1. INFORMATION WE COLLECT",
                            content:
                                "We collect information you provide directly, such as your name, email address, Instagram handle, and follower count when you fill out our sign-up form. We may also collect basic usage data through cookies and analytics tools to improve our website experience.",
                        },
                        {
                            title: "2. HOW WE USE YOUR INFORMATION",
                            content:
                                "Your information is used to evaluate partnership opportunities, communicate with you about our services, send confirmation and follow-up emails, and improve our platform. We will never sell your personal data to third parties.",
                        },
                        {
                            title: "3. DATA STORAGE & SECURITY",
                            content:
                                "Your data is stored securely using industry-standard encryption and security practices. We use trusted third-party services (such as email providers) that comply with data protection standards. We retain your data only as long as necessary for the purposes described above.",
                        },
                        {
                            title: "4. THIRD-PARTY SERVICES",
                            content:
                                "We may use third-party services such as email delivery platforms, analytics tools, and hosting providers. These services have their own privacy policies and we encourage you to review them. We do not share your personal data beyond what is necessary for service delivery.",
                        },
                        {
                            title: "5. YOUR RIGHTS",
                            content:
                                "You have the right to access, update, or delete your personal information at any time. You can opt out of communications by clicking the unsubscribe link in any email, or by contacting us directly at haadheesheeraz2004@gmail.com.",
                        },
                        {
                            title: "6. COOKIES",
                            content:
                                "Our website may use cookies to enhance your browsing experience and gather analytics data. You can control cookie preferences through your browser settings. Essential cookies required for site functionality cannot be disabled.",
                        },
                        {
                            title: "7. CHANGES TO THIS POLICY",
                            content:
                                "We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the updated policy.",
                        },
                        {
                            title: "8. CONTACT",
                            content:
                                "If you have any questions about this privacy policy or your data, contact us at haadheesheeraz2004@gmail.com or call +92 325 866 0707.",
                        },
                    ].map((item, i) => (
                        <div key={i}>
                            <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-3 text-white">
                                {item.title}
                            </h3>
                            <p className="font-body text-brutal-muted text-sm leading-relaxed">
                                {item.content}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
