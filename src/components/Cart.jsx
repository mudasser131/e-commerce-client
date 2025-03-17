import React from "react";
import { useCart } from "./CardCOntext";

const CartSummary = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="bg-white p-4 rounded-lg shadow-md ">
      <h2 className="text-xl font-bold">Cart</h2>
      <ul className="space-y-2">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center">
            <span>{item.title} x{item.quantity}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-600"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <p>Total items: {cartItems.length}</p>
      </div>
    </div>
  );
};

export default CartSummary;
