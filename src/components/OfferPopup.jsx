import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift } from "lucide-react";

const OfferPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Offer Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-500 to-orange-400 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-2xl flex items-center gap-2 font-semibold tracking-wide transition-all duration-300 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <Gift className="w-5 h-5" />
        15% OFF
      </motion.button>

      {/* Offer Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Popup Box */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <div className="relative bg-white/95 rounded-3xl shadow-2xl border border-amber-300 max-w-md w-full p-8 text-center overflow-hidden">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 text-amber-700 hover:text-amber-900 transition"
                >
                  <X className="w-6 h-6" />
                </button>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 120 }}
                >
                  <Gift className="w-14 h-14 text-amber-600 mx-auto mb-4" />
                </motion.div>

                <h2 className="text-2xl font-serif text-[#5a3e1b] mb-2">
                  🎉 Special 15% Discount!
                </h2>
                <p className="text-[#876c3f] mb-4 leading-relaxed">
                  Use code <span className="font-semibold text-amber-700">SHIV15</span> at checkout to enjoy your spiritual savings.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-amber-600 to-orange-500 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all"
                >
                  Shop Now
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default OfferPopup;
