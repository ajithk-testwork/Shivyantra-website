// src/components/TestimonialSplit.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import image1 from "../assets/ReviewPeople/img1.jpg";
import image2 from "../assets/ReviewPeople/img2.jpg";
import image3 from "../assets/ReviewPeople/img3.jpg";
import bgPattern from "../assets/ReviewPeople/bgImg.jpg"; 

const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "Spiritual Seeker, Delhi",
    message:
      "The Rudraksha I received from Shivyantra brought divine calm and clarity. A sacred experience that truly changed my aura.",
    image: image1,
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "Yoga Instructor, Kerala",
    message:
      "The consultation guided me to the perfect Rudraksha for my spiritual path. I feel more balanced, focused, and peaceful.",
    image: image2,
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Business Owner, Mumbai",
    message:
      "Authentic products and divine service! I can truly feel the sacred energy radiating through the Rudraksha I received.",
    image: image3,
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };
  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, []);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir < 0 ? 100 : -100, opacity: 0 }),
  };

  return (
    <section className="relative py-24  overflow-hidden bg-spiritual">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-serif text-[#5a3e1b]">Voices of Faith</h2>
        <p className="text-[#8a6f40] italic mt-2">
          Real stories from spiritual souls
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative px-6">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={testimonials[index].id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-3xl shadow-[0_10px_30px_rgba(183,138,40,0.15)] overflow-hidden border border-[#e8dbb0]"
          >
            <div
              className="hidden md:block h-full bg-cover bg-center md:rounded-l-3xl"
              style={{
                backgroundImage: `url(${bgPattern})`,
                backgroundBlendMode: "multiply",
              }}
            >
              <div className="w-full h-full bg-gradient-to-tr from-[#b78a28]/0 to-transparent"></div>
            </div>

            <div className="p-10 text-center md:text-left">
              <Quote className="w-10 h-10 text-[#b78a28] mx-auto md:mx-0 mb-6 opacity-80" />
              <p className="text-[#5b4724] italic text-lg leading-relaxed mb-8">
                “{testimonials[index].message}”
              </p>

              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-16 h-16 rounded-full border-4 border-[#b78a28] object-cover shadow-md mx-auto md:mx-0"
                />
                <div className="text-center md:text-left">
                  <h4 className="text-[#4c3616] font-semibold text-lg">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-[#8a6f40] text-sm">
                    {testimonials[index].role}
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-start gap-4 mt-8">
                <button
                  onClick={prev}
                  className="px-4 py-2 rounded-full bg-[#b78a28]/20 hover:bg-[#b78a28]/40 text-[#4c3b1f] transition"
                >
                  ❮
                </button>
                <button
                  onClick={next}
                  className="px-4 py-2 rounded-full bg-[#b78a28]/20 hover:bg-[#b78a28]/40 text-[#4c3b1f] transition"
                >
                  ❯
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Testimonial;
