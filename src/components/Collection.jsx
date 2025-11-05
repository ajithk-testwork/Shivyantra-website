import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Diamond, Flower2 } from "lucide-react";

const collections = [
  {
    id: 1,
    title: "Divine Copper Lamp",
    desc: "Illuminating spaces with sacred warmth and spiritual resonance.",
    images: [
      "https://images.unsplash.com/photo-1602526218890-5ec12b6b1c55?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602526432607-bdddbd4d6fbd?auto=format&fit=crop&w=1200&q=80",
    ],
    icon: <Flower2 className="w-6 h-6 text-amber-600" />,
  },
  {
    id: 2,
    title: "Meditation Essentials",
    desc: "Sacred tools crafted for serenity, purity, and divine mindfulness.",
    images: [
      "https://images.unsplash.com/photo-1550686041-366ad85a1355?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616628188553-1f7b1e0b6a58?auto=format&fit=crop&w=1200&q=80",
    ],
    icon: <Diamond className="w-6 h-6 text-amber-600" />,
  },
  {
    id: 3,
    title: "Temple Bells",
    desc: "Handmade brass bells that resonate pure spiritual harmony.",
    images: [
      "https://images.unsplash.com/photo-1600607687920-bc4a89f64b4a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602526556748-f3eada7a8de8?auto=format&fit=crop&w=1200&q=80",
    ],
    icon: <Sparkles className="w-6 h-6 text-amber-600" />,
  },
  {
    id: 4,
    title: "Rudraksha Adornments",
    desc: "Sacred beads blending devotion with elegant craftsmanship.",
    images: [
      "https://images.unsplash.com/photo-1606577923266-92e780b8f3ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1606577899277-73246c5bcd20?auto=format&fit=crop&w=1200&q=80",
    ],
    icon: <Flower2 className="w-6 h-6 text-amber-600" />,
  },
  {
    id: 5,
    title: "Spiritual Decor",
    desc: "Art that channels divine energy into your living spaces.",
    images: [
      "https://images.unsplash.com/photo-1616628522339-fd6a6f223b22?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478133-eaa9b1a14b09?auto=format&fit=crop&w=1200&q=80",
    ],
    icon: <Sparkles className="w-6 h-6 text-amber-600" />,
  },
  {
    id: 6,
    title: "Spiritual Decor",
    desc: "Art that channels divine energy into your living spaces.",
    images: [
      "https://images.unsplash.com/photo-1616628522339-fd6a6f223b22?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478133-eaa9b1a14b09?auto=format&fit=crop&w=1200&q=80",
    ],
    icon: <Sparkles className="w-6 h-6 text-amber-600" />,
  },
];

const Collection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,128,0.15)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="text-center relative mb-20 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-serif text-[#5a3e1b] tracking-wide"
        >
          The Divine <span className="text-[#a36f1f]">Collection</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#876c3f] mt-3 italic text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Shivyantra Signature Gallery — where luxury meets divinity
        </motion.p>
        <div className="mt-4 w-28 h-[2px] bg-amber-700 mx-auto"></div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {collections.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            className="relative group overflow-hidden rounded-3xl shadow-lg border border-amber-200 hover:border-amber-600 transition-all duration-500"
          >
            <div className="relative w-full h-80 overflow-hidden">
              <motion.img
                src={item.images[0]}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0"
              />
              <motion.img
                src={item.images[1]}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-70 group-hover:opacity-60 transition-all duration-500"></div>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-amber-300">
                <div className="flex justify-center mb-2">{item.icon}</div>
                <h3 className="text-lg font-serif text-amber-900">{item.title}</h3>
                <p className="text-sm text-amber-700/80 mt-1 max-w-[250px]">
                  {item.desc}
                </p>
              </div>
            </div>

            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl bg-gradient-to-r from-amber-400/40 via-orange-200/40 to-yellow-100/40 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
