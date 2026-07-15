import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import AIDemo from "@/components/landing/AIDemo";
import Features from "@/components/landing/Features";

export default function Home() {
  return (
    <main className="bg-slate-50">
      <Navbar />
      <Hero />
      <AIDemo />
      <Features />
    </main>
  );
}