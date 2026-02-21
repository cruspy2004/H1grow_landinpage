"use client";

import { useEffect, useState } from "react";

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
    const [step, setStep] = useState(0);
    // step 0: blank
    // step 1: MONETIZE fades in
    // step 2: "with" fades in
    // step 3: H1GROW fades in
    // step 4: everything fades out
    // step 5: done — unmount

    useEffect(() => {
        const timers = [
            setTimeout(() => setStep(1), 0),      // → fade in MONETIZE
            setTimeout(() => setStep(2), 850),      // → fade in "with"
            setTimeout(() => setStep(3), 1300),     // → fade in H1GROW
            setTimeout(() => setStep(4), 2200),     // → fade everything out
            setTimeout(() => { setStep(5); onComplete(); }, 3000), // → done
        ];
        return () => timers.forEach(clearTimeout);
    }, [onComplete]);

    if (step >= 5) return null;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                backgroundColor: "#000",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transition: "opacity 0.7s ease",
                opacity: step >= 4 ? 0 : 1,
            }}
        >
            {/* MONETIZE */}
            <span
                style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(3rem, 10vw, 8rem)",
                    textTransform: "uppercase",
                    color: "#C0C0C0",
                    lineHeight: 1,
                    transition: "opacity 0.6s ease, transform 0.6s ease",
                    opacity: step >= 1 && step < 4 ? 1 : 0,
                    transform: step >= 1 && step < 4 ? "translateY(0)" : "translateY(12px)",
                }}
            >
                MONETIZE
            </span>

            {/* with */}
            <span
                style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(0.9rem, 2.5vw, 1.3rem)",
                    color: "rgba(255,255,255,0.35)",
                    marginTop: "12px",
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                    opacity: step >= 2 && step < 4 ? 1 : 0,
                    transform: step >= 2 && step < 4 ? "translateY(0)" : "translateY(10px)",
                }}
            >
                with
            </span>

            {/* H1GROW */}
            <span
                style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(2rem, 7vw, 5rem)",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    marginTop: "4px",
                    lineHeight: 1,
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                    opacity: step >= 3 && step < 4 ? 1 : 0,
                    transform: step >= 3 && step < 4 ? "translateY(0)" : "translateY(14px)",
                }}
            >
                H1GROW
            </span>
        </div>
    );
}
