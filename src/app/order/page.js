"use client";
import React from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OrderCard from "@/components/OrderCard";
import CartSection from "@/components/CartSection";

// const menuItems = [
//   {
//     _id: 0,
//     name: "Nastar",
//     price.$numberDecimal: 15.0,
//     spelling: "/nasˈtɑɹ/",
//     desc: "Lorem Ipsum dll sajdfjasdfkjajkf ajsdfj sdjfajsdf sjdfadjf",
//     img: "/images/cookies.jpg",
//   },
//   {
//     _id: 1,
//     name: "Kaasstengel",
//     price.$numberDecimal: 15.0,
//     spelling: "/kaasstɛŋɡɛl/",
//     desc: "Lorem Ipsum dll sajdfjasdfkjajkf ajsdfj sdjfajsdf sjdfadjf",
//     img: "/images/cookies.jpg",
//   },
//   {
//     _id: 2,
//     name: "Cookies",
//     price.$numberDecimal: 15.0,
//     spelling: "/ˈkʊkiz/",
//     desc: "Lorem Ipsum dll sajdfjasdfkjajkf ajsdfj sdjfajsdf sjdfadjf",
//     img: "/images/cookies.jpg",
//   },
// ];

export default function OrderPage() {
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [menuItems, setMenuItems] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/menu")
      .then((res) => res.json())
      .then((data) => setMenuItems(data));
  }, []);

  // Get cart and total from localStorage if exists
  React.useEffect(() => {
    const getCart = JSON.parse(localStorage.getItem("cart"));
    const getTotal = JSON.parse(localStorage.getItem("total"));
    if (getCart && getTotal) {
      setCart(getCart);
      setTotal(getTotal);
    }
  }, []);

  // Update localStorage when cart or total changes
  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", JSON.stringify(total));
  }, [cart]);

  function handleAddToCart(newItem) {
    const existing = cart.find(
      (thisItem) => thisItem.item._id === newItem.item._id,
    );

    const nextCart = existing
      ? cart.map((thisItem) =>
          thisItem.item._id === newItem.item._id
            ? { ...thisItem, qty: thisItem.qty + 1 }
            : thisItem,
        )
      : [...cart, { ...newItem, qty: 1 }];

    setTotal(total + Number(newItem.item.price.$numberDecimal));
    setCart(nextCart);
  }

  function handleDeleteFromCart(delItem) {
    const nextCart = cart.filter(
      (thisItem) => thisItem.item._id !== delItem.item._id,
    );

    setTotal(total - Number(delItem.item.price.$numberDecimal) * delItem.qty);
    setCart(nextCart);
  }

  const displayItems = menuItems.map((item) => (
    <div key={item._id}>
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
