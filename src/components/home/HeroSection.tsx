import React, { useState, useEffect, JSX } from "react";
import dish1 from "../../assets/images/food1.jpg";
import dish2 from "../../assets/images/food3.jpg";
import dish3 from "../../assets/images/food4.jpg";
import dish4 from "../../assets/images/food5.jpg";
import {
  PlayCircle,
  ShoppingBag,
  Utensils,
  Martini,
  MessageCircle,
  User,
  Mic,
} from "lucide-react";

interface Dish {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function HeroSection(): JSX.Element {
  const dishes: Dish[] = [
    {
      image: dish1,
      title: "ARTABAK PAK ADI",
      subtitle: "PAK ADI",
      description: "#1 Most loved - Delicious and crispy!",
    },
    {
      image: dish2,
      title: "NASI GORENG",
      subtitle: "SPICY DELIGHT",
      description: "#2 Customer favorite - Spicy & flavorful",
    },
    {
      image: dish3,
      title: "MARTABAK MANIS",
      subtitle: "SWEET TREAT",
      description: "#3 Sweet pick - Soft and sweet pancake",
    },
    {
      image: dish4,
      title: "MARTABAK MANIS",
      subtitle: "SWEET TREAT",
      description: "#3 Sweet pick - Soft and sweet pancake",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [key, setKey] = useState<number>(0);
  const [showText, setShowText] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % dishes.length);
        setShowText(true);
      }, 100);
      return () => clearTimeout(timeout);
    }, 10000);
    return () => clearInterval(interval);
  }, [dishes.length]);

  const handleSelectDish = (index: number): void => {
    setShowText(false);
    setKey((prev) => prev + 1);
    setTimeout(() => {
      setCurrentIndex(index);
      setShowText(true);
    }, 500);
  };

  const currentDish = dishes[currentIndex];
  const animationRadius = 460;

  return (
    <>
      <style>{`
     @keyframes rotateDishContainer {
  0%   { transform: rotate(-10deg); }
  30%  { transform: rotate(110deg); animation-timing-function: ease-in; }
  60%  { transform: rotate(13=10deg); animation-timing-function: ease-out; }

  /* نثبت عند 130deg من 60% إلى 80% */
  70%  { transform: rotate(110deg); }
  80%  { transform: rotate(110deg); }

  /* توقف عند 300deg من 80% إلى 100% */
  90%  { transform: rotate(110deg); }

  /* نكمل الحركة بعد التوقف */
  100% { transform: rotate(220deg); }
}



      @keyframes fadeDish {
  0% { opacity: 0; }
  10% { opacity: 1; }
  50% { opacity: 1; }
  55% { opacity: 1; }
 
  100% { opacity: 0; }
}


        @keyframes fadeTextIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-rotation-container {
          position: absolute;
          width: 1px;
          height: 1px;
          left: 280px;
          top: 160px;
          z-index: 10;
         animation: rotateDishContainer 6s ease-in-out forwards;

        }

        .dish-image-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 270px;
          height: 270px;
          transform: translateY(-${animationRadius}px);
          animation: fadeDish 8s ease-in-out forwards;
        }

      .background-circle {
  position: absolute;
  width: 900px;
  height: 900px;
  top: -350px;
  left: -250px;
  border-radius: 50%;
  z-index: 0;
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.background-circle::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  padding: 35px; /* سمك الـ border */
  background: conic-gradient(
    from 0deg,
rgba(96, 102, 93, 0.45),
rgba(202, 209, 193, 0.22),
rgba(114, 124, 109, 0.16)
  );
  -webkit-mask: 
    radial-gradient(farthest-side, transparent calc(100% - 35px), black 100%);
  mask: 
    radial-gradient(farthest-side, transparent calc(100% - 35px), black 100%);
}

        .fade-text {
          animation: fadeTextIn 0.8s ease-out;
        }
      `}</style>

      <section className="w-full h-full pt-16 bg-gradient-to-br from-[#f5f5f5] via-[#eeeeee] to-[#e0e0e0] min-h-[70vh] py-16 px-6 relative overflow-hidden ">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          <div className="flex justify-center overflow-hidden relative min-h-[660px]">
            <div className="background-circle" />
            <div key={key} className="animate-rotation-container">
              <div className="dish-image-wrapper">
                <img
                  src={currentDish.image}
                  alt="Dish"
                  className="w-full h-full object-cover rounded shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 my-auto pt-12 text-left relative z-10">
            {showText && (
              <>
                <p className="text-xl text-gray-600 font-semibold fade-text">
                  {currentDish.description}
                </p>
                <h1 className="text-6xl font-bold leading-tight tracking-tight text-gray-800 fade-text">
                  <span className="block text-7xl bg-gradient-to-r from-green-500 via-lime-400 to-green-700 text-transparent bg-clip-text">
                    {currentDish.title}
                  </span>
                  <span className="block text-gray-700 mt-2 text-3xl">
                    {currentDish.subtitle}
                  </span>
                </h1>

                <div className="flex items-center gap-6 pt-6">
                  <button className="flex items-center gap-2 px-5 py-3 text-white bg-green-600 hover:bg-green-700 transition rounded-full shadow-lg text-lg font-semibold">
                    <PlayCircle size={20} />
                    Play Video
                  </button>

                  <button className="flex items-center gap-2 px-5 py-3 text-green-700 border-2 border-green-600 hover:bg-green-600 hover:text-white transition rounded-full shadow text-lg font-semibold">
                    <ShoppingBag size={20} />
                    Order Food
                  </button>
                </div>
              </>
            )}
            <div className="flex justify-start gap-4 pt-8">
              {dishes.map((dish, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-xl backdrop-blur-md bg-white/30 shadow-md transition-all duration-300 ${
                    currentIndex === i ? "ring-4 ring-green-500 ring-offset-2 scale-110" : ""
                  }`}
                >
                  <img
                    src={dish.image}
                    alt={`icon-${i}`}
                    onClick={() => handleSelectDish(i)}
                    className={`w-16 h-16 object-cover rounded-full border-2 cursor-pointer transition-transform hover:scale-110 duration-300 ${
                      currentIndex === i
                        ? "shadow-lg bg-white p-1"
                        : "border-white opacity-80"
                    }`}
                  />
                </div>
              ))}
            </div>


            <div className="flex gap-6 items-center  pt-10 ">
              {[
                { icon: <Utensils size={24} className="text-green-600" />, label: "Food" },
                { icon: <Martini size={24} className="text-pink-500" />, label: "Drinks" },
                { icon: <MessageCircle size={24} className="text-blue-500" />, label: "Chat" },
                { icon: <User size={24} className="text-purple-500" />, label: "Profile" },
                { icon: <Mic size={24} className="text-red-500" />, label: "Voice" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-14 h-14 flex items-center justify-center rounded-2xl backdrop-blur-md bg-white/20 shadow-md border border-white/30 hover:scale-110 transition-all cursor-pointer"
                >
                  {item.icon}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
