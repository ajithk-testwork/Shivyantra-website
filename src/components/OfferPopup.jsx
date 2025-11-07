import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Gift } from "lucide-react";

const OfferPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Floating Offer Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-10 right-10 bg-gradient-to-r from-[#b45309] via-[#ea580c] to-[#facc15] text-white font-semibold px-7 py-3 rounded-full shadow-[0_0_25px_rgba(234,88,12,0.5)] flex items-center gap-2 transition-all duration-300 hover:shadow-[0_0_40px_rgba(234,88,12,0.8)] hover:scale-105 z-[1200]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Gift className="w-5 h-5 text-amber-200" />
        </motion.div>
        <span>Festival Offer</span>
      </motion.button>

      {/* Popup + Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[1999]"
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Popup Content */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-[2000] px-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative bg-gradient-to-br from-[#fff8e1] via-[#ffe8b3] to-[#ffcc80] rounded-3xl shadow-[0_0_40px_rgba(251,191,36,0.6)] max-w-md w-full p-8 text-center overflow-hidden border border-amber-300"
              >
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-amber-800 hover:text-amber-900 transition z-[2100]"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Aura Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-300/20 via-white/20 to-transparent rounded-3xl blur-2xl pointer-events-none"></div>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 8 }}
                  className="relative mb-5"
                >
                  <div className="mx-auto w-16 h-16 rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center shadow-inner shadow-amber-200">
                    <Gift className="w-8 h-8 text-amber-700" />
                  </div>
                </motion.div>

                {/* Title */}
                <h2 className="text-3xl font-serif text-[#4b3316] mb-3">
                  ✨ Festival Blessing Offer ✨
                </h2>

                {/* Description */}
                <p className="text-[#6b4b1e] text-lg mb-6 leading-relaxed">
                  Get <span className="font-semibold text-amber-800">15% OFF</span> your purchase.
                  Use code <span className="font-bold text-orange-700">SHIV15</span> at checkout.
                </p>

                {/* Divider Animation */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                  className="h-[2px] bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400 mb-6 rounded-full"
                />

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleClose}
                  className="relative bg-gradient-to-r from-amber-700 to-orange-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(251,191,36,0.7)] transition-all"
                >
                  Redeem Offer
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default OfferPopup;
