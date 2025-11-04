import React from "react";
import { motion } from "framer-motion";
import { Gem, Sparkles, ShieldCheck } from "lucide-react";

const AboutRudraksha = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-amber-50 via-[#FFFDF8] to-amber-100 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,200,130,0.2)_0%,transparent_70%)] pointer-events-none"></div>

      {/* Container */}
      <div className="max-w-5xl mx-auto px-6 text-center relative">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-serif text-[#5a3e1b] tracking-wide"
        >
          Buy Original <span className="text-[#a36f1f]">Rudraksha Online</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#876c3f] mt-3 italic text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          100% Natural & Government Certified Rudraksha | Shiv Kripa Rudraksha Kendra
        </motion.p>

        <div className="mt-4 w-28 h-[2px] bg-amber-700 mx-auto rounded-full"></div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-amber-200 p-10 sm:p-14 text-gray-700 leading-relaxed text-base sm:text-lg relative"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-700 text-white px-6 py-2 rounded-full shadow-md font-semibold text-sm tracking-wide">
            Shivyantra Authenticity Promise
          </div>

          <p className="mb-6">
            <strong className="text-amber-800 font-semibold">Shivyantra</strong> has been continuously supporting
            and promoting the powerful spiritual benefits of Original Rudraksha. As
            <span className="text-amber-700 font-medium"> Government Certified Rudraksha providers in Uttarakhand</span>,
            we ensure that every devotee can easily
            <span className="text-amber-700 font-medium"> Buy Rudraksha Online</span> that are
            100% natural and genuine, meant for true spiritual healing and transformation.
          </p>

          <p className="mb-6">
            Our mission is to deliver the <strong>highest quality Rudraksha beads</strong> at
            affordable prices for those seeking purity and divine balance. Each Rudraksha is
            carefully inspected, energized, and certified to ensure authenticity.
          </p>

          <p className="mb-6">
            We believe in the divine power of Original Rudraksha — helping devotees overcome
            challenges and attain peace. Wearing
            <span className="text-amber-700 font-medium"> Shivyantra</span> can
            purify the soul, attract positivity, and align your spiritual energy with Lord
            Shiva’s blessings.
          </p>

          <p>
            Visit our website to explore the <strong>Rudraksha Collection</strong> and
            <span className="text-amber-700 font-medium"> Buy Rudraksha Online</span> that’s
            not just certified but spiritually awakened — a true symbol of divine connection.
          </p>

          {/* Icon Accents */}
          <div className="flex justify-center gap-10 mt-10 text-amber-700">
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <ShieldCheck className="w-5 h-5" />
              <span>Government Certified</span>
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <Gem className="w-5 h-5" />
              <span>100% Natural Beads</span>
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base">
              <Sparkles className="w-5 h-5" />
              <span>Energized by Rituals</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutRudraksha;
