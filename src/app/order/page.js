"use client";
import React from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OrderCard from "@/components/OrderCard";
import CartSection from "@/components/CartSection";

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

export default function OrderPage() {
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  function handleAddToCart(newItem) {
    const existing = cart.find(
      (thisItem) => thisItem.item.id === newItem.item.id,
    );

    const nextCart = existing
      ? cart.map((thisItem) =>
          thisItem.item.id === newItem.item.id
            ? { ...thisItem, qty: thisItem.qty + 1 }
            : thisItem,
        )
      : [...cart, { ...newItem, qty: 1 }];

    setTotal(total + newItem.item.price);
    setCart(nextCart);
  }

  function handleDeleteFromCart(delItem) {
    const nextCart = cart.filter(
      (thisItem) => thisItem.item.id !== delItem.item.id,
    );

    setTotal(total - delItem.item.price * delItem.qty);
    setCart(nextCart);
  }

  const displayItems = menuItems.map((item) => (
    <div key={item.id}>
      <OrderCard item={item} handleAddToCart={handleAddToCart} />
    </div>
  ));

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="mt-4 flex flex-row gap-4 px-20 pb-20">
        <div className="flex flex-row gap-4">{displayItems}</div>
        <CartSection
          cart={cart}
          total={total}
          handleDeleteFromCart={handleDeleteFromCart}
        />
      </main>
      <Footer className="absolute bottom-0 h-20 w-full" />
    </div>
  );
}
