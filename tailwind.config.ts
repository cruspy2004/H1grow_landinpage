import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                black: "#000000",
                white: "#FFFFFF",
                silver: {
                    DEFAULT: "#C0C0C0",
                    light: "#E8E8E8",
                    dark: "#A0A0A0",
                    bright: "#D4D4D4",
                },
                brutal: {
                    red: "#FF0055",
                    dark: "#1A1A1A",
                    border: "#333333",
                    muted: "#888888",
                },
            },
            fontFamily: {
                display: ["Space Grotesk", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
            fontSize: {
                "hero": ["clamp(3rem, 8vw, 7.5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
                "section": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
                "card-title": ["clamp(1.25rem, 2vw, 2rem)", { lineHeight: "1.2" }],
                "body-lg": ["clamp(1rem, 1.5vw, 1.25rem)", { lineHeight: "1.6" }],
            },
            boxShadow: {
                brutal: "8px 8px 0px rgba(192, 192, 192, 0.3)",
                "brutal-hover": "12px 12px 0px rgba(192, 192, 192, 0.5)",
            },
            backgroundImage: {
                "grid-pattern":
                    "linear-gradient(rgba(192,192,192,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(192,192,192,0.03) 1px, transparent 1px)",
            },
            backgroundSize: {
                grid: "60px 60px",
            },
        },
    },
    plugins: [],
};

export default config;
