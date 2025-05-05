// src/data/dishes.ts
export type Dish = {
  id: string;
  name: string;
  description: string;
  price: string;
  priceValue: number;
  rating: number;
  image: string;
  category: "Salad" | "Grill" | "Dessert";
  type: "Veg" | "Non-Veg";
  prepTime: string;
  calories: number;
  ingredients: string[];
};

import dish1 from "../assets/images/food1.jpg";
import dish2 from "../assets/images/food3.jpg";
import dish3 from "../assets/images/food4.jpg";

export const allDishes: Dish[] = [
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
    prepTime: "10 min",
    calories: 250,
    ingredients: ["Lettuce", "Tomato", "Cucumber", "Pita Chips", "Olive Oil"]
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
    prepTime: "12 min",
    calories: 220,
    ingredients: ["Carrot", "Broccoli", "Bell Pepper", "Vinegar", "Lettuce"]
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
    prepTime: "15 min",
    calories: 300,
    ingredients: ["Eggs", "Zucchini", "Spinach", "Salt", "Black Pepper"]
  },
  {
    id: "4",
    name: "Fattoush Salad",
    description: "Fresh veggies tossed with crispy pita chips.",
    price: "$12.00",
    priceValue: 12,
    rating: 4.6,
    image: dish1,
    category: "Salad",
    type: "Veg",
    prepTime: "10 min",
    calories: 250,
    ingredients: ["Lettuce", "Tomato", "Cucumber", "Pita Chips", "Olive Oil"]
  },
  {
    id: "5",
    name: "Vegetable Salad",
    description: "Colorful mix of garden vegetables.",
    price: "$10.00",
    priceValue: 10,
    rating: 4.8,
    image: dish2,
    category: "Salad",
    type: "Veg",
    prepTime: "12 min",
    calories: 220,
    ingredients: ["Carrot", "Broccoli", "Bell Pepper", "Vinegar", "Lettuce"]
  },
  {
    id: "6",
    name: "Egg Veggie Salad",
    description: "Boiled eggs with sautéed vegetables.",
    price: "$13.00",
    priceValue: 13,
    rating: 4.7,
    image: dish3,
    category: "Grill",
    type: "Non-Veg",
    prepTime: "15 min",
    calories: 300,
    ingredients: ["Eggs", "Zucchini", "Spinach", "Salt", "Black Pepper"]
  },
];
