import React from "react";
import { motion } from "framer-motion";
import { Gem, Sparkles, ShieldCheck } from "lucide-react";
import rudrakshaImg from "../assets/about1.jpg"; // your image path

const AboutRudrakshaModern = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-32 sm:py-40 text-white"
      style={{
        backgroundImage: `url(${rudrakshaImg})`,
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif mb-4 leading-snug"
        >
          Buy Original{" "}
          <span className="text-amber-400">Rudraksha Online</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-amber-100 italic text-lg sm:text-xl max-w-3xl mx-auto"
        >
          100% Natural & Government Certified Rudraksha | Shiv Kripa Rudraksha Kendra
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-28 h-[2px] bg-amber-400 mx-auto mt-6 rounded-full origin-left"
        ></motion.div>

        {/* Card-style content overlay */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 bg-white/10 backdrop-blur-md border border-amber-400/30 shadow-2xl rounded-3xl p-8 sm:p-12 text-amber-50 leading-relaxed"
        >
          <p className="mb-6">
            <strong className="text-amber-300 font-semibold">Shivyantra</strong> has been continuously supporting
            and promoting the powerful spiritual benefits of Original Rudraksha. As{" "}
            <span className="text-amber-300 font-medium">
              Government Certified Rudraksha providers in Uttarakhand
            </span>
            , we ensure that every devotee can easily{" "}
            <span className="text-amber-300 font-medium">Buy Rudraksha Online</span> that are
            100% natural and genuine, meant for true spiritual healing and transformation.
          </p>

          <p className="mb-6">
            Our mission is to deliver the <strong>highest quality Rudraksha beads</strong> at
            affordable prices for those seeking purity and divine balance. Each Rudraksha is
            carefully inspected, energized, and certified to ensure authenticity.
          </p>

          <p className="mb-6">
            We believe in the divine power of Original Rudraksha — helping devotees overcome
            challenges and attain peace. Wearing{" "}
            <span className="text-amber-300 font-medium">Shivyantra</span> can
            purify the soul, attract positivity, and align your spiritual energy with Lord
            Shiva’s blessings.
          </p>

          <p>
            Visit our website to explore the <strong>Rudraksha Collection</strong> and{" "}
            <span className="text-amber-300 font-medium">Buy Rudraksha Online</span> that’s
            not just certified but spiritually awakened — a true symbol of divine connection.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-10 text-amber-300 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span>Government Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Gem className="w-5 h-5" />
              <span>100% Natural Beads</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>Energized by Rituals</span>
            </div>
          </div>
        </motion.div>

        {/* Authenticity badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 inline-block bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-2 rounded-full font-semibold shadow-lg"
        >
          Shivyantra Authenticity Promise
        </motion.div>
      </div>
    </section>
  );
};

export default AboutRudrakshaModern;
