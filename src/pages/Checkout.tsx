import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

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
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-50 to-white dark:from-neutral-900 dark:to-neutral-800 text-green-700 dark:text-yellow-400 px-6">
        <h2 className="text-3xl font-bold mb-2">Your cart is empty</h2>
        <p className="text-md text-gray-600 dark:text-gray-400">Please add items before checking out.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen mt-20 px-6 py-16 bg-gradient-to-tr from-white via-green-50 to-yellow-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-700">
      <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 border border-green-100 dark:border-neutral-700 rounded-3xl shadow-2xl p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-extrabold text-green-800 dark:text-yellow-400 flex items-center gap-3">
            🧾 Checkout
          </h1>
          <span className="text-yellow-500 dark:text-yellow-300 text-sm font-semibold bg-yellow-100 dark:bg-yellow-900 px-3 py-1 rounded-full">
            {cart.length} item{cart.length > 1 && "s"}
          </span>
        </div>

        <div className="space-y-4 mb-10">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-green-50 dark:bg-neutral-800 p-4 rounded-xl border border-green-100 dark:border-neutral-700 shadow-sm hover:shadow-md transition duration-200"
            >
              <div>
                <p className="font-semibold text-green-800 dark:text-yellow-300">{item.name}</p>
                <p className="text-sm text-green-600 dark:text-gray-400">
                  {item.quantity} × ${item.price.toFixed(2)}
                </p>
              </div>
              <p className="font-semibold text-yellow-600 dark:text-yellow-300">
                ${(item.quantity * item.price).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center border-t border-green-100 dark:border-neutral-700 pt-6 mb-6 text-lg">
          <span className="font-semibold text-gray-700 dark:text-gray-300">Total:</span>
          <span className="text-2xl font-bold text-green-700 dark:text-yellow-400">
            ${total.toFixed(2)}
          </span>
        </div>

        <div className="text-right">
          <button
            onClick={handleConfirm}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300 flex items-center gap-2 mx-auto"
          >
            <FaCheckCircle className="text-white" />
            Confirm Order
          </button>
        </div>
      </div>
    </main>
  );
}
