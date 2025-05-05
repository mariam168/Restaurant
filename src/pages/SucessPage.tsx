import React from "react";
import { Link } from "react-router-dom";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-green-50 px-6">
      <h1 className="text-4xl font-bold text-green-700 mb-4">✅ Order Confirmed!</h1>
      <p className="text-gray-700 mb-6">Thank you for your purchase. Your food is on the way! 🚚</p>
      <Link
        to="/"
        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-semibold text-sm"
      >
        Back to Menu
      </Link>
    </main>
  );
}
