
export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white  mt-20  text-gray-700">
      <section className="bg-gradient-to-r from-green-50 to-yellow-50 dark:bg-black py-16 text-center px-6">
        <h1 className="text-4xl font-extrabold text-green-800 mb-4">🍽️ About Us</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          We’re passionate food lovers serving flavor, freshness, and flair — one dish at a time.
        </p>
      </section>
      <section className="py-12 px-6 max-w-4xl mx-auto space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-2">Our Story</h2>
          <p className="text-gray-600">
            Founded by a group of chefs and entrepreneurs, our journey began with one mission: to
            craft food experiences that feel like home. With local ingredients and global inspiration,
            every plate celebrates culture and connection.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-yellow-600 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To bring people together through food that’s authentic, nourishing, and unforgettable.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-2">What We Believe</h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-600">
            <li>🌿 Fresh ingredients make the best meals</li>
            <li>🤝 Hospitality is about care, not just service</li>
            <li>🌍 Diversity in food reflects the beauty of cultures</li>
          </ul>
        </div>
      </section>
      <section className="bg-green-50 py-12 px-6 text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-6">👩‍🍳 Meet the Team</h2>
        <p className="max-w-xl mx-auto text-gray-600">
          From expert chefs to friendly delivery staff — we’re a team built on passion and purpose.
        </p>
      </section>
      <section className="py-12 text-center">
        <p className="mb-4 text-lg font-semibold text-gray-700">
          Ready to taste the difference?
        </p>
        <a
          href="/menu"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium shadow-md transition"
        >
          Browse Our Menu 🌱
        </a>
      </section>
    </main>
  );
}
