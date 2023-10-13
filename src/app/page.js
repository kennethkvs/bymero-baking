"use client";

import Footer from "@/components/Footer";
import MainHero from "@/components/MainHero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="pb-20">
        <MainHero />
      </div>
      <Footer className="absolute bottom-0 h-20 w-full" />
    </div>
  );
}
