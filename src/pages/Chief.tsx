import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import cheif1 from "../assets/images/cheif1.jpg";
import cheif2 from "../assets/images/cheif2.jpg";
import cheif3 from "../assets/images/cheif3.jpg";
import cheif4 from "../assets/images/cheif4.jpg";
import chef5 from "../assets/images/cheif5.jpg";

const chefs = [
  {
    id: 1,
    name: "Chef Amina El-Tayeb",
    specialty: "Middle Eastern Cuisine",
    bio: "Bringing traditional flavors with a modern twist. 12+ years of experience in luxury kitchens.",
    image: cheif1,
  },
  {
    id: 2,
    name: "Chef Omar Khalid",
    specialty: "Street Food Fusion",
    bio: "Turns classic street dishes into gourmet experiences using fresh, local ingredients.",
    image: cheif2,
  },
  {
    id: 3,
    name: "Chef Nour Hanin",
    specialty: "Vegan & Organic",
    bio: "Passionate about clean eating and sustainability. Every plate tells a story.",
    image: cheif3,
  },
  {
    id: 4,
    name: "Chef Omar Khalid",
    specialty: "Street Food Fusion",
    bio: "Turns classic street dishes into gourmet experiences using fresh, local ingredients.",
    image: cheif4,
  },
  {
    id: 5,
    name: "Chef Nour Hanin",
    specialty: "Vegan & Organic",
    bio: "Passionate about clean eating and sustainability. Every plate tells a story.",
    image: chef5,
  },
];

export default function ChefsPage() {

  const [activeChef, setActiveChef] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleChefs = showAll ? chefs : chefs.slice(0, 3);

  return (
    <main className="bg-white dark:bg-neutral-900 text-gray-800 dark:text-neutral-100 min-h-screen pt-20 transition-colors duration-500">

      <section className="text-center py-16 bg-gradient-to-r from-green-100 to-yellow-50 dark:from-neutral-800 dark:to-neutral-700 shadow-inner">
        <h1 className="text-5xl font-extrabold text-green-800 dark:text-yellow-400 mb-4">
          👨‍🍳 Meet Our Master Chefs
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          The masterminds behind every dish – blending tradition, passion, and creativity.
        </p>
      </section>

 
      <section className="py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-500">
        {visibleChefs.map((chef) => (
          <div
            key={chef.id}
            className="relative bg-white dark:bg-neutral-800 p-6 rounded-3xl shadow-lg border border-green-100 dark:border-neutral-700 group transform transition duration-300 hover:scale-105"
          >
    
            <div className="relative w-36 h-36 mx-auto mb-4">
              <img
                src={chef.image}
                alt={chef.name}
                className="w-full h-full object-cover rounded-full border-4 border-green-200 dark:border-yellow-300 shadow-md"
              />

              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition duration-300">
                <FaFacebookF className="text-white hover:text-green-300 cursor-pointer" />
                <FaInstagram className="text-white hover:text-pink-300 cursor-pointer" />
                <FaTwitter className="text-white hover:text-blue-300 cursor-pointer" />
              </div>
            </div>

            <h2 className="text-xl font-bold text-green-800 dark:text-yellow-300 text-center">{chef.name}</h2>
            <span className="block text-sm text-white bg-green-500 dark:bg-yellow-500 px-3 py-1 mt-2 w-fit mx-auto rounded-full shadow-sm">
              {chef.specialty}
            </span>

      
            <p
              className={`mt-3 text-sm text-gray-600 dark:text-gray-300 text-center transition-all duration-300 ${
                activeChef === chef.id ? "max-h-40" : "max-h-16 overflow-hidden"
              }`}
            >
              {chef.bio}
            </p>
            <button
              onClick={() =>
                setActiveChef((prev) => (prev === chef.id ? null : chef.id))
              }
              className="block mx-auto mt-2 text-green-500 dark:text-yellow-400 hover:underline text-sm"
            >
              {activeChef === chef.id ? "Show Less" : "Read More"}
            </button>
          </div>
        ))}
      </section>

   
     <section className="text-center pb-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-yellow-400 dark:from-yellow-500 dark:to-yellow-300 hover:from-green-600 hover:to-yellow-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300"
        >
          {showAll ? "👋 Show Less" : "👨‍🍳 Show More"}
          <span
            className={`transform transition-transform duration-300 ${
              showAll ? "rotate-180" : "rotate-0"
            }`}
          >
            {showAll ? "⬆️" : "⬇️"}
          </span>
        </button>
      </section>

     
    </main>
  );
}
