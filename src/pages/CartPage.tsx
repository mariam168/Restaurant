import { useCart } from "../context/CartContext";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cart, updateQuantity, removeItem } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white dark:from-neutral-900 dark:to-neutral-800 text-green-700 dark:text-yellow-400 px-6 py-20">
        <h2 className="text-4xl font-bold mb-3">🛒 Cart is Empty</h2>
        <p className="text-md text-green-600 dark:text-gray-400">Let’s add some deliciousness to it!</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen mt-20 bg-gradient-to-br from-white to-green-50 dark:from-neutral-900 dark:to-neutral-800 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-green-800 dark:text-yellow-400 mb-10 tracking-tight">
          Your Cart
        </h1>

        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 bg-white dark:bg-neutral-900 border border-green-100 dark:border-neutral-700 rounded-2xl shadow-md hover:shadow-lg transition duration-200"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl border border-green-200 dark:border-neutral-700 shadow-sm"
                />
                <div>
                  <h2 className="text-lg font-semibold text-green-900 dark:text-yellow-300">{item.name}</h2>
                  <p className="text-sm text-green-600 dark:text-gray-400">
                    ${item.price.toFixed(2)} × {item.quantity}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-4">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="bg-yellow-100 hover:bg-yellow-200 dark:bg-yellow-900 dark:hover:bg-yellow-800 text-yellow-800 dark:text-yellow-300 p-2 rounded-full transition"
                  title="Decrease"
                >
                  <FaMinus />
                </button>
                <span className="text-lg font-bold text-green-800 dark:text-yellow-400">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800 text-green-800 dark:text-green-300 p-2 rounded-full transition"
                  title="Increase"
                >
                  <FaPlus />
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition"
                  title="Remove"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white dark:bg-neutral-900 border border-green-100 dark:border-neutral-700 p-6 rounded-2xl shadow-lg flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-2xl font-bold text-green-900 dark:text-yellow-400 mb-4 sm:mb-0">
            Total: <span className="text-yellow-600 dark:text-yellow-300">${total.toFixed(2)}</span>
          </p>
          <button
            onClick={() => navigate("/checkout")}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition"
          >
            ✅ Proceed to Checkout
          </button>
        </div>
      </div>
    </main>
  );
}
