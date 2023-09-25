import React from "react";

export default function Navbar() {
  return (
    <nav className="h-50 flex w-full flex-col items-center bg-[#313628] p-8 text-[#bdb3b3]">
      <div>Bymero Baking</div>
      <div className="flex flex-row">
        <div className="m-2">Home</div>
        <div className="m-2">Menu</div>
        <div className="m-2">About</div>
        <div className="m-2">Contact</div>
        <div className="m-2">Order</div>
      </div>
    </nav>
  );
}
