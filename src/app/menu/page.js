"use client";

import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

const menuItems = [
  {
    id: 0,
    name: "Nastar",
    price: "$15.00",
    spelling: "/nasˈtɑɹ/",
    desc: "Lorem Ipsum dll sajdfjasdfkjajkf ajsdfj sdjfajsdf sjdfadjf",
    img: "/images/cookies.jpg",
  },
  {
    id: 1,
    name: "Kaasstengel",
    price: "$15.00",
    spelling: "/kaasstɛŋɡɛl/",
    desc: "Lorem Ipsum dll sajdfjasdfkjajkf ajsdfj sdjfajsdf sjdfadjf",
    img: "/images/cookies.jpg",
  },
  {
    id: 2,
    name: "Cookies",
    price: "$15.00",
    spelling: "/ˈkʊkiz/",
    desc: "Lorem Ipsum dll sajdfjasdfkjajkf ajsdfj sdjfajsdf sjdfadjf",
    img: "/images/cookies.jpg",
  },
];

export default function MenuPage() {
  const displayMenu = menuItems.map((item) => (
    <Menu key={item.id} item={item} />
  ));
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="pb-30 px-40">
        <div className="flex flex-row">{displayMenu}</div>
      </main>
      <Footer className="absolute bottom-0 h-20 w-full" />
    </div>
  );
}
