import { useNavigate } from "react-router-dom";

const chefs = [
  {
    id: 1,
    name: "Chef Amina El-Tayeb",
    specialty: "Middle Eastern Cuisine",
    bio: "Bringing traditional flavors with a modern twist. 12+ years of experience in luxury kitchens.",
    image: "/images/chefs/amina.jpg",
  },
  {
    id: 2,
    name: "Chef Omar Khalid",
    specialty: "Street Food Fusion",
    bio: "Turns classic street dishes into gourmet experiences using fresh, local ingredients.",
    image: "/images/chefs/omar.jpg",
  },
  {
    id: 3,
    name: "Chef Nour Hanin",
    specialty: "Vegan & Organic",
    bio: "Passionate about clean eating and sustainability. Every plate tells a story.",
    image: "/images/chefs/nour.jpg",
  },
];

export default function ChefsPage() {
  const navigate = useNavigate();

  return (
    <main className="bg-white min-h-screen mt-20">
      <section className="text-center py-16 bg-gradient-to-r from-green-50 to-yellow-50">
        <h1 className="text-4xl font-extrabold text-green-800 mb-4">👨‍🍳 Meet Our Chefs</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          The masterminds behind every dish – blending tradition, passion, and creativity.
        </p>
      </section>
      <section className="py-12 px-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {chefs.map((chef) => (
          <div
            key={chef.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-green-100"
          >
            <img
              src={chef.image}
              alt={chef.name}
              className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-green-100"
            />
            <h2 className="text-xl font-bold text-green-700 text-center">{chef.name}</h2>
            <p className="text-sm text-yellow-600 text-center italic">{chef.specialty}</p>
            <p className="mt-3 text-sm text-gray-600 text-center">{chef.bio}</p>
          </div>
        ))}
      </section>
      <section className="text-center py-10">
        <button
          onClick={() => navigate("/menu")}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold shadow-md"
        >
          Explore Their Dishes 🍽️
        </button>
      </section>
    </main>
  );
}
