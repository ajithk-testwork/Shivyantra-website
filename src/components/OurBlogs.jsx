import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";

import image1 from "../assets/OurBlog/img1.png";
import image2 from "../assets/OurBlog/img2.jpg";
import image3 from "../assets/OurBlog/img3.jpg";
import image4 from "../assets/OurBlog/img4.png";
import image5 from "../assets/OurBlog/img5.jpg";

const blogs = [
  {
    id: 1,
    title: "How to Wear Rudraksha: Spiritual and Healing Benefits",
    desc: "Rudraksha holds timeless power — a sacred bead of Lord Shiva that nurtures your physical, mental, and spiritual wellbeing.",
    image: image1,
    date: "Oct 10, 2025",
  },
  {
    id: 2,
    title: "Discover the Divine Power of Rudraksha",
    desc: "These sacred beads protect you from negativity and support spiritual awakening — a divine blessing from Shiva.",
    image: image2,
    date: "Oct 15, 2025",
  },
  {
    id: 3,
    title: "The Science Behind Rudraksha: Vibrations & Energy",
    desc: "Experience natural energy balance — Rudraksha synchronizes your mind & body frequency.",
    image: image3,
    date: "Oct 22, 2025",
  },
  {
    id: 4,
    title: "Tradition Meets Modernity in Rudraksha Jewelry",
    desc: "Shivyantra blends heritage craftsmanship with modern luxury — spiritual fashion redefined.",
    image: image4,
    date: "Nov 1, 2025",
  },
  {
    id: 5,
    title: "Spiritual Elegance: The Essence of Shivyantra",
    desc: "Where sacred art meets divine energy — handcrafted to elevate your aura & lifestyle.",
    image: image5,
    date: "Nov 3, 2025",
  },
];

const OurBlogs = () => {
  const controls = useAnimation();
  const loopBlogs = [...blogs, ...blogs]; // duplicate for infinite scroll

  // Continuous auto slide (left direction)
  useEffect(() => {
    const animateLoop = async () => {
      while (true) {
        await controls.start({
          x: ["-50%", "0%"],
          transition: { duration: 45, ease: "linear" },
        });
        await controls.start({ x: "0%" });
      }
    };
    animateLoop();
  }, [controls]);

  return (
    <section className="relative py-20  overflow-hidden">
      

      <div className="text-center mb-12 px-4 relative">
        <h2 className="text-4xl sm:text-5xl font-serif text-[#5a3e1b] tracking-wide">
          Shivyantra <span className="text-[#a36f1f]">Sacred Insights</span>
        </h2>
        <p className="text-[#876c3f] mt-3 italic text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Explore Divine Stories, Energy & Craftsmanship
        </p>
        <div className="w-24 h-[2px] bg-amber-700 mx-auto mt-3 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto overflow-hidden relative">
        <motion.div
          animate={controls}
          className="flex gap-6 sm:gap-8 py-2 px-4"
        >
          {loopBlogs.map((blog, index) => (
            <motion.div
              key={index}
              className="relative min-w-[250px] sm:min-w-[280px] bg-white/80 border border-amber-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group backdrop-blur-md"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-2 left-2 bg-amber-700 text-white text-[10px] px-2 py-[2px] rounded-full shadow-md">
                  {blog.date}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-70 group-hover:opacity-50 transition-all duration-500"></div>
              </div>

              <div className="p-4 relative z-10">
                <h3 className="text-[15px] font-serif font-semibold text-amber-900 mb-1 group-hover:text-amber-700 transition line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-amber-800/80 text-[13px] leading-snug mb-3 line-clamp-3">
                  {blog.desc}
                </p>
               
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-amber-300/20 via-orange-200/20 to-yellow-100/20 blur-xl transition-all duration-700 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      
    </section>
  );
};

export default OurBlogs;
 