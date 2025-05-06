import dish1 from "../../assets/images/food1.jpg";
import dish2 from "../../assets/images/food3.jpg";
import dish3 from "../../assets/images/food4.jpg";

import { FaStar, FaShoppingCart } from "react-icons/fa";

const dishes = [
  {
    name: "Fattoush Salad",
    description: "Fresh veggies tossed with crispy pita chips and tangy dressing.",
    price: "$12.00",
    rating: 4.6,
    image: dish1,
  },
  {
    name: "Vegetable Salad",
    description: "Colorful mix of garden vegetables with olive oil and herbs.",
    price: "$10.00",
    rating: 4.8,
    image: dish2,
  },
  {
    name: "Egg Veggie Salad",
    description: "Boiled eggs served with sautéed vegetables and a creamy dressing.",
    price: "$13.00",
    rating: 4.7,
    image: dish3,
  },
];

export default function MenuSection() {
  return (
    <section className="px-6 py-20 bg-gradient-to-br from-green-50 to-white dark:from-neutral-900 dark:to-neutral-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-green-700 dark:text-yellow-400 mb-14">
          🌟 Star Dishes From Our Menu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {dishes.map((dish, i) => (
            <div
              key={i}
              className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 p-6 relative group border border-gray-100 dark:border-neutral-700"
            >
              <span className="absolute top-4 right-4 bg-green-500 dark:bg-yellow-400 w-6 h-6 rounded-full shadow-md" />
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md border-4 border-green-100 dark:border-neutral-700 mb-6">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white text-center">
                {dish.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-300 mt-2 text-sm text-center">
                {dish.description}
              </p>
              <div className="flex justify-between items-center mt-6 text-gray-700 dark:text-gray-300 px-2">
                <span className="text-lg font-bold">{dish.price}</span>
                <span className="flex items-center gap-1 text-yellow-500 dark:text-yellow-400 text-sm">
                  <FaStar />
                  {dish.rating}
                </span>
              </div>
              <button className="mt-6 w-full bg-green-500 hover:bg-green-600 dark:bg-yellow-400 dark:hover:bg-yellow-500 text-white dark:text-neutral-900 py-2 rounded-full flex items-center justify-center gap-2 text-sm font-semibold transition">
                <FaShoppingCart />
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
