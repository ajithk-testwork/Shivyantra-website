import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, FileText, ShoppingBag } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-100 py-16 px-6 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-amber-200 p-10"
      >
        <div className="text-center mb-10">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-amber-500 to-orange-400 flex items-center justify-center shadow-lg">
            <User className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mt-4">Your Profile</h1>
          <p className="text-gray-500 mt-1">Manage your account and orders</p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
            <User className="w-6 h-6 text-amber-600" />
            <div>
              <p className="text-gray-500 text-sm">Full Name</p>
              <p className="text-gray-800 font-semibold text-lg">
                {user.name || "Not available"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
            <Mail className="w-6 h-6 text-amber-700" />
            <div>
              <p className="text-gray-500 text-sm">Email Address</p>
              <p className="text-gray-800 font-semibold text-lg">
                {user.email || "Not available"}
              </p>
            </div>
          </div>
        </div>

        <div className="my-8 border-t border-amber-200" />

        <div>
          <h2 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" /> Order History
          </h2>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center text-gray-500">
            <FileText className="w-8 h-8 mx-auto mb-2 text-gray-400" />
            <p>No Invoices Found</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-600 to-orange-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Download All Invoices
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
