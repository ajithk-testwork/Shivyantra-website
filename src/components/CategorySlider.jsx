import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const CategorySlider = () => {
  const products = [
    {
      id: 1,
      name: "Classic Hoodie",
      price: "₹1,299",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Casual T-Shirt",
      price: "₹799",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Denim Jacket",
      price: "₹2,199",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
    },
    {
      id: 4,
      name: "Sports Shoes",
      price: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Stylish Backpack",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      rating: 4.3,
    },
    {
      id: 6,
      name: "Trendy Sunglasses",
      price: "₹699",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      rating: 4.1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === products.length - 3 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? products.length - 3 : prev - 1
    );
  };

  return (
    <div className="w-full bg-gradient-to-b from-amber-50 to-white py-16 px-4 sm:px-10 relative overflow-hidden">
      <div className="text-center justify-center">
        <h2 className="text-4xl sm:text-5xl font-serif text-[#5a3e1b] tracking-wide">
          The Essence of <span className="text-[#a36f1f]">Shivyantra Category</span>
        </h2>
        <p className="text-[#876c3f] mt-3 italic text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Where tradition meets divine craftsmanship
        </p>
        <div className="mt-3 w-28 h-[2px] bg-amber-700 mx-auto"></div>
      </div>

      <div className="relative   max-w-6xl mx-auto">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-amber-100 z-10 transition"
        >
          <ChevronLeft className="text-amber-700" />
        </button>

        <motion.div
          className="flex gap-6 py-14 transition-transform duration-700 ease-in-out"
          animate={{ x: -currentIndex * 320 }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="relative mt-10 min-w-[300px] bg-gradient-to-br from-amber-50 via-white to-orange-50 rounded-3xl shadow-lg hover:shadow-2xl border border-amber-200 group overflow-visible transform hover:-rotate-2 transition duration-500"
            >
              <div className="relative -top-10 mx-auto w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6 pt-2 text-center space-y-2">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {product.name}
                </h3>


              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-amber-200/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"></div>
            </div>
          ))}
        </motion.div>


        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-amber-100 z-10 transition"
        >
          <ChevronRight className="text-amber-700" />
        </button>
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {[...Array(products.length - 2)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === i
              ? "bg-amber-600 scale-110"
              : "bg-gray-300 hover:bg-amber-400"
              }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
