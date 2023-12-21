import React from "react";
import { BsBasket } from "react-icons/bs";
import { CiTrash } from "react-icons/ci";

export default function CartSection({ cart, total, handleDeleteFromCart }) {
  const displayCartItems = cart.map((thisItem) => {
    return (
      <div
        key={thisItem.item.id}
        className="flex w-full flex-row justify-between"
      >
        <div className="flex flex-row gap-3">
          <p>{thisItem.qty}x</p>
          <p>{thisItem.item.name}</p>
        </div>
        <button onClick={() => handleDeleteFromCart(thisItem)}>
          <CiTrash className="text-red-700" />
        </button>
      </div>
    );
  });

  return (
    <div className="flex w-3/4 flex-col flex-wrap items-center justify-between rounded-md bg-neutral-200">
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
            <p>${total}</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Tax:</p>
            <p>Calculated at Checkout</p>
          </div>
        </div>
        <button className="w-full place-self-end rounded-b-md bg-brand-200 py-2 text-center text-brand-100 hover:bg-brand-300">
          Checkout
        </button>
      </div>
    </div>
  );
}
