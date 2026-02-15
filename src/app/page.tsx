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
    return (
        <main>
            <Navbar />
            <Hero />
            <Problem />
            <Solution />
            <HowItWorks />
            <ReferAFriend />
            <FAQ />
            <FinalCTA />
            <Footer />
        </main>
    );
}
