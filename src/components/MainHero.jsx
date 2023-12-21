import React from "react";

export default function MainHero() {
  return (
    <div
      className="flex h-screen max-h-[30rem] flex-col items-center 
                justify-center bg-[url('/images/cookies.jpg')] bg-cover"
    >
      <div className="text-6xl font-bold ">Bymero Baking</div>
      <div className="text-2xl">The best bakery in town</div>
    </div>
  );
}
