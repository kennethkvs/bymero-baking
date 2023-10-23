"use client";

import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import Navbar from "@/components/Navbar";
import AboutParallax from "@/components/AboutParallax";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="pb-20">
        <AboutHero />
        <AboutParallax />
      </div>
      <Footer className="absolute bottom-0 h-20 w-full" />
    </div>
  );
}
