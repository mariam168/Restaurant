import React from "react";
import chief from "../../assets/images/chief.jpg";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative flex justify-center items-center">
          <div className="absolute w-80 h-80 bg-green-100 rounded-full blur-2xl top-10 left-0 -z-10 animate-pulse" />
          <div className="relative  h-[500px] ">
            <img
              src={chief}
              alt="Chef"
              className="w-full h-full object-cover  rounded-full border-[6px] border-green-300 shadow-lg transition-transform duration-500 hover:scale-105"
            />
            <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white shadow-md px-4 py-1 text-sm rounded-full font-semibold text-green-700">
              Our Best Chef 👨‍🍳
            </span>
          </div>
        </div>
        <div className="animate-fade-in">
          <p className="text-sm font-bold text-green-500 uppercase mb-3 tracking-widest">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
            What Our Customers Say <br className="hidden md:block" />
            <span className="text-green-600">About Us</span>
          </h2>
          <div className="relative pl-10 text-gray-600 mb-6 text-lg leading-relaxed">
            <FaQuoteLeft className="absolute left-0 top-1 text-green-400 text-xl" />
            “I had the pleasure of dining at <span className="text-green-700 font-semibold">Foodi</span> last night, and I’m still raving about the experience! The attention to detail in presentation and service was impeccable.”
          </div>
          <div className="flex items-center gap-4 mt-6">
            <div className="flex -space-x-3">
              <img src="https://i.pravatar.cc/40?img=1" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/40?img=2" className="w-10 h-10 rounded-full border-2 border-white" />
              <img src="https://i.pravatar.cc/40?img=3" className="w-10 h-10 rounded-full border-2 border-white" />
            </div>
            <div>
              <p className="text-sm text-gray-800 font-semibold">Loved by Thousands</p>
              <p className="text-sm text-yellow-600">⭐ 4.8 (6.2k+ Reviews)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
