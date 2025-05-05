import { allDishes } from "../data/dishes";
import { DishCard } from "../components/DishCard";

export default function FavoritesPage() {
  const favoriteIds: number[] = JSON.parse(localStorage.getItem("favorites") || "[]");
  const favoriteDishes = allDishes.filter((dish) => favoriteIds.includes(dish.id));

  if (favoriteDishes.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 px-4 py-20">
        <h2 className="text-xl font-semibold text-center">
          You haven’t added any favorites yet.
        </h2>
      </div>
    );
  }

  return (
    <div className="px-6 py-16 max-w-6xl mx-auto min-h-screen">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold text-green-700">
          ❤️ Your Favorite Dishes
        </h1>
        <span className="bg-green-100 text-green-800 font-semibold px-4 py-1 rounded-full text-sm shadow">
          {favoriteDishes.length} item{favoriteDishes.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {favoriteDishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
}
