import React from "react";
import { CheckCircle2, Sparkles, HandHeart, Truck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    icon: <CheckCircle2 className="w-8 h-8 text-[#a36f1f]" />,
    title: "100% Genuine Products",
    desc: "Every product is carefully tested and certified by our experts and verified by government-authorized laboratories.",
  },
  {
    id: 2,
    icon: <Sparkles className="w-8 h-8 text-[#a36f1f]" />,
    title: "Energized Rudraksha",
    desc: "Each Rudraksha is spiritually blessed through sacred Rudraabhishek Pooja at the divine Daksheshwar Mahadev Temple, Haridwar.",
  },
  {
    id: 3,
    icon: <HandHeart className="w-8 h-8 text-[#a36f1f]" />,
    title: "Devotee-Centric Care",
    desc: "Your satisfaction is our devotion — return within 7 days if you're not fully content with your spiritual purchase.",
  },
  {
    id: 4,
    icon: <Truck className="w-8 h-8 text-[#a36f1f]" />,
    title: "Fast & Secure Delivery",
    desc: "With our divine logistics network, your sacred products reach you safely within 4–5 working days.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#fbf8f3] via-[#f7efe2] to-[#f0e4cf] overflow-hidden">
      {/* Soft Radial Aura Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(202,162,71,0.25),transparent_75%)]"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(249,222,157,0.25),transparent_75%)]"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-serif text-[#5a3e1b] tracking-wide">
            Why Choose <span className="text-[#a36f1f]">Shivyantra</span>
          </h2>
          <p className="text-[#876c3f] mt-3 italic text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore Divine Craftsmanship, Authentic Energy & the Spiritual Essence of Every Product
          </p>
          <div className="w-24 h-[2px] bg-[#a36f1f] mx-auto mt-5 rounded-full"></div>
        </motion.div>

        {/* Divine Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-[#fffdf8]/80 backdrop-blur-md border border-[#e2d1a8] shadow-lg rounded-3xl p-8 text-center hover:shadow-amber-200/50 hover:-translate-y-2 transition-all duration-500 group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-5">
                <div className="relative p-4 rounded-full bg-gradient-to-tr from-[#fff8e1] via-[#f8f3e7] to-[#f1e4c5]
                  border border-[#d6b772] shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),0_4px_10px_rgba(182,143,46,0.3)]
                  group-hover:scale-110 transition-transform duration-300">
                  {/* Glowing Aura */}
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,215,128,0.5),transparent_70%)]
                    opacity-70 blur-md pointer-events-none" />

                  {/* Icon */}
                  <div className="relative text-[#b78a28] drop-shadow-[0_0_6px_rgba(255,215,128,0.6)]">
                    {item.icon}
                  </div>
                </div>
              </div>


              {/* Title */}
              <h3 className="text-lg font-semibold text-[#4b3a1c] mb-3 group-hover:text-[#a36f1f] transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[#5a4a2b] text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Hover Glow Accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#f5e1a8]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
