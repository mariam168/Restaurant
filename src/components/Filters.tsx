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
      <div className="bg-white p-4 rounded-2xl shadow">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-green-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="bg-white p-4 rounded-2xl shadow space-y-3">
        <h4 className="font-semibold text-gray-700 flex items-center gap-2">
          <FaTags className="text-green-500" /> Category
        </h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-sm font-medium border transition ${selectedCategory === cat
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-green-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow space-y-3">
        <h4 className="font-semibold text-gray-700 flex items-center gap-2">
          <FaDollarSign className="text-green-500" /> Price
        </h4>
        <div className="flex flex-wrap gap-2">
          {priceRanges.map((range) => (
            <button
              key={range}
              onClick={() => setPriceRange(range)}
              className={`px-3 py-1 rounded-full text-sm font-medium border transition ${priceRange === range
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-green-100"
                }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow space-y-3">
        <h4 className="font-semibold text-gray-700 flex items-center gap-2">
          <FaStar className="text-yellow-400" /> Rating
        </h4>
        <label className="block font-medium text-sm mb-1">Minimum Rating</label>
        <input
          type="range"
          min="1"
          max="5"
          step="1"
          value={selectedMinRating || 3}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className="w-full"
        />
        <span className="text-sm text-gray-600">{selectedMinRating || 3} ★ & up</span>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow space-y-3">
        <h4 className="font-semibold text-gray-700 flex items-center gap-2">
          <FaUtensils className="text-green-500" /> Type
        </h4>
        <div className="flex flex-wrap gap-2">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 py-1 rounded-full text-sm font-medium border transition ${selectedType === type
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-green-100"
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
          className="text-sm text-red-500 hover:underline flex items-center gap-1"
        >
          <FaTimes /> Clear All
        </button>
      </div>
    </div>
  );
};