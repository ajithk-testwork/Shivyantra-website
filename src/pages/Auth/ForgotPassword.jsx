import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, X, CheckCircle2, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";


const FORGOT_URL = "https://shivyantra.onrender.com/api/forgot-password";

const ForgotPassword = ({ onClose, onSwitchToLogin }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate()

 const handleForgot = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage({ type: "", text: "" });

  try {
    // ✅ Use correct key name (check your backend)
    const response = await axios.post(FORGOT_URL, { Email: email }, { headers: { "Content-Type": "application/json" } });


    console.log("Forgot password response:", response.data);

    // ✅ Check both success message & actual data
    if (response?.status === 200) {
      const msg =
        response?.data?.message ||
        response?.data?.msg ||
        "Reset link sent successfully!";

      setMessage({
        type: "success",
        text: msg,
      });

      setSuccess(true);

      // ✅ (Optional) If backend sends forgotPasswordUrl in response, log or use it
      if (response.data?.forgotPasswordUrl) {
        console.log("Reset URL:", response.data.forgotPasswordUrl);
      }
    } else {
      // Backend returned 200 but with error-like data
      setMessage({
        type: "error",
        text: response?.data?.message || "Failed to send reset link.",
      });
    }
  } catch (err) {
    console.error("Forgot Password Error:", err.response?.data || err.message);

    const msg =
      err.response?.data?.message ||
      "If an account exists for that email, a reset link has been sent.";

    setMessage({
      type: "success",
      text: msg,
    });

    setSuccess(true);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-orange-50 via-white to-amber-50 py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-white w-[90%] md:w-[420px] mx-auto rounded-2xl shadow-2xl p-8 relative overflow-hidden"
      >
        {/* ❌ Close Button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X className="w-5 h-5" />
        </button>

        {!success ? (
          <>
            <h2 className="text-2xl font-bold text-center text-amber-800 mb-6">
              Forgot Password
            </h2>
            <p className="text-sm text-gray-600 text-center mb-5">
              Enter your registered email address and we’ll send you a password reset link.
            </p>

            <form onSubmit={handleForgot} className="space-y-5">
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600 focus:outline-none"
                />
              </div>

              {message.text && (
                <p
                  className={`text-sm ${
                    message.type === "error" ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {message.text}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-700 text-white py-2.5 rounded-lg font-semibold hover:bg-amber-800 transition disabled:opacity-70 flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-4 w-4" />
                    Sending...
                  </>
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </form>

            <p className="text-sm text-center text-gray-600 mt-5">
              Remember your password?{" "}
              <span
                 onClick={() => navigate("/")}
                className="text-amber-700 font-semibold cursor-pointer hover:underline"
              >
                Back to Home
              </span>
            </p>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-10 space-y-3">
            <CheckCircle2 className="text-green-600 w-12 h-12" />
            <h3 className="text-lg font-semibold text-green-700">
              Reset link sent successfully!
            </h3>
            <p className="text-gray-600 text-sm">
              Please check your email and follow the instructions to reset your password.
            </p>
            <button
              onClick={() => navigate("/")}
              className="mt-4 text-amber-700 font-semibold hover:underline"
            >
              Back to Home
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
