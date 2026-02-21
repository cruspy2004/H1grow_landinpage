"use client";

import { useState } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import ReferAFriend from "@/components/ReferAFriend";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
    const [introComplete, setIntroComplete] = useState(false);

    return (
        <main>
            {!introComplete && (
                <IntroAnimation onComplete={() => setIntroComplete(true)} />
            )}
            <div
                style={{
                    opacity: introComplete ? 1 : 0,
                    transition: "opacity 0.7s ease",
                }}
            >
                <Navbar />
                <Hero />
                <Problem />
                <Solution />
                <HowItWorks />
                <ReferAFriend />
                <FAQ />
                <FinalCTA />
                <Footer />
            </div>
        </main>
    );
}
