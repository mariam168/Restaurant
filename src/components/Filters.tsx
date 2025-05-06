import React from "react";
import { FaTags, FaDollarSign, FaStar, FaUtensils, FaTimes } from "react-icons/fa";

export type FiltersProps = {
  categories: string[];
  types: string[];
  priceRanges: string[];
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  priceRange: string;
  setPriceRange: (val: string) => void;
  selectedMinRating: number | null;
  setMinRating: (val: number | null) => void;
  selectedType: string;
  setSelectedType: (val: string) => void;
};

export const Filters: React.FC<FiltersProps> = ({
  categories = [],
  types = [],
  priceRanges = [],
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  selectedMinRating,
  setMinRating,
  selectedType,
  setSelectedType,
}) => {
  return (
    <div className="md:col-span-1 space-y-6">
      <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl shadow dark:shadow-lg">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 dark:border-neutral-600 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-green-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl shadow dark:shadow-lg space-y-3">
        <h4 className="font-semibold text-gray-700 dark:text-white flex items-center gap-2">
          <FaTags className="text-green-500 dark:text-green-300" /> Category
        </h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-sm font-medium border transition dark:border-neutral-600 ${selectedCategory === cat
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-green-100 dark:bg-neutral-700 dark:text-white hover:dark:bg-green-600"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl shadow dark:shadow-lg space-y-3">
        <h4 className="font-semibold text-gray-700 dark:text-white flex items-center gap-2">
          <FaDollarSign className="text-green-500 dark:text-green-300" /> Price
        </h4>
        <div className="flex flex-wrap gap-2">
          {priceRanges.map((range) => (
            <button
              key={range}
              onClick={() => setPriceRange(range)}
              className={`px-3 py-1 rounded-full text-sm font-medium border transition dark:border-neutral-600 ${priceRange === range
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-green-100 dark:bg-neutral-700 dark:text-white hover:dark:bg-green-600"
                }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl shadow dark:shadow-lg space-y-3">
        <h4 className="font-semibold text-gray-700 dark:text-white flex items-center gap-2">
          <FaStar className="text-yellow-400 dark:text-yellow-300" /> Rating
        </h4>
        <label className="block font-medium text-sm mb-1 text-gray-700 dark:text-white">Minimum Rating</label>
        <input
          type="range"
          min="1"
          max="5"
          step="1"
          value={selectedMinRating || 3}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className="w-full"
        />
        <span className="text-sm text-gray-600 dark:text-gray-300">{selectedMinRating || 3} ★ & up</span>
      </div>
      <div className="bg-white dark:bg-neutral-800 p-4 rounded-2xl shadow dark:shadow-lg space-y-3">
        <h4 className="font-semibold text-gray-700 dark:text-white flex items-center gap-2">
          <FaUtensils className="text-green-500 dark:text-green-300" /> Type
        </h4>
        <div className="flex flex-wrap gap-2">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 py-1 rounded-full text-sm font-medium border transition dark:border-neutral-600 ${selectedType === type
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-green-100 dark:bg-neutral-700 dark:text-white hover:dark:bg-green-600"
                }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      <div className="text-right">
        <button
          onClick={() => {
            setSelectedCategory("All");
            setSelectedType("All");
            setMinRating(null);
            setSearchTerm("");
            setPriceRange("All");
          }}
          className="text-sm text-red-500 hover:underline flex items-center gap-1 dark:text-red-300 dark:hover:text-red-500"
        >
          <FaTimes /> Clear All
        </button>
      </div>
    </div>
  );
};
