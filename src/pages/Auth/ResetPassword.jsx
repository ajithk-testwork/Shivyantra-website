import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, Mail, Hash, CheckCircle2 } from "lucide-react";

const RESET_URL = "https://shivyantra.onrender.com/api/reset-password";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const Email =  params.get("email");
  const code = params.get("code");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (!Email || !password || !confirmPassword || !code) {
      setMessage({ type: "error", text: "Please fill in all fields." });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match." });
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        RESET_URL,
        {
          code ,
          Email,
          newPassword : password,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      setSuccess(true);
      setMessage({
        type: "success",
        text: res.data.message || "Password reset successful!",
      });

      setTimeout(() => navigate("/"), 2500);
    } catch (err) {
      console.error("Reset password error:", err.response?.data || err.message);
      setMessage({
        type: "error",
        text:
          err.response?.data?.message ||
          "Invalid code or token. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 via-amber-100 to-orange-50 px-4"
    >
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md border border-amber-100">
        {!success ? (
          <>
            <h3 className="text-3xl font-bold text-center text-amber-800 mb-8">
              Reset Password
            </h3>

            <form onSubmit={handleReset} className="space-y-5">
            

              {/* New Password */}
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="password"
                  placeholder="New password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all"
                />
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all"
                />
              </div>

              {/* Message */}
              {message && (
                <p
                  className={`text-sm text-center ${
                    message.type === "error"
                      ? "text-red-500"
                      : "text-green-600"
                  }`}
                >
                  {message.text}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-700 text-white py-2.5 rounded-lg font-semibold hover:bg-amber-800 transition-all shadow-md disabled:opacity-60"
              >
                {loading ? "Resetting..." : "Reset Password"}
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4 py-10">
            <CheckCircle2 className="text-green-600 w-12 h-12" />
            <h4 className="text-lg font-semibold text-green-700">
              Password Reset Successfully!
            </h4>
            <p className="text-gray-600 text-center text-sm">
              Redirecting to login page...
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ResetPassword;
