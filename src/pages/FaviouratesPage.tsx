import { allDishes } from "../data/dishes";
import { DishCard } from "../components/DishCard";

export default function FavoritesPage() {
  const favoriteIds: number[] = JSON.parse(localStorage.getItem("favorites") || "[]");
  const favoriteDishes = allDishes.filter((dish) => favoriteIds.includes(dish.id));

  if (favoriteDishes.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 bg-white dark:bg-neutral-900">
    
        <div className="text-6xl mb-6">💔</div>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">
          No Favorites Yet
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Browse dishes and tap the ❤️ icon to save your favorites.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white  dark:bg-neutral-900">
    <div className="px-6 py-20 max-w-7xl mx-auto min-h-screen bg-white dark:bg-neutral-900">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        <h1 className="text-3xl font-extrabold text-green-700 dark:text-yellow-300">
          ❤️ Your Favorite Dishes
        </h1>
        <span className="bg-green-100 dark:bg-neutral-700 text-green-800 dark:text-yellow-300 font-semibold px-4 py-1 rounded-full text-sm shadow-sm">
          {favoriteDishes.length} item{favoriteDishes.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {favoriteDishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
    </div>
  );
}
