"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="pb-20">Contact Page Here</div>
      <Footer className="absolute bottom-0 h-20 w-full" />
    </div>
  );
}
