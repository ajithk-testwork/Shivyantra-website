import React, { useState } from "react";
import axios from "axios";
import {
  X,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import image from "../../assets/About.webp";

const LOGIN_URL = "https://shivyantra.onrender.com/api/login";

const Login = ({ onClose, onSuccess, onSwitch }) => {
  const [formData, setFormData] = useState({ Email: "", Password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await axios.post(LOGIN_URL, formData);
      if (res.status === 200) {
        const token = res.data?.token;
        const user = res.data?.user;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("isLoginned", "true");

        setShowSuccessPopup(true);
        setTimeout(() => {
          onSuccess(user?.Name || "User");
          onClose();
        }, 2000);
      } else {
        setMessage({ type: "error", text: res.data?.message || "Login failed" });
      }
    } catch (err) {
      setMessage({
        type: "error",
        text: err.response?.data?.message || "Unable to login. Try again!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      className="bg-white overflow-hidden w-[92%] md:w-[760px] rounded-2xl shadow-2xl flex flex-col md:flex-row relative"
    >
      {/* Left Section */}
      <div className="hidden md:flex w-1/2 relative">
        <img src={image} alt="Login background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/50 to-amber-800/50" />
        <div className="relative z-10 flex flex-col items-center justify-center text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
          <p className="text-sm text-orange-100">Log in and keep pushing your limits with Shivyantra.</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 p-8 relative bg-gradient-to-b from-white via-amber-50 to-orange-100">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-2xl font-semibold text-center mb-6 text-amber-800">
          Login to Your Account
        </h3>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" />
            <input
              name="Email"
              type="email"
              value={formData.Email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full pl-10 py-2 border rounded-lg focus:ring-2 focus:ring-amber-600"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" />
            <input
              name="Password"
              type={showPassword ? "text" : "password"}
              value={formData.Password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-amber-600"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-3 top-3 text-gray-400 hover:text-amber-600"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
            <div className="text-right mt-0.5 text-sm">
            <span
              className="text-amber-700 font-medium cursor-pointer hover:underline"
              onClick={() => alert('Forgot Password feature coming soon!')}
            >
              Forgot Password?
            </span>
          </div>
          </div>

          {message && (
            <p className={`text-sm ${message.type === "error" ? "text-red-500" : "text-green-600"}`}>
              {message.text}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-700 text-white py-2 rounded-lg font-semibold hover:bg-amber-800 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-700 mt-4">
          Don’t have an account?{" "}
          <span
            className="text-amber-700 font-semibold cursor-pointer hover:underline"
            onClick={onSwitch}
          >
            Sign Up
          </span>
        </p>

        {/* Success Popup */}
        <AnimatePresence>
          {showSuccessPopup && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center"
            >
              <CheckCircle2 className="text-green-500 w-16 h-16 mb-3 animate-bounce" />
              <h4 className="text-2xl font-bold text-green-600 mb-2">
                Login Successful!
              </h4>
              <p className="text-gray-700">
                Welcome back,{" "}
                <span className="font-semibold text-amber-700">{formData.Email}</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Login;
