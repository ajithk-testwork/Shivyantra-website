import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../Utilis/api"; 

const HomeSlider = () => {
  const [sliders, setSliders] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); 

  // ✅ Fetch slider data
  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const res = await api.get(
          "/home-sliders?populate[ImageName][fields][0]=url"
        );
        const sliderArray = res.data?.data || [];
        setSliders(sliderArray);
      } catch (error) {
        console.error("❌ Error fetching sliders:", error);
      }
    };
    fetchSliders();
  }, []);

  // ✅ Auto-slide every 5 seconds
  useEffect(() => {
    if (sliders.length === 0) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [sliders]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % sliders.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? sliders.length - 1 : prev - 1
    );
  };

  // ✅ Animation Variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1, zIndex: 1 },
    exit: (direction) => ({
      x: direction > 0 ? -150 : 150,
      opacity: 0,
      zIndex: 0,
    }),
  };

  if (sliders.length === 0) {
    return <p className="text-center mt-10 text-gray-500">Loading sliders...</p>;
  }

  return (
    <div className="relative w-full h-[280px] sm:h-[400px] md:h-[550px] lg:h-[650px] overflow-hidden rounded-none sm:rounded-2xl shadow-lg">
      <AnimatePresence custom={direction} mode="wait">
        <motion.img
          key={sliders[currentIndex]?.id}
          src={
            sliders[currentIndex]?.ImageName?.formats?.large?.url ||
            sliders[currentIndex]?.ImageName?.url ||
            ""
          }
          alt={sliders[currentIndex]?.Name || "Slider image"}
          className="absolute w-full h-full object-cover object-center"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 200, damping: 25 },
            opacity: { duration: 0.4 },
          }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 sm:p-2 rounded-full transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1.5 sm:p-2 rounded-full transition"
      >
        ❯
      </button>

      <div className="absolute bottom-4 sm:bottom-6 w-full flex justify-center gap-2 sm:gap-3">
        {sliders.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-amber-400 scale-125"
                : "bg-gray-300 hover:bg-amber-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
