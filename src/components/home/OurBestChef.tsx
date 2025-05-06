import chief from "../../assets/images/chief.jpg";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-white via-green-50 to-white dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 overflow-hidden transition-colors duration-300">
      <div className="absolute w-96 h-96 bg-green-100 dark:bg-green-800/20 rounded-full top-[-100px] left-[-100px] blur-3xl opacity-40 animate-pulse z-0"></div>
      <div className="absolute w-72 h-72 bg-yellow-100 dark:bg-yellow-600/20 rounded-full bottom-[-80px] right-[-80px] blur-3xl opacity-30 animate-pulse z-0"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="relative flex justify-center items-center">
          <div className="absolute w-80 h-80 bg-green-200 dark:bg-green-700/20 rounded-full blur-2xl top-16 left-0 -z-10 animate-pulse" />
          <div className="relative h-[500px] w-[500px] rounded-full overflow-hidden shadow-2xl group transition-transform duration-500 hover:scale-105 border-[8px] border-white dark:border-neutral-800">
            <img
              src={chief}
              alt="Chef"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-neutral-800/90 shadow-lg px-5 py-1.5 text-sm rounded-full font-semibold text-green-700 dark:text-yellow-400">
              ⭐ Our Best Chef
            </span>
          </div>
        </div>

        <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-2xl p-10 shadow-xl transition-all duration-500 hover:shadow-2xl animate-fade-in border border-green-100 dark:border-neutral-700">
          <p className="text-sm font-bold text-green-500 uppercase mb-4 tracking-widest">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            What Our Customers Say <br />
            <span className="text-green-600 dark:text-yellow-400">About Us</span>
          </h2>
          <div className="relative pl-10 text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            <FaQuoteLeft className="absolute left-0 top-1 text-green-400 dark:text-yellow-400 text-xl" />
            “Dining at <span className="text-green-700 dark:text-yellow-300 font-semibold">Foodi</span> was truly unforgettable. The flavors, ambiance, and service all exceeded expectations. Can’t wait to come back!”
          </div>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/40?img=1" className="w-11 h-11 rounded-full border-2 border-white dark:border-neutral-800 shadow" />
              <img src="https://i.pravatar.cc/40?img=2" className="w-11 h-11 rounded-full border-2 border-white dark:border-neutral-800 shadow" />
              <img src="https://i.pravatar.cc/40?img=3" className="w-11 h-11 rounded-full border-2 border-white dark:border-neutral-800 shadow" />
            </div>
            <div>
              <p className="text-sm text-gray-800 dark:text-white font-semibold">Loved by Thousands</p>
              <p className="text-sm text-yellow-600 dark:text-yellow-400">⭐ 4.8 (6,200+ Reviews)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
