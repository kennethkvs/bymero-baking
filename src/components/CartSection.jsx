import React from "react";
import Link from "next/link";
import { BsBasket } from "react-icons/bs";
import { CiTrash } from "react-icons/ci";
import { usePathname } from "next/navigation";

export default function CartSection({ cart, total, handleDeleteFromCart }) {
  const pathname = usePathname();

  const displayCartItems = cart.map((thisItem) => {
    return (
      <div
        key={thisItem.item._id}
        className="flex w-full flex-row justify-between"
      >
        <div className="flex flex-row gap-3">
          <p>{thisItem.qty}x</p>
          <p>{thisItem.item.name}</p>
        </div>
        {pathname === "/order" ? (
          <button onClick={() => handleDeleteFromCart(thisItem)}>
            <CiTrash className="text-red-700" />
          </button>
        ) : (
          <p>
            $
            {(
              Math.round(
                Number(thisItem.item.price.$numberDecimal) * thisItem.qty * 100,
              ) / 100
            ).toFixed(2)}
          </p>
        )}
      </div>
    );
  });

  return (
    <div className="flex w-full flex-col flex-wrap items-center justify-between rounded-md bg-neutral-200">
      <div className="flex w-full flex-col items-center justify-center rounded-t-md bg-brand-200 pb-4 pt-12">
        <BsBasket className="scale-[400%]" />
        <p className="mt-10 text-2xl">Cart</p>
      </div>
      <div className="w-full p-3 text-center">
        {cart.length != 0 ? displayCartItems : "Nothing here... Yet!"}
      </div>
      <div className="w-full">
        <div className="w-full bg-neutral-300 p-4 text-sm">
          <div className="flex flex-row justify-between">
            <p>Total:</p>
            <p>${(Math.round(total * 100) / 100).toFixed(2)}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Tax:</p>
            <p>${(Math.round(total * 0.13 * 100) / 100).toFixed(2)}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Shipping:</p>
            <p>Calculated at Checkout</p>
          </div>
        </div>
        <Link href={pathname === "/order" ? "/checkout" : ""}>
          <button className="w-full place-self-end rounded-b-md bg-brand-200 py-2 text-center text-brand-100 hover:bg-brand-300">
            {pathname === "/order" ? "Checkout" : "Order Now"}
          </button>
        </Link>
      </div>
    </div>
  );
}
