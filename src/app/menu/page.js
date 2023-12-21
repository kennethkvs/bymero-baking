"use client";

import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

const menuItems = [
  {
    id: 0,
    name: "Nastar",
    price: 15.0,
    spelling: "/nasˈtɑɹ/",
    desc: "Lorem Ipsum dll sajdfjasdfkjajkf ajsdfj sdjfajsdf sjdfadjf",
    img: "/images/cookies.jpg",
  },
  {
    id: 1,
    name: "Kaasstengel",
    price: 15.0,
    spelling: "/kaasstɛŋɡɛl/",
    desc: "Lorem Ipsum dll sajdfjasdfkjajkf ajsdfj sdjfajsdf sjdfadjf",
    img: "/images/cookies.jpg",
  },
  {
    id: 2,
    name: "Cookies",
    price: 15.0,
    spelling: "/ˈkʊkiz/",
    desc: "Lorem Ipsum dll sajdfjasdfkjajkf ajsdfj sdjfajsdf sjdfadjf",
    img: "/images/cookies.jpg",
  },
];

export default function MenuPage() {
  const displayMenu = menuItems.map((item) => (
    <div key={item.id}>
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
