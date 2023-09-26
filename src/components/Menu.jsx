import React from "react";

export default function Menu() {
  const menuItems = [
    {
      id: 0,
      name: "Nastar",
      desc: "Lorem Ipsum dll sajdfjasdfkjajkf ajsdfj sdjfajsdf sjdfadjf",
      img: "/images/cookies.jpg",
    },
    {
      id: 1,
      name: "Kaastengel",
      desc: "Lorem Ipsum dll sajdfjasdfkjajkf ajsdfj sdjfajsdf sjdfadjf",
      img: "/images/cookies.jpg",
    },
    {
      id: 2,
      name: "Cookies",
      desc: "Lorem Ipsum dll sajdfjasdfkjajkf ajsdfj sdjfajsdf sjdfadjf",
      img: "/images/cookies.jpg",
    },
  ];

  const displayItems = menuItems.map((item) => (
    <div
      key={item.id}
      className="m-4 flex grow flex-col flex-wrap items-center justify-center rounded-md bg-slate-200"
    >
      <img src={item.img} className="" />
      <div className="mt-4 text-2xl font-bold">{item.name}</div>
      <div className="m-4 text-center">{item.desc}</div>
    </div>
  ));

  return <div className="flex flex-row">{displayItems}</div>;
}
