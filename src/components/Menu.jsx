import React from "react";

export default function Menu({ item }) {
  return (
    <div className="m-4 flex grow flex-col flex-wrap items-center justify-center rounded-md bg-neutral-200">
      <img src={item.img} className="rounded-md" />
      <div className="mt-4 text-2xl font-bold text-accent-100">{item.name}</div>
      <div className="mt-0 text-center text-accent-200">{item.spelling}</div>
      <div className="m-4 text-center text-brand-300">{item.desc}</div>
    </div>
  );
}
