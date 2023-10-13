"use client";

import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function MenuPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="pb-20">
        <Menu />
      </div>
      <Footer className="absolute bottom-0 h-20 w-full" />
    </div>
  );
}
