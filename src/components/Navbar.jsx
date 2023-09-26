import React, { useState } from "react";

export default function Navbar(props) {
  const pages = [
    { name: "Home", id: 0 },
    { name: "Menu", id: 1 },
    { name: "About", id: 2 },
    { name: "Contact", id: 3 },
    { name: "Order", id: 4 },
  ];

  return (
    <nav className="h-50 flex w-full flex-col items-center bg-[#313628] p-8 text-[#bdb3b3]">
      <div>Bymero Baking</div>
      <div className="flex flex-row">
        {pages.map((page) => (
          <div
            key={page.id}
            className="m-2 cursor-pointer underline-offset-[6px] hover:underline"
            onClick={() => props.handlePageChange(page.id)}
          >
            {page.name}
          </div>
        ))}
      </div>
    </nav>
  );
}
