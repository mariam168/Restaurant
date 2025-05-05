import React, { useEffect, useState } from "react";
import { Dish } from "../data/dishes";
import { FaShoppingCart, FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const DishCard: React.FC<{ dish: Dish }> = ({ dish }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites: number[] = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(storedFavorites.includes(dish.id));
  }, [dish.id]);

  const toggleFavorite = () => {
    const storedFavorites: number[] = JSON.parse(localStorage.getItem("favorites") || "[]");
    let updated: number[];

    if (storedFavorites.includes(dish.id)) {
      updated = storedFavorites.filter((id) => id !== dish.id);
      setIsFavorite(false);
    } else {
      updated = [...storedFavorites, dish.id];
      setIsFavorite(true);
    }

    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition duration-300 p-5 group hover:scale-105 relative">
      {/* ❤️ Favorite icon top right */}
      <button
        onClick={toggleFavorite}
        className="absolute top-3 right-3 text-red-500 hover:scale-110 transition"
        title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      >
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </button>

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
};
