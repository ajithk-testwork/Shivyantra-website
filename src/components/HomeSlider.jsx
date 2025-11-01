import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../Utilis/api"; // baseURL = "https://shivyantra.onrender.com/api"

const HomeSlider = () => {
  const [sliders, setSliders] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = previous

  // ✅ Fetch slider data
  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const res = await api.get("/home-sliders?populate[ImageName][fields][0]=url");
        const sliderArray = res.data?.data || [];
        setSliders(sliderArray);
      } catch (error) {
        console.error("❌ Error fetching sliders:", error);
      }
    };
    fetchSliders();
  }, []);

  // ✅ Auto-slide every 4 seconds
  useEffect(() => {
    if (sliders.length === 0) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
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
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      zIndex: 0,
    }),
  };

  if (sliders.length === 0) {
    return <p className="text-center mt-10 text-gray-500">Loading sliders...</p>;
  }

  return (
    <div className="relative w-full h-[550px] md:h-[650px]  overflow-hidden rounded-2xl shadow-lg">
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
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
          }}
        />
      </AnimatePresence>

      {/* ✅ Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />

      {/* ✅ Prev / Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
      >
        ❯
      </button>

      {/* ✅ Navigation Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {sliders.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-white scale-125"
                : "bg-gray-400/70 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
