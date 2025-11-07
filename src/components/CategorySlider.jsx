import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import api from "../Utilis/api";

const CategorySlider = () => {
  const [categories, setCategories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/categories?populate=*");
        setCategories(res.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(interval);
  });

  const nextSlide = () => setCurrentIndex((prev) => (prev === categories.length - 3 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? categories.length - 3 : prev - 1));

  const handleCategoryClick = (name) => {
    navigate(`/shop?category=${encodeURIComponent(name)}`);
  };

  if (loading)
    return <div className="text-center py-20 text-lg text-gray-600">Loading Categories...</div>;

  return (
    <div className="w-full py-16 px-4 sm:px-10 relative overflow-hidden">
      <div className="text-center justify-center">
        <h2 className="text-4xl sm:text-5xl font-serif text-[#5a3e1b] tracking-wide">
          The Essence of <span className="text-[#a36f1f]">Shivyantra Category</span>
        </h2>
        <p className="text-[#876c3f] mt-3 italic text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Where tradition meets divine craftsmanship
        </p>
        <div className="mt-3 w-28 h-[2px] bg-amber-700 mx-auto"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
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
          {categories.map((cate, i) => {
            const imageUrl =
              cate?.CategoryImage?.[0]?.url ||
              cate?.CategoryImage?.[0]?.formats?.thumbnail?.url;
            const categoryName = cate?.Name || "Unnamed Category";

            return (
              <div
                key={i}
                onClick={() => handleCategoryClick(categoryName)}
                className="cursor-pointer relative mt-10 min-w-[300px] bg-gradient-to-br from-amber-50 via-white to-orange-50 rounded-3xl shadow-lg hover:shadow-2xl border border-amber-200 group overflow-visible transform hover:-rotate-2 transition duration-500"
              >
                <div className="relative -top-10 mx-auto w-40 h-40 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <img
                    src={imageUrl}
                    alt={categoryName}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6 pt-2 text-center space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                    {categoryName}
                  </h3>
                </div>
              </div>
            );
          })}
        </motion.div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-amber-100 z-10 transition"
        >
          <ChevronRight className="text-amber-700" />
        </button>
      </div>
    </div>
  );
};

export default CategorySlider;
