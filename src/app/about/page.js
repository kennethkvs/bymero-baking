"use client";

import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pb-20">
        <AboutHero />
      </main>
      <Footer className="absolute bottom-0 h-20 w-full" />
    </div>
  );
}
