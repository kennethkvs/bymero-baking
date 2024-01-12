"use client";
import React from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OrderCard from "@/components/OrderCard";
import CartSection from "@/components/CartSection";

export default function OrderPage() {
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);

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
