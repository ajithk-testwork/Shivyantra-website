import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../Utilis/api";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CategorySlider = ({ CategoryData }) => {
  const navigate = useNavigate();
  const baseUrl = api.defaults.baseURL;
  const category = CategoryData?.attributes?.Category || [];
  const scrollRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);

  // Manual Scroll
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Auto Scroll
  useEffect(() => {
    if (!autoScroll) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
        // Loop back to start if reached end
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [autoScroll]);

  // Navigate on click
  const handleClick = (categoryName) => {
    navigate(`/shop?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50 overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-[2px] bg-gradient-to-r from-gray-400 to-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-[#3a3a3a]"> Shop by </span>
            <span className="text-[#b45309]">Category</span>
          </h2>
          <p className="text-gray-600 mt-3">
             Discover curated styles crafted for you
          </p>
        </div>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/90 shadow-lg hover:shadow-xl rounded-full p-3 transition duration-300 hover:bg-orange-100 z-10"
      >
        <ChevronLeft className="text-orange-600" size={26} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/90 shadow-lg hover:shadow-xl rounded-full p-3 transition duration-300 hover:bg-orange-100 z-10"
      >
        <ChevronRight className="text-orange-600" size={26} />
      </button>

      {/* Slider Container */}
      <motion.div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-10 pb-10 scrollbar-hide scroll-smooth"
        onMouseEnter={() => setAutoScroll(false)}
        onMouseLeave={() => setAutoScroll(true)}
      >
        {category.map((cate, index) => {
          const catData = cate?.category?.data?.attributes;
          const imageUrl = `${baseUrl}${catData?.Image?.data?.attributes?.url}`;

          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleClick(catData?.CategoryName)}
              className="relative flex-shrink-0 w-64 bg-white rounded-3xl shadow-md hover:shadow-2xl cursor-pointer transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={imageUrl}
                  alt={catData?.CategoryName}
                  className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Text */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {catData?.CategoryName}
                </h3>
                <p className="text-sm text-gray-500 italic">
                  Discover timeless pieces
                </p>
                <div className="mt-3 w-12 mx-auto border-b-2 border-orange-400 hover:w-20 transition-all"></div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default CategorySlider;
