import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import img1 from "../../assets/Blog/blog2.jpg";
import img2 from "../../assets/Blog/blog1.jpg";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "How to Wear Rudraksha: Spiritual and Healing Benefits",
    desc: "Rudraksha, the sacred bead associated with Lord Shiva, has been revered for centuries for its physical, mental, and spiritual healing powers. These divine seeds help calm the mind, improve focus, and connect one with higher consciousness.",
    image: img1,
    link: "#",
  },
  {
    title: "The Power of Meditation with Rudraksha",
    desc: "Wearing a Rudraksha mala while meditating enhances peace and concentration. It helps balance inner energy, promotes mindfulness, and deepens the spiritual connection to Lord Shiva.",
    image: img2,
    link: "#",
  },
];

const Blog = () => {

  useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-orange-50 via-white to-amber-50 text-gray-800 py-20 px-6 md:px-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="flex justify-center mb-4">
          <div className="w-20 h-[2px] bg-gradient-to-r from-gray-400 to-amber-600" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          <span className="text-[#3a3a3a]">Spiritual </span>
          <span className="text-[#b45309]">Wisdom & Insights</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore the divine world of Rudraksha and awaken your inner self with
          Shivyantra’s timeless guidance.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ y: -8 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden border border-amber-100 hover:shadow-xl transition-all duration-500"
          >
            <div className="overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={blog.image}
                alt={blog.title}
                className="w-full h-72 object-cover"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {blog.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                {blog.desc}
              </p>
              <motion.div whileHover={{ x: 6 }}>
                <Link
                  to="/blogcontent"
                  className="inline-flex items-center gap-2 text-amber-700 font-medium hover:text-amber-500 transition"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="absolute top-32 -left-10 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-0 w-80 h-80 bg-red-200/20 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />
    </section>
  );
};

export default Blog;
