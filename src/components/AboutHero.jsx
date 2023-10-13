import React from "react";

export default function AboutHero() {
  return (
    <div>
      <div className="relative text-right">
        <img src="/images/Toronto Skyline.jpeg" className="max-w-full" />
        <div className="absolute left-1/2 top-3/4 mr-20 text-6xl font-bold">
          Homemade, with love, from Toronto
        </div>
      </div>
    </div>
  );
}
