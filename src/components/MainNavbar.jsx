// src/components/MainNavbar.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  PhoneCall,
  Search,
  ShoppingBag,
  User,
  LogOut,
  Menu,
  X,
  CheckCircle2,
} from "lucide-react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import AuthModal from "../pages/Auth/AuthModal";
import toast from "react-hot-toast";

const LOGOUT_URL = "https://shivyantra.onrender.com/api/logout";

const MainNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);


  const links = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {

    
    try {
      const raw = localStorage.getItem("user");
      if (raw && raw !== "undefined" && raw !== "null") {
        const parsed = JSON.parse(raw);
        setUser(parsed);
      }
    } catch (err) {
      console.error("Invalid user data in localStorage:", err);
      localStorage.removeItem("user");
      setUser(null);
    }
      // ✅ Load saved count on mount
  const savedCount = parseInt(localStorage.getItem("cartCount") || "0", 10);
  setCartCount(savedCount);

  // ✅ Listen for any count updates
  const handleCountUpdate = () => {
    const updatedCount = parseInt(localStorage.getItem("cartCount") || "0", 10);
    setCartCount(updatedCount);
  };

  window.addEventListener("cartCountUpdated", handleCountUpdate);

  return () => window.removeEventListener("cartCountUpdated", handleCountUpdate);
  }, []);

  const handleLogout = async () => {
    const storedUser = localStorage.getItem("user");
    const parsed = storedUser ? JSON.parse(storedUser) : null;
    const refreshToken = localStorage.getItem("refresh_token") || parsed?.refresh_token;

    if (!refreshToken) {
      toast.error("No active session found. Please login again.");
      navigate("/");
      return;
    }

    try {
      const response = await axios.post(
        LOGOUT_URL,
        { refresh_token: refreshToken },
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      ["refresh_token", "user", "isLoginned"].forEach((key) =>
        localStorage.removeItem(key)
      );

      toast.success("You’ve been logged out successfully!");
      setShowLogoutPopup(true);

      setTimeout(() => {
        setShowLogoutPopup(false);
        setUser(null);
        navigate("/");
        window.location.reload();
      }, 1200);
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.response?.data?.error?.message ||
        "Logout failed. Please try again.";

      console.error("❌ Logout error:", err);
      toast.error(message);
    }
  };

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-[1000] border-b border-amber-100">
      <div className="flex justify-between items-center bg-amber-600 px-6 py-4 relative">
        <Link
          to="/"
          className="text-3xl font-extrabold text-white hover:scale-105 transition-transform duration-300"
        >
          Shivyantra
        </Link>

        <div className="hidden lg:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-white text-md font-semibold px-3 py-2 rounded-md hover:bg-white hover:text-amber-800 transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="lg:hidden bg-amber-600 flex flex-col items-center space-y-3 py-3"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-white text-md font-medium hover:bg-white hover:text-amber-800 px-4 py-2 rounded-md transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex md:flex-row items-center justify-between px-6 py-3 gap-3 md:gap-0">
        <div className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-700">
          <PhoneCall className="w-4 h-4 text-amber-700" />
          <span>+91 9876543210</span>
        </div>

        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-10 py-2 rounded-full border border-gray-300 text-gray-800 
              focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        <div className="flex items-center gap-5 text-gray-700">
          <Link to="/cart" className="relative">
  <ShoppingBag className="w-6 h-6 hover:text-amber-700 transition-colors duration-200" />
  {cartCount > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
      {cartCount}
    </span>
  )}
</Link>



          {user ? (
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div
                className="flex items-center gap-2 border-2 px-3 py-2 rounded-full 
                border-amber-600 text-black font-semibold 
                hover:bg-amber-600 hover:text-white hover:shadow-md 
                transition-all duration-300 cursor-pointer"
              >
                <User className="w-5 h-5" />
                <span className="hidden lg:flex text-sm tracking-wide">
                  {user?.Name || user?.name || "User"}
                </span>
              </div>

              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
                  >
                    <button
                      onClick={() => {
                        navigate("/profile");
                        setShowDropdown(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-amber-100 text-gray-800 transition-all duration-200"
                    >
                      Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-2 text-left text-red-600 hover:bg-red-100 transition-all duration-200"
                    >
                      <LogOut className="w-4 h-4" /> Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div
              className="flex items-center gap-2 font-medium cursor-pointer text-gray-700 hover:text-amber-800 transition-all duration-200"
              onClick={() => setShowAuth(true)}
            >
              <User className="w-5 h-5" />
              <span className="hidden lg:flex">Login / Register</span>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showLogoutPopup && (
          <motion.div
            key="logout-popup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-xl p-6 shadow-lg text-center"
            >
              <CheckCircle2 className="text-green-600 w-12 h-12 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-green-700">
                Logged Out Successfully
              </h4>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {showAuth && (
        <AuthModal
          onClose={() => setShowAuth(false)}
          onSuccess={(name) => {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            setUser(storedUser);
            setShowAuth(false);
            toast.success(`Welcome ${name}!`);
          }}
        />
      )}
    </nav>
  );
};

export default MainNavbar;
