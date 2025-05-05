import { useCart } from "../context/CartContext";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cart, updateQuantity, removeItem } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white text-green-700 px-6 py-20">
        <h2 className="text-4xl font-bold mb-3">🛒 Cart is Empty</h2>
        <p className="text-md text-green-600">Let’s add some deliciousness to it!</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen mt-20 bg-gradient-to-br from-white to-green-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-green-800 mb-10 tracking-tight">
          Your Cart
        </h1>

        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 bg-white border border-green-100 rounded-2xl shadow-md hover:shadow-lg transition duration-200"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl border border-green-200 shadow-sm"
                />
                <div>
                  <h2 className="text-lg font-semibold text-green-900">{item.name}</h2>
                  <p className="text-sm text-green-600">
                    ${item.price.toFixed(2)} × {item.quantity}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-4">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 p-2 rounded-full transition"
                  title="Decrease"
                >
                  <FaMinus />
                </button>
                <span className="text-lg font-bold text-green-800">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="bg-green-100 hover:bg-green-200 text-green-800 p-2 rounded-full transition"
                  title="Increase"
                >
                  <FaPlus />
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="ml-2 text-red-500 hover:text-red-700 transition"
                  title="Remove"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white border border-green-100 p-6 rounded-2xl shadow-lg flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="text-2xl font-bold text-green-900 mb-4 sm:mb-0">
            Total: <span className="text-yellow-600">${total.toFixed(2)}</span>
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
