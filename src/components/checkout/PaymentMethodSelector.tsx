import { useState } from "react";
import { FaCcPaypal, FaApplePay, FaCreditCard } from "react-icons/fa";

const methods = [
  { id: "card", label: "Credit Card", icon: <FaCreditCard size={20} /> },
  { id: "paypal", label: "PayPal", icon: <FaCcPaypal size={20} /> },
  { id: "applepay", label: "Apple Pay", icon: <FaApplePay size={20} /> },
];

export default function PaymentMethods() {
  const [selected, setSelected] = useState("card");

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {methods.map((method) => (
          <button
            key={method.id}
            onClick={() => setSelected(method.id)}
            className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl border-2 transition duration-300 text-sm font-medium shadow-md
              ${
                selected === method.id
                  ? "border-green-600 bg-green-50 dark:bg-yellow-900 dark:border-yellow-400"
                  : "border-gray-300 hover:border-green-500 dark:border-neutral-700 dark:hover:border-yellow-400"
              }
            `}
          >
            <div className="flex items-center gap-4">
              <span className="text-green-700 dark:text-yellow-400">{method.icon}</span>
              <span className="text-gray-800 dark:text-gray-100 text-base font-semibold">{method.label}</span>
            </div>
            {selected === method.id && (
              <span className="text-green-600 dark:text-yellow-300 font-bold text-xs">Selected</span>
            )}
          </button>
        ))}
      </div>

      {selected === "card" && (
        <div className="grid gap-4 mt-4 bg-green-50 dark:bg-neutral-800 p-6 rounded-2xl border border-green-200 dark:border-neutral-700">
          <input
            type="text"
            placeholder="Cardholder Name"
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-900 text-gray-800 dark:text-white border border-gray-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-yellow-400"
          />
          <input
            type="text"
            placeholder="Card Number"
            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-900 text-gray-800 dark:text-white border border-gray-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-yellow-400"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-900 text-gray-800 dark:text-white border border-gray-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-yellow-400"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-neutral-900 text-gray-800 dark:text-white border border-gray-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-yellow-400"
            />
          </div>
        </div>
      )}
    </div>
  );
}
