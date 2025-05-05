import React, { useState } from "react";
import Footer from "../components/Footer";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import dish1 from "../assets/images/food1.jpg";
import dish2 from "../assets/images/food3.jpg";
import dish3 from "../assets/images/food4.jpg";
import { Link } from "react-router-dom";

type Dish = {
  id: string;
  name: string;
  description: string;
  price: string;
  priceValue: number;
  rating: number;
  image: string;
  category: "Salad" | "Grill" | "Dessert";
  type: "Veg" | "Non-Veg";
};

const allDishes: Dish[] = [
  {
    id: "1",
    name: "Fattoush Salad",
    description: "Fresh veggies tossed with crispy pita chips.",
    price: "$12.00",
    priceValue: 12,
    rating: 4.6,
    image: dish1,
    category: "Salad",
    type: "Veg",
  },
  {
    id: "2",
    name: "Vegetable Salad",
    description: "Colorful mix of garden vegetables.",
    price: "$10.00",
    priceValue: 10,
    rating: 4.8,
    image: dish2,
    category: "Salad",
    type: "Veg",
  },
  {
    id: "3",
    name: "Egg Veggie Salad",
    description: "Boiled eggs with sautéed vegetables.",
    price: "$13.00",
    priceValue: 13,
    rating: 4.7,
    image: dish3,
    category: "Grill",
    type: "Non-Veg",
  },
];

const categories = ["All", "Salad", "Grill", "Dessert"];
const priceRanges = ["All", "< $10", "$10 - $15", "> $15"];
const types = ["All", "Veg", "Non-Veg"];

export default function MenuWithFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [selectedMinRating, setMinRating] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState("All");

  const filteredDishes = allDishes.filter((dish) => {
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || dish.category === selectedCategory;
    const matchesPrice =
      priceRange === "All" ||
      (priceRange === "< $10" && dish.priceValue < 10) ||
      (priceRange === "$10 - $15" && dish.priceValue >= 10 && dish.priceValue <= 15) ||
      (priceRange === "> $15" && dish.priceValue > 15);
    const matchesRating = !selectedMinRating || dish.rating >= selectedMinRating;
    const matchesType = selectedType === "All" || dish.type === selectedType;

    return matchesSearch && matchesCategory && matchesPrice && matchesRating && matchesType;
  });

  return (
    <>
      <section className="px-6 py-16 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-10">
            Explore Our Menu
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Filters */}
            <div className="md:col-span-1 space-y-6">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-green-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <div>
                <h4 className="font-semibold mb-2">Category</h4>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left px-4 py-2 rounded-lg border transition mb-1 font-medium ${
                      selectedCategory === cat
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-green-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div>
                <h4 className="font-semibold mb-2">Price</h4>
                {priceRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => setPriceRange(range)}
                    className={`block w-full text-left px-4 py-2 rounded-lg border transition mb-1 font-medium ${
                      priceRange === range
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-green-100"
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>

              <div>
                <h4 className="font-semibold mb-2">Rating</h4>
                {[5, 4, 3].map((minRating) => (
                  <button
                    key={minRating}
                    onClick={() => setMinRating(minRating)}
                    className={`block w-full text-left px-4 py-2 rounded-lg border transition mb-1 font-medium ${
                      selectedMinRating === minRating
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-green-100"
                    }`}
                  >
                    {minRating}★ & up
                  </button>
                ))}
              </div>

              <div>
                <h4 className="font-semibold mb-2">Type</h4>
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`block w-full text-left px-4 py-2 rounded-lg border transition mb-1 font-medium ${
                      selectedType === type
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-green-100"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Dishes List */}
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDishes.length > 0 ? (
                filteredDishes.map((dish) => (
                  <div
                    key={dish.id}
                    className="bg-white rounded-2xl shadow hover:shadow-xl transition duration-300 p-6 relative group"
                  >
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow border-4 border-green-100 mb-6">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-center text-gray-800">
                      {dish.name}
                    </h3>
                    <p className="text-gray-500 mt-2 text-center text-sm">
                      {dish.description}
                    </p>
                    <div className="flex justify-between items-center mt-4 text-gray-700 px-2">
                      <span className="text-lg font-bold">{dish.price}</span>
                      <span className="flex items-center gap-1 text-yellow-500 text-sm">
                        <FaStar />
                        {dish.rating}
                      </span>
                    </div>
                    <Link to={`/products/${dish.id}`}>
                      <button className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-full flex items-center justify-center gap-2 text-sm font-semibold transition">
                        <FaShoppingCart /> Order Now
                      </button>
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 col-span-full">No dishes found.</p>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
