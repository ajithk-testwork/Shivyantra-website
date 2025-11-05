import React from "react";
import { motion } from "framer-motion";
import banner from "../assets/banner.jpg";

const BannerImg = () => {
  return (
    <section
      className="relative flex items-center justify-center text-center text-white 
                 h-[80vh] md:h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#1a0f05]/70"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.25)_0%,transparent_70%)]"></div>

      <div className="relative z-10 px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-6xl font-serif font-light mb-6 tracking-wide"
        >
          <span className="block text-[#f8e49b] drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]">
            Hinduism is not a religion,
          </span>
          <span className="block text-white">but a <span className="text-[#d4af37] font-semibold">way of life</span>.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto"
        >
          The essence of Hinduism is the same essence of all true religions:{" "}
          <span className="text-[#f8e49b] font-medium">Bhakti</span> — pure love
          for God and genuine compassion for all beings.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
          className="mt-10"
        >
          <button className="px-8 py-3 rounded-full text-lg font-medium border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.4)]">
            Explore Spirituality ✨
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BannerImg;
