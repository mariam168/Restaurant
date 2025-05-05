import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { cart, removeItem } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleConfirm = () => {
    cart.forEach((item) => removeItem(item.id));
    navigate("/success");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-gray-600">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <p>Please add items before checking out.</p>
      </div>
    );
  }

  return (
    <main className="px-6 py-16 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">🧾 Checkout</h1>

        <div className="space-y-4 mb-8">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-xl shadow">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.quantity} × ${item.price}
                </p>
              </div>
              <p className="font-semibold text-gray-700">
                ${item.quantity * item.price}
              </p>
            </div>
          ))}
        </div>

        <div className="text-right text-xl font-bold text-green-700 mb-4">
          Total: ${total.toFixed(2)}
        </div>

        <div className="text-right">
          <button
            onClick={handleConfirm}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm font-semibold"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </main>
  );
}
