"use client";

import Footer from "@/components/Footer";
import MainHero from "@/components/MainHero";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);

  function handlePageChange(page) {
    setPage(page);
  }

  function mainContent() {
    switch (page) {
      case 0:
        return <MainHero />;
      case 1:
        return <Menu />;
      case 2:
        return <Footer />;
      default:
        return <MainHero />;
    }
  }

  return (
    <div className="relative min-h-screen">
      <Navbar handlePageChange={handlePageChange} />
      <div className="pb-20">{mainContent()}</div>
      <Footer />
    </div>
  );
}
