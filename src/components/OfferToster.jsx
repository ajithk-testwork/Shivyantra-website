import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const offers = [
  "🔥 50% OFF on All School Supplies!",
  "🎒 Buy 1 Get 1 Free on Trendy Backpacks!",
  "🎁 Free Shipping on Orders Above ₹999!",
  "⚡ Flash Sale: Extra 10% OFF — Today Only!",
];

const OfferTicker = () => {
  const [index, setIndex] = useState(0);

  // Cycle offers
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % offers.length);
    }, 4000); // Change offer every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gray-50 border-b border-gray-200">
      <div className="relative h-8 md:h-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={offers[index]}
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 5, ease: "linear" }}
            className="absolute whitespace-nowrap text-orange-500 font-medium text-sm md:text-base select-none"
            style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.2px" }}
          >
            {offers[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OfferTicker;
