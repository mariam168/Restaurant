import React from "react";
import { useCart } from "../context/CartContext";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cart, updateQuantity, removeItem } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen px-6 py-20 flex flex-col items-center justify-center text-gray-600">
        <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-md">Add some delicious dishes to your cart.</p>
      </div>
    );
  }

  return (
    <main className="px-6 py-16 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">🛒 Your Cart</h1>

        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-white shadow rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl"
                />
                <div>
                  <h2 className="font-semibold text-lg text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-sm text-gray-500">${item.price} × {item.quantity}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="text-gray-600 hover:text-red-500"
                >
                  <FaMinus />
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="text-gray-600 hover:text-green-500"
                >
                  <FaPlus />
                </button>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:text-red-800 ml-4"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-right">
          <p className="text-xl font-semibold text-gray-700 mb-4">
            Total: ${total.toFixed(2)}
          </p>
          <button
            onClick={() => navigate("/checkout")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </main>
  );
}
