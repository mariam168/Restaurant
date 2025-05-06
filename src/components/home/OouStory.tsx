import React from "react";
import { Truck, Gift, ShoppingCart, Utensils } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-neutral-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div className="space-y-6">
          <p className="text-sm text-pink-600 font-semibold uppercase tracking-wide">
            Our Story & Services
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-snug">
            Our Culinary Journey <br className="hidden sm:block" /> And Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            Rooted in passion, we create unforgettable dining experiences and offer exceptional services—blending culinary artistry with warm hospitality.
          </p>
          <button className="mt-4 px-6 py-2 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white rounded-full font-semibold transition duration-300 shadow-md">
            Explore
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <ServiceCard
            icon={<Utensils className="text-green-700 dark:text-yellow-400 w-6 h-6" />}
            title="Catering"
            desc="Delight your guests with our flavors and presentation"
          />
          <ServiceCard
            icon={<Truck className="text-green-700 dark:text-yellow-400 w-6 h-6" />}
            title="Fast Delivery"
            desc="We deliver your order promptly to your door"
          />
          <ServiceCard
            icon={<ShoppingCart className="text-green-700 dark:text-yellow-400 w-6 h-6" />}
            title="Online Ordering"
            desc="Explore menus & order with ease using our Online Ordering"
          />
          <ServiceCard
            icon={<Gift className="text-green-700 dark:text-yellow-400 w-6 h-6" />}
            title="Gift Cards"
            desc="Give the gift of exceptional dining via Food Gift Cards"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white/70 dark:bg-white/5 backdrop-blur-lg hover:shadow-xl transition-all duration-300 rounded-xl p-6 space-y-4 border border-gray-200 dark:border-neutral-700 hover:scale-105">
      <div className="bg-gradient-to-tr from-green-100 to-green-200 dark:from-yellow-600/10 dark:to-yellow-500/10 w-12 h-12 flex items-center justify-center rounded-full shadow-sm">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{desc}</p>
    </div>
  );
}
