import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Gem, HandHeart, ScrollText } from "lucide-react";
import image from "../assets/About.webp";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className=" min-h-screen bg-gradient-to-b from-orange-50 via-white to-amber-50 text-gray-800 py-16 px-6 md:px-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-[2px] bg-gradient-to-r from-gray-400 to-amber-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-[#3a3a3a]"> About </span>
            <span className="text-[#b45309]">Shivyantra</span>
          </h2>
          <p className="text-gray-600 mt-3">
            Upholding divine heritage, authenticity, and craftsmanship through
            sacred Rudraksha and traditional artistry.
          </p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <img
            src={image}
            alt="Rudraksha and Temple Craft"
            className="rounded-2xl shadow-xl border border-amber-200 object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-800">
            A Legacy of Authenticity & Divine Craft
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Established 18 years ago, our organization set out to educate,
            promote, and supply the finest quality of Nepal Rudraksha. Over the
            years, it achieved a grand global presence — becoming a trusted
            authority recognized worldwide.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Each Rudraksha is genuine, ISO 9001:2015 certified, and undergoes
            rigorous quality checks. Our commitment to total quality management
            ensures zero-defect precision and spiritual sanctity.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Beyond supply, we lead scientific research on Rudraksha, blending
            spiritual wisdom with modern understanding — guiding countless
            individuals, from professionals to spiritual leaders.
          </p>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="h-[2px] bg-gradient-to-r from-yellow-700 via-red-500 to-yellow-500 my-16 rounded-full"></div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-700 to-red-600">
          Our Mission
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 mt-4">
          To make people aware of the genuine Rudraksha bead and uphold its
          purity. To empower artisans, promote research, and educate seekers
          through divine knowledge and scientific insights.
        </p>
      </motion.div>

      {/* Mission Cards */}
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-md p-6 text-center border border-amber-200"
        >
          <Gem className="w-10 h-10 mx-auto text-yellow-700 mb-3" />
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            Genuine Rudraksha
          </h3>
          <p className="text-gray-600 text-sm">
            Ensuring authenticity and spiritual sanctity in every bead we offer.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-md p-6 text-center border border-amber-200"
        >
          <Award className="w-10 h-10 mx-auto text-red-700 mb-3" />
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            Certified Quality
          </h3>
          <p className="text-gray-600 text-sm">
            ISO 9001:2015 accredited testing and zero-defect quality management.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-md p-6 text-center border border-amber-200"
        >
          <ScrollText className="w-10 h-10 mx-auto text-yellow-700 mb-3" />
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            Ancient Knowledge
          </h3>
          <p className="text-gray-600 text-sm">
            Preserving sacred scriptures that reveal Rudraksha’s divine
            properties.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-2xl shadow-md p-6 text-center border border-amber-200"
        >
          <HandHeart className="w-10 h-10 mx-auto text-red-700 mb-3" />
          <h3 className="font-semibold text-lg text-gray-800 mb-2">
            Empowering Artisans
          </h3>
          <p className="text-gray-600 text-sm">
            Supporting skilled craftsmen to showcase their traditional artistry.
          </p>
        </motion.div>
      </div>

      {/* Shivyantra Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto"
      >



      </motion.div>
    </section>
  );
};

export default About;
