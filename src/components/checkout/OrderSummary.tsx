import { useCart } from "../../context/CartContext";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CartSummary() {
  const { cart, removeItem } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleConfirm = () => {
    cart.forEach((item) => removeItem(item.id));
    navigate("/success");
  };

  return (
    <div className="space-y-6">
      <ul className="space-y-4 divide-y divide-gray-200 dark:divide-neutral-700">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between items-start py-2">
            <div>
              <p className="text-base font-semibold text-gray-900 dark:text-gray-100">{item.name}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {item.quantity} × ${item.price.toFixed(2)}
              </p>
            </div>
            <p className="text-sm font-bold text-green-700 dark:text-yellow-400">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center border-t border-gray-200 dark:border-neutral-700 pt-6 text-lg">
        <span className="font-semibold text-gray-800 dark:text-gray-200">Total</span>
        <span className="text-2xl font-bold text-green-700 dark:text-yellow-400">${total.toFixed(2)}</span>
      </div>

      <button
        onClick={handleConfirm}
        className="w-full mt-auto flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-green-600 hover:bg-green-700 text-white text-base font-semibold shadow-md transition-all duration-300 mb-6"
      >
        <FaCheckCircle className="text-white text-lg" />
        Confirm Order
      </button>
    </div>
  );
}
