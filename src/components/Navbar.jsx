import React, { useState } from "react";
import Link from "next/link";

export default function Navbar(props) {
  const pages = [
    { name: "Home", id: 0, href: "/" },
    { name: "Menu", id: 1, href: "/menu" },
    { name: "About", id: 2, href: "/about" },
    { name: "Contact", id: 3, href: "/contact" },
    { name: "Order", id: 4, href: "/order" },
  ];

  return (
    <nav className="h-50 bg-brand-200 flex w-full flex-col items-center p-8 text-white">
      <div>Bymero Baking</div>
      <div className="flex flex-row">
        {pages.map((page) => (
          <Link
            key={page.id}
            className="m-2 cursor-pointer underline-offset-[6px] hover:underline"
            href={page.href}
          >
            {page.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
