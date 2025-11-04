import React from "react";
import { motion } from "framer-motion";
import bgImage from "../assets/About.webp"; // Use Rudraksha or devotee image

const RudrakshaConsultation = () => {
  return (
    <section
      className="relative flex items-center justify-center py-32 text-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for depth and sacred glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-amber-950/40 to-black/60"></div>
      <div className="absolute inset-0 backdrop-blur-[1px]"></div>

      {/* Decorative Borders */}
      <div className="absolute top-10 left-10 w-16 h-16 border-t-2 border-l-2 border-amber-400 rounded-tl-3xl"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border-b-2 border-r-2 border-amber-400 rounded-br-3xl"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 px-6 max-w-3xl mx-auto"
      >
        <h2
          className="text-4xl sm:text-5xl font-[Cormorant_Garamond] font-bold mb-6 
          bg-gradient-to-r text-white bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(255,191,73,0.4)]"
        >
          Personalized Rudraksha Consultation
        </h2>

        <p
          className="text-lg sm:text-xl text-white leading-relaxed mb-10 font-[Playfair_Display] italic"
        >
          “Discover the sacred power of Rudraksha — receive divine guidance to find the
          bead that aligns with your soul, purpose, and destiny.”
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          className="px-8 py-3 bg-gradient-to-r from-amber-700 to-amber-500 
          text-white rounded-full font-semibold tracking-wide shadow-lg 
          hover:shadow-amber-500/40 transition-all duration-300"
        >
          Book Your Free Consultation
        </motion.button>
      </motion.div>
    </section>
  );
}; 

export default RudrakshaConsultation;
