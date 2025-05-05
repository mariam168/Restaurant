
import { useParams, Link } from "react-router-dom";
import { FaStar, FaShoppingCart, FaClock, FaFireAlt, FaListUl } from "react-icons/fa";
import { allDishes } from "../data/dishes";
import { useCart } from "../context/CartContext";

export default function DishDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const dish = allDishes.find((d) => d.id.toString() === id);

  if (!dish) {
    return (
      <section className="px-6 py-16 min-h-screen flex items-center justify-center">
        <div className="text-center text-gray-600">
          <h2 className="text-3xl font-bold mb-4">Dish Not Found</h2>
          <p className="mb-6">The dish you're looking for doesn't exist.</p>
          <Link to="/" className="text-green-600 hover:underline">Go back to menu</Link>
        </div>
      </section>
    );
  }

  return (
    <main className="px-6 py-16 bg-gradient-to-br from-green-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/2">
          <img
            src={dish.image}
            alt={`Image of ${dish.name}`}
            className="rounded-3xl shadow-xl w-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">{dish.name}</h1>
          <p className="text-gray-600 mb-5 text-lg leading-relaxed">{dish.description}</p>

          <div className="flex flex-wrap items-center gap-6 mb-5 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <FaClock className="text-green-500" /> {dish.prepTime}
            </span>
            <span className="flex items-center gap-2">
              <FaFireAlt className="text-red-500" /> {dish.calories} kcal
            </span>
            <span className="flex items-center gap-2">
              <FaListUl className="text-yellow-500" /> {dish.category}
            </span>
          </div>

          <div className="mb-5">
            <h2 className="text-md font-semibold text-gray-800 mb-2">🌿 Ingredients</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {dish.ingredients.map((item: string, idx: number) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between items-center mb-6">
            <span className="text-2xl font-bold text-green-700">{dish.price} EGP</span>
            <span className="flex items-center gap-1 text-yellow-500 text-md font-medium">
              <FaStar /> {dish.rating}
            </span>
          </div>

          <button
           onClick={() => {
            const item = {
              id: dish.id.toString(),
              name: dish.name,
              image: dish.image,
              price: dish.price,
              quantity: 1,
            };
            console.log("TRYING TO ADD ITEM:", item); 
            addToCart(item);
          }}
          
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition flex items-center gap-2"
          >
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
