import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Register from "./Register";
import Login from "./Login";

const AuthModal = ({ onClose, onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
      >
        {isLogin ? (
          <Login
            onClose={onClose}
            onSuccess={onSuccess}
            onSwitch={() => setIsLogin(false)}
          />
        ) : (
          <Register
            onClose={onClose}
            onSuccess={onSuccess}
            onSwitch={() => setIsLogin(true)}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default AuthModal;
