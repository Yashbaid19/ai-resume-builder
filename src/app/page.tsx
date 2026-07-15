import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import AIDemo from "@/components/landing/AIDemo";
import Features from "@/components/landing/Features";
import Trust from "@/components/landing/Trust";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
export default function Home() {
  return (
    <main className="bg-slate-50">
      <Navbar />
      <Hero />
      <AIDemo />
      <Features />
      <HowItWorks />

<Trust />

<Pricing />
<FAQ />
<Footer />
      
    </main>
  );
}