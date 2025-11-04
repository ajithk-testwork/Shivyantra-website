import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "Spiritual Seeker, Delhi",
    message:
      "The Rudraksha I received from Shivyantra brought divine calm and clarity. A sacred experience that truly changed my aura.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "Yoga Instructor, Kerala",
    message:
      "The consultation guided me to the perfect Rudraksha for my spiritual path. I feel more balanced, focused, and peaceful.",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Business Owner, Mumbai",
    message:
      "Authentic products and divine service! I can truly feel the sacred energy radiating through the Rudraksha I received.",
    image:
      "https://images.unsplash.com/photo-1614289371518-919c7d213b64?auto=format&fit=crop&w=150&q=80",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const variants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
      scale: 0.95,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      zIndex: 1,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction < 0 ? 100 : -100,
      scale: 0.95,
      zIndex: 0,
    }),
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#fbf8f3] via-[#f6f0e4] to-[#f0e5cf] overflow-hidden">
      {/* Sacred Golden Aura */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(197,155,64,0.25),transparent_70%)]"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(249,225,157,0.25),transparent_70%)]"></div>

      {/* Header */}
      <div className="text-center mb-16 relative">
        <div className="flex justify-center mb-3">
          <Sparkles className="text-[#b78a28] w-8 h-8" />
        </div>
        <h2 className="text-4xl sm:text-5xl font-serif text-[#5a3e1b]">
          Voices of Devotion
        </h2>
        <p className="text-[#85673c] mt-2 italic">
          Blessed experiences from our divine community
        </p>
        <div className="w-24 h-[2px] bg-[#b78a28] mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Testimonial Card */}
      <div className="relative max-w-3xl mx-auto text-center">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={testimonials[index].id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative bg-[#fffdf7]/80 backdrop-blur-md border border-[#e3d4b0] rounded-3xl shadow-[0_8px_25px_rgba(182,143,46,0.15)] px-10 py-12"
          >
            <Quote className="w-10 h-10 text-[#b78a28] mx-auto mb-6 opacity-80" />
            <motion.img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-20 h-20 rounded-full object-cover border-4 border-[#b78a28] mx-auto mb-6 shadow-lg"
              whileHover={{ scale: 1.05 }}
            />
            <p className="text-[#5b4724] italic text-lg leading-relaxed mb-6">
              “{testimonials[index].message}”
            </p>
            <h4 className="text-[#4c3616] font-semibold text-lg">
              {testimonials[index].name}
            </h4>
            <p className="text-[#8a6f40] text-sm">
              {testimonials[index].role}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="flex justify-between absolute inset-x-0 top-1/2 -translate-y-1/2 px-3 sm:px-6">
          <button
            onClick={prevSlide}
            className="bg-[#b78a28]/20 hover:bg-[#b78a28]/40 text-[#4c3b1f] p-2 rounded-full shadow-md transition"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#b78a28]/20 hover:bg-[#b78a28]/40 text-[#4c3b1f] p-2 rounded-full shadow-md transition"
          >
            ❯
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-[#b78a28] scale-125"
                  : "bg-[#d9c69c] hover:bg-[#b78a28]/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
