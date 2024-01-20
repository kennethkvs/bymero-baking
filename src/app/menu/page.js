"use client";

import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import React from "react";

export default function MenuPage() {
  const [menuItems, setMenuItems] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => setMenuItems(data));
  }, []);

  const displayMenu = menuItems.map((item) => (
    <div key={item._id}>
      {" "}
      <Menu item={item} />
    </div>
  ));
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pb-30 px-40">
        <div className="my-4 flex flex-row gap-4">{displayMenu}</div>
      </main>
      <Footer className="absolute bottom-0 h-20 w-full" />
    </div>
  );
}
