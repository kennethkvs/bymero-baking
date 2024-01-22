"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartSection from "@/components/CartSection";
import CheckoutForm from "@/components/CheckoutForm";

export default function Checkout() {
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        fName: fname,
        lName: lname,
        email: email,
        address: address,
        msg: message,
      }),
    });
  }

  React.useEffect(() => {
    const getCart = JSON.parse(localStorage.getItem("cart"));
    const getTotal = JSON.parse(localStorage.getItem("total"));
    if (getCart && getTotal) {
      setCart(getCart);
      setTotal(getTotal);
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="mt-4 flex flex-row gap-10 px-20 pb-20">
        <CheckoutForm handleSubmit={handleSubmit} />
        <CartSection
          className="max-w-1/2 w-full"
          cart={cart}
          total={total}
          handleDeleteFromCart={null}
          handleSubmit={handleSubmit}
        />
      </main>
      <Footer className="absolute bottom-0 h-20 w-full" />
    </div>
  );
}
