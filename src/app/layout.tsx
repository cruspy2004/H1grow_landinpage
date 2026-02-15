import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "H1GROW — Monetize Your Content | Pakistani Creator Platform",
    description:
        "H1GROW helps Pakistani content creators generate recurring revenue with personalized software products. Zero risk, zero inventory, maximum earnings.",
    keywords: [
        "Pakistani creators",
        "influencer monetization",
        "content creator revenue",
        "digital products Pakistan",
        "H1GROW",
    ],
    openGraph: {
        title: "H1GROW — Monetize Your Content",
        description:
            "The platform helping Pakistani creators earn what they deserve through personalized software products.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="font-body bg-black text-white antialiased">
                {children}
            </body>
        </html>
    );
}
