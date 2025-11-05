import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { EyeIcon, Target } from "lucide-react";

const StrategicVision = () => {

     useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-amber-50 min-h-screen py-16 px-6 md:px-20 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <div className="flex justify-center mb-4">
          <EyeIcon className="w-12 h-12 text-amber-700" />
        </div>
        <h1 className="text-4xl font-bold text-amber-800 mb-2">
          Strategic Vision / Mission
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At <span className="font-semibold text-amber-700">Shriworks</span>,
          we aspire to preserve the sacred beauty of temple artistry through
          craftsmanship, innovation, and devotion.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg p-8 space-y-8 max-w-5xl mx-auto"
      >
        <section>
          <h2 className="text-2xl font-semibold text-amber-700 mb-3">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To be the premier provider of exquisite temple ornaments, statues,
            and other temple-oriented works, renowned for our craftsmanship and
            dedication to preserving and enhancing the sacred beauty of
            spiritual and religious art. We aim to blend traditional techniques
            with innovative design, creating products that not only enrich
            spiritual practices but also stand as timeless symbols of devotion
            and cultural heritage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-amber-700 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our vision is to set the benchmark for quality, creativity, and
            sustainability in the crafting of sacred art, delivering exceptional
            value to our clients and contributing to the sanctity and
            magnificence of temples worldwide.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-amber-800 mb-6">
            Our Services
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2">
                Traditional Temple Ornaments
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  <strong>Design and Fabrication:</strong> Creation of bespoke
                  ornaments tailored to specific temple requirements and
                  spiritual traditions.
                </li>
                <li>
                  <strong>Material Selection:</strong> Offering gold, gold
                  plated, silver, and precious stone options to match the
                  temple’s aesthetic and religious significance.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2">
                Statue Crafting
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  <strong>Custom Statues:</strong> Designing and crafting
                  statues of deities, saints, and sacred figures to meet
                  religious and artistic needs.
                </li>
                <li>
                  <strong>Restoration and Preservation:</strong> Repairing and
                  restoring antique or damaged statues while preserving their
                  historical and cultural value.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2">
                Temple Interior and Exterior
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  <strong>Design Consultation:</strong> Expert guidance for
                  temple interiors — altar setups, brass and silver works,
                  kodimarams, kalasams, and more.
                </li>
                <li>
                  <strong>Installation Services:</strong> Professional
                  installation of ornaments, statues, and other traditional
                  elements for a harmonious sacred environment.
                </li>
                <li>
                  <strong>Gopurams and Mandapas:</strong> Designing sheet works
                  for Gopurams, Mandapams, and pillars to enhance temple
                  architecture.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2">
                Specialized Offerings
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  <strong>Ceremonial Items:</strong> Crafting items for temple
                  rituals such as bell sets, lamps, and ceremonial vessels.
                </li>
                <li>
                  <strong>Festive Decorations:</strong> Creating decorations for
                  festivals and special religious events.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2">
                Maintenance and Upkeep
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  <strong>Cleaning and Polishing:</strong> Regular maintenance to
                  clean and polish ornaments and statues.
                </li>
                <li>
                  <strong>Inspection Services:</strong> Periodic checks to
                  identify wear or damage and preserve artifacts.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-amber-700 mb-2">
                Project Management
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>
                  <strong>Turnkey Solutions:</strong> Managing entire projects
                  from concept to installation, ensuring seamless and high-quality results.
                </li>
                <li>
                  <strong>Client Coordination:</strong> Working closely with
                  temple authorities to meet project goals and deadlines.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default StrategicVision;
