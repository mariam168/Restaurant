// src/data/dishes.ts
export type Dish = {
  id: number;
  name: string;
  description: string;
  image: string;
  gallery: string[];
  price: number;
  rating: number;
  category: string;
  type: string;
  prepTime: string;
  calories: number;
  ingredients: string[];
  origin: string;
  chefTips: string;
  nutrition: {
    protein: number;
    carbs: number;
    fat: number;
    sodium: number;
  };
  packaging: string;
  delivery: string;
};
import { i } from "framer-motion/client";
import dish1 from "../assets/images/food1.jpg";
import dish2 from "../assets/images/food2.png";
import dish3 from "../assets/images/food3.jpg";
import dish4 from "../assets/images/food4.jpg";
export const allDishes: Dish[] = [
  {
    id: 1,
    name: "Grilled Chicken Salad",
    description:
      "A healthy mix of grilled chicken, fresh greens, cherry tomatoes, cucumbers, and vinaigrette dressing.",
    image: dish1,
    gallery: [
     
      dish2,
      dish3,
      dish4,
    ],
    price: 120,
    rating: 4.5,
    category: "Salad",
    type: "Non-Vegetarian",
    prepTime: "15 mins",
    calories: 350,
    ingredients: ["Chicken Breast", "Lettuce", "Tomatoes", "Cucumber", "Dressing"],
    origin: "Mediterranean",
    chefTips:
      "Best served cold with extra virgin olive oil and lemon zest for extra freshness.",
    nutrition: {
      protein: 30,
      carbs: 15,
      fat: 12,
      sodium: 210,
    },
    packaging: "Eco-friendly container with separate dressing cup.",
    delivery: "Delivered within 30–40 minutes in chilled packaging.",
  },
  {
    id: 2,
    name: "Vegan Buddha Bowl",
    description:
      "A vibrant bowl of quinoa, roasted veggies, chickpeas, and tahini sauce.",
    image: dish2,
    gallery: [
      dish1,
      dish3,
      dish4,
    ],
    price: 100,
    rating: 4.7,
    category: "Bowls",
    type: "Vegan",
    prepTime: "20 mins",
    calories: 400,
    ingredients: [
      "Quinoa",
      "Roasted Sweet Potato",
      "Broccoli",
      "Chickpeas",
      "Tahini Sauce",
    ],
    origin: "Fusion",
    chefTips:
      "Top with sesame seeds and a dash of lime juice for zing.",
    nutrition: {
      protein: 18,
      carbs: 40,
      fat: 14,
      sodium: 180,
    },
    packaging: "Biodegradable bowl with secure lid.",
    delivery: "Delivered fresh and warm in under 30 minutes.",
    
  },
  
];
