import React from "react";
import { Dish } from "../data/dishes";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export const DishCard: React.FC<{ dish: Dish }> = ({ dish }) => (
  <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition duration-300 p-5 group hover:scale-105">
    <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-green-100 shadow-md mb-5">
      <img
        src={dish.image}
        alt={dish.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <h3 className="text-xl font-bold text-center text-gray-800 group-hover:text-green-600 transition">
      {dish.name}
    </h3>
    <p className="text-gray-500 mt-2 text-center text-sm line-clamp-2">
      {dish.description}
    </p>
    <div className="flex justify-between items-center mt-4 text-sm text-gray-700 px-2">
      <span className="font-semibold text-green-700">{dish.price} EGP</span>
      <span className="flex items-center gap-1 text-yellow-500 font-medium">
        <FaStar className="text-xs" />
        {dish.rating}
      </span>
    </div>
    <Link to={`/products/${dish.id}`}>
      <button className="mt-5 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-full flex items-center justify-center gap-2 text-sm font-semibold shadow-sm hover:shadow-md transition duration-300">
        <FaShoppingCart className="text-sm" />
        Order Now
      </button>
    </Link>
  </div>
);
