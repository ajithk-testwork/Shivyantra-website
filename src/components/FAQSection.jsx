import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "What makes Shivyantra products spiritually unique?",
    answer:
      "Each Shivyantra creation is infused with sacred symbolism inspired by divine geometry and Vedic craftsmanship. Every piece is handcrafted with devotion, connecting wearer and space to pure spiritual energy.",
  },
  {
    question: "Are Rudraksha and other spiritual items authentic?",
    answer:
      "Yes. Our Rudraksha beads and sacred materials are sourced ethically and verified for authenticity. Each item undergoes purification rituals before being crafted into our collections.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Absolutely. Shivyantra delivers worldwide through trusted logistics partners, ensuring each spiritual creation reaches you safely, no matter where you are.",
  },
  {
    question: "How should I care for my Shivyantra jewelry or decor?",
    answer:
      "Avoid contact with harsh chemicals, perfumes, or water. Store in a soft, clean cloth when not in use, and cleanse with incense or positive intention regularly to preserve spiritual energy.",
  },
  {
    question: "Are your designs handmade?",
    answer:
      "Yes. Every piece in our collection is handcrafted by artisans who follow traditional techniques blended with contemporary aesthetics — embodying both devotion and design excellence.",
  },
  {
    question: "Can I customize a spiritual design for personal use?",
    answer:
      "Of course. Shivyantra offers personalized craftsmanship — from engraved yantras to customized Rudraksha jewelry — ensuring your creation resonates with your energy and purpose.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      {/* Header */}
      <div className="text-center relative mb-16 px-4">
        <div className="flex justify-center mb-3">
          <Sparkles className="text-amber-700 w-8 h-8 animate-pulse" />
        </div>
        <h2 className="text-4xl sm:text-5xl font-serif text-[#5a3e1b] tracking-wide">
          Frequently Asked <span className="text-[#a36f1f]">Questions</span>
        </h2>
        <p className="text-[#876c3f] mt-3 italic text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Discover the essence of Shivyantra and our sacred craftsmanship
        </p>
        <div className="mt-4 w-24 h-[2px] bg-amber-700 mx-auto rounded-full"></div>
      </div>

      {/* FAQ Cards */}
      <div className="max-w-4xl mx-auto px-6 space-y-5">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            className={`border border-amber-200 bg-white/80 backdrop-blur-md rounded-2xl shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-5 text-left group"
            >
              <span className="text-lg font-semibold text-amber-900 group-hover:text-amber-700 transition-colors duration-300">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.4 }}
              >
                {activeIndex === index ? (
                  <ChevronUp className="text-amber-700 w-6 h-6" />
                ) : (
                  <ChevronDown className="text-amber-700 w-6 h-6" />
                )}
              </motion.div>
            </button>

            {/* Answer Animation */}
            <AnimatePresence initial={false}>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="px-6 pb-5 text-amber-800/90 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
