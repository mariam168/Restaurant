import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaStar,
  FaShoppingCart,
  FaClock,
  FaFireAlt,
  FaListUl,
  FaLeaf,
  FaBoxOpen,
  FaTruck,
  FaCheck,
} from "react-icons/fa";
import { allDishes } from "../data/dishes";
import { useCart } from "../context/CartContext";

export default function DishDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false); 

  const dish = allDishes.find((d) => d.id.toString() === id);

  const related = allDishes
    .filter((d) => d.id !== dish?.id)
    .map((d) => {
      let score = 0;
      if (d.category === dish?.category) score += 2;
      if (d.type === dish?.type) score += 1;
      if (d.ingredients.some((i) => dish?.ingredients.includes(i))) score += 1;
      return { ...d, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!dish) return;
    addToCart({
      id: dish.id.toString(),
      name: dish.name,
      image: dish.image,
      price: dish.price,
      quantity: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!dish) {
    return (
      <section className="px-6 py-16 mt-16 flex items-center justify-center">
        <div className="text-center text-gray-600">
          <h2 className="text-3xl font-bold mb-4">Dish Not Found</h2>
          <Link to="/" className="text-green-600 hover:underline">
            Back to Menu
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="px-6 py-20 mt-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto space-y-4 mt-16">
        <div className="flex flex-col md:flex-row gap-10">
 
          <div className="md:w-1/2">
            <img
              src={dish.image}
              alt={dish.name}
              className="rounded-3xl shadow-xl w-full h-[50%] object-cover"
            />
            <div className="mt-4 grid grid-cols-3 gap-2">
              {dish.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Gallery"
                  className="rounded-xl h-24 w-full object-cover shadow"
                />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl font-extrabold text-green-800">{dish.name}</h1>
            <p className="text-gray-600 leading-relaxed">{dish.description}</p>

            <div className="flex gap-3 flex-wrap text-sm text-gray-700">
              <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                <FaClock className="text-green-500" /> {dish.prepTime}
              </span>
              <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                <FaFireAlt className="text-red-500" /> {dish.calories} kcal
              </span>
              <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                <FaListUl className="text-yellow-500" /> {dish.category}
              </span>
              <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                <FaLeaf className="text-green-600" /> {dish.type}
              </span>
            </div>
            <div>
              <h2 className="font-semibold text-gray-800 mb-1">🌿 Ingredients</h2>
              <ul className="list-disc list-inside text-gray-600">
                {dish.ingredients.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between items-center text-xl font-bold text-green-700">
              <span>{dish.price} EGP</span>
              <span className="flex items-center text-yellow-500 text-base">
                <FaStar className="mr-1" /> {dish.rating}
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={added}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition flex items-center gap-2 shadow 
                ${added ? "bg-green-100 text-green-700" : "bg-green-600 hover:bg-green-700 text-white"}
              `}
            >
              {added ? (
                <>
                  <FaCheck className="text-green-600" /> Added!
                </>
              ) : (
                <>
                  <FaShoppingCart /> Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
       {/* Origin Section */}
<div className="bg-gradient-to-r from-green-50 to-white p-5 rounded-2xl shadow-sm border border-green-100 flex items-start gap-4 mb-6">
  <div className="text-3xl text-green-600">🌍</div>
  <div>
    <h3 className="text-lg font-bold text-green-800 mb-1">Origin</h3>
    <p className="text-sm text-gray-700 italic">{dish.origin}</p>
  </div>
</div>

{/* Nutrition Facts */}
<div className="mb-6">
  <h3 className="text-xl font-bold mb-4 text-green-800">Nutrition Facts</h3>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
      { icon: '🍗', label: 'Protein', value: `${dish.nutrition.protein}g` },
      { icon: '🥔', label: 'Carbs', value: `${dish.nutrition.carbs}g` },
      { icon: '🧈', label: 'Fats', value: `${dish.nutrition.fat}g` },
      { icon: '🧂', label: 'Sodium', value: `${dish.nutrition.sodium}mg` },
    ].map((item, index) => (
      <div key={index} className="bg-yellow-50 p-4 rounded-xl shadow-sm text-center border border-yellow-100">
        <div className="text-2xl text-green-600">{item.icon}</div>
        <p className="font-semibold text-green-800 mt-1">{item.label}</p>
        <p className="text-sm text-gray-700">{item.value}</p>
      </div>
    ))}
  </div>
</div>
<div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-2xl shadow-sm relative mb-6">
  <div className="absolute top-4 right-4 text-3xl text-yellow-300">👨‍🍳</div>
  <h3 className="text-xl font-bold text-green-800 mb-2">Chef’s Tips</h3>
  <p className="text-gray-700 italic leading-relaxed">“{dish.chefTips}”</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

  <div className="bg-green-50 border border-green-200 p-6 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-lg transition">
    <FaBoxOpen className="text-3xl text-green-600 mt-1" />
    <div>
      <h4 className="text-lg font-semibold text-green-800 mb-1">Packaging</h4>
      <p className="text-sm text-gray-700 leading-relaxed">{dish.packaging}</p>
    </div>
  </div>
  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl shadow-md flex items-start gap-4 hover:shadow-lg transition">
    <FaTruck className="text-3xl text-yellow-600 mt-1" />
    <div>
      <h4 className="text-lg font-semibold text-green-800 mb-1">Delivery</h4>
      <p className="text-sm text-gray-700 leading-relaxed">{dish.delivery}</p>
    </div>
  </div>
</div>

        <div>
  <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Reviews</h3>
  <div className="space-y-4">
    <div className="bg-white border-l-4 border-green-500 p-4 rounded-md shadow-sm">
      <p className="text-gray-700 italic">“Absolutely delicious! Will order again.”</p>
      <p className="text-sm text-gray-500 mt-1 text-right">– Sarah A.</p>
    </div>
    <div className="bg-white border-l-4 border-green-500 p-4 rounded-md shadow-sm">
      <p className="text-gray-700 italic">“Perfect spice level and portion size.”</p>
      <p className="text-sm text-gray-500 mt-1 text-right">– Ahmed M.</p>
    </div>
  </div>
</div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">You Might Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/products/${item.id}`}
                className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:border-green-300 transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-32 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded-full shadow">
                    {item.type}
                  </span>
                </div>
                <div className="p-4 space-y-1">
                  <h4 className="text-sm font-semibold text-gray-800 group-hover:text-green-700 transition">
                    {item.name}
                  </h4>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span className="text-green-700 font-bold">{item.price} EGP</span>
                    <span className="flex items-center gap-1 text-yellow-500 text-xs">
                      <FaStar /> {item.rating}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
