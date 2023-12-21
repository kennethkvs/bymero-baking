"use client";
import React from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function OrderPage() {
  const [cart, setCart] = React.useState([]);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pb-20">Order Page Here</main>
      <Footer className="absolute bottom-0 h-20 w-full" />
    </div>
  );
}
