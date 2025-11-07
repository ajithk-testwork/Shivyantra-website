import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, FileText, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  // 🟡 Load user data from localStorage (unchanged logic)
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser({
        name: storedUser.Name || storedUser.name || "Not available",
        email: storedUser.Email || storedUser.email || "Not available",
      });
    } else {
      navigate("/"); // redirect if no user logged in
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fffaf4] via-[#fff5e7] to-[#ffe0b5] flex items-center justify-center py-20 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl bg-white/90 backdrop-blur-md shadow-2xl border border-amber-200 rounded-[2.5rem] overflow-hidden"
      >
        {/* Header Section */}
        <div className="relative bg-amber-600 text-white py-20 px-8 text-center sm:text-left">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-28 h-28 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center shadow-2xl">
                <User className="w-14 h-14 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold">
                  {user.name ? `Namaste, ${user.name}` : "Your Profile"}
                </h1>
                <p className="text-amber-100 text-sm sm:text-base mt-2">
                  Welcome to your divine profile dashboard — manage your sacred journey 🌿
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Curve */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-white rounded-t-[3rem]"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 px-6 sm:px-10 md:px-14 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left - Personal Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className=" rounded-3xl shadow-lg border border-amber-100 p-6 sm:p-8 hover:shadow-xl transition-all"
            >
              <h2 className="text-2xl font-semibold text-amber-900 mb-6 border-b border-amber-200 pb-2">
                Personal Information
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-amber-100 text-amber-700 shadow-sm">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Full Name</p>
                    <p className="text-amber-900 font-semibold text-lg">
                      {user.name || "Not available"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-amber-100 text-amber-700 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email Address</p>
                    <p className="text-amber-900 font-semibold text-lg">
                      {user.email || "Not available"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Order History */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className=" rounded-3xl shadow-lg border border-amber-100 p-6 sm:p-8 hover:shadow-xl transition-all"
            >
              <h2 className="text-2xl font-semibold text-amber-900 mb-6 border-b border-amber-200 pb-2">
                Order History
              </h2>

              <div className="flex flex-col items-center justify-center text-center bg-white/70 border border-amber-100 rounded-2xl py-10 shadow-inner">
                <FileText className="w-10 h-10 text-gray-400 mb-3" />
                <p className="text-gray-500 text-sm">No orders found yet</p>
                <p className="text-amber-700 text-xs italic">
                  Your sacred purchases will appear here soon 🌸
                </p>
              </div>

              <div className="mt-8 text-center">
                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-600 to-orange-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Download All Invoices
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
