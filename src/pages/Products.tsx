// src/pages/MenuWithFilter.tsx
import { useState } from "react";
import { DishCard } from "../components/DishCard";
import { Filters } from "../components/Filters";
import { allDishes } from "../data/dishes";

export default function MenuWithFilter() {
  const [filters, setFilters] = useState({
    searchTerm: "",
    category: "All",
    priceRange: "All",
    minRating: null,
    type: "All"
  });

  const handleFilterChange = (filterName: string, value: any) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
  };

  const filteredDishes = allDishes.filter((dish) => {
    const matchesSearch = dish.name.toLowerCase().includes(filters.searchTerm.toLowerCase());
    const matchesCategory = filters.category === "All" || dish.category === filters.category;
    const matchesPrice =
      filters.priceRange === "All" ||
      (filters.priceRange === "< $10" && dish.priceValue < 10) ||
      (filters.priceRange === "$10 - $15" && dish.priceValue >= 10 && dish.priceValue <= 15) ||
      (filters.priceRange === "> $15" && dish.priceValue > 15);
    const matchesRating = !filters.minRating || dish.rating >= filters.minRating;
    const matchesType = filters.type === "All" || dish.type === filters.type;

    return matchesSearch && matchesCategory && matchesPrice && matchesRating && matchesType;
  });

  return (
    <>
      <section className="bg-gradient-to-br from-white via-green-50 to-white min-h-screen mt-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-green-700 mb-12 drop-shadow-md">
            🍽️ Explore Our Menu
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1 bg-white rounded-2xl shadow p-5 border border-green-100">
              <Filters
                categories={["Salad", "Grill", "Dessert"]}
                types={["Veg", "Non-Veg"]}
                priceRanges={["< $10", "$10 - $15", "> $15"]}
                searchTerm={filters.searchTerm}
                setSearchTerm={(val) => handleFilterChange("searchTerm", val)}
                selectedCategory={filters.category}
                setSelectedCategory={(val) => handleFilterChange("category", val)}
                priceRange={filters.priceRange}
                setPriceRange={(val) => handleFilterChange("priceRange", val)}
                selectedMinRating={filters.minRating}
                setMinRating={(val) => handleFilterChange("minRating", val)}
                selectedType={filters.type}
                setSelectedType={(val) => handleFilterChange("type", val)}
              />
            </div>
            <div className="md:col-span-3">
              {filteredDishes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDishes.map((dish) => (
                    <DishCard key={dish.id} dish={dish} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 text-lg font-medium mt-20">
                  No dishes found. Try adjusting the filters.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
