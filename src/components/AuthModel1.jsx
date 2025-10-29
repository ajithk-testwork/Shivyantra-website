import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  X,
  Mail,
  Lock,
  User,
  PhoneCall,
  Eye,
  EyeOff,
  CheckCircle2,
  RotateCcw,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import image from "../assets/About.webp";

const REGISTER_URL = "https://shivyantra.onrender.com/api/register";
const LOGIN_URL = "https://shivyantra.onrender.com/api/login";
const VERIFY_OTP_URL = "https://shivyantra.onrender.com/api/register/otp-verify";
const RESEND_OTP_URL = "https://shivyantra.onrender.com/api/register/resend-otp";

const AuthModal = ({ onClose = () => {}, onSuccess = () => {} }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isOtpStep, setIsOtpStep] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(null);
  const [resendTimer, setResendTimer] = useState(0);

  const timeoutRef = useRef(null);
  const isMounted = useRef(true);

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    MobileNumber: "",
    Password: "",
  });
  const [otp, setOtp] = useState("");

  // mounted flag + cleanup for timeout
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  // resend countdown
  useEffect(() => {
    if (resendTimer <= 0) return;
    const t = setTimeout(() => setResendTimer((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [resendTimer]);

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  // central success finishing routine:
  // 1) show success overlay
  // 2) after 2s persist token/user safely
  // 3) call onSuccess(displayName) and onClose()
  const finishWithSuccess = (payloadUser = null, token = null, displayName = null) => {
    if (!isMounted.current) return;
    setShowSuccessPopup(true);

    // clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    timeoutRef.current = setTimeout(() => {
      // persist safely
      try {
        if (token) localStorage.setItem("token", token);
        if (payloadUser) localStorage.setItem("user", JSON.stringify(payloadUser));
        localStorage.setItem("isLoginned", "true");
      } catch (err) {
        // localStorage could fail in some contexts — we don't want that to stop the flow
        // eslint-disable-next-line no-console
        console.error("Failed to persist login data:", err);
      }

      // call parent handlers if still mounted
      if (isMounted.current) {
        try {
          onSuccess(displayName || (payloadUser && (payloadUser.Name || payloadUser.name)) || formData.Name || formData.Email || "User");
        } catch (e) {
          // swallow parent errors but log
          // eslint-disable-next-line no-console
          console.error("onSuccess threw:", e);
        }
        setShowSuccessPopup(false);
        onClose();
      }

      timeoutRef.current = null;
    }, 2000);
  };

  // login or register submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      if (isLogin) {
        const res = await axios.post(LOGIN_URL, {
          Email: formData.Email,
          Password: formData.Password,
        });

        if (res.status === 200) {
          const token = res.data?.token;
          const user = res.data?.user || { Name: res.data?.name, Email: res.data?.email };
          finishWithSuccess(user, token, user?.Name || user?.name || formData.Email);
        } else {
          setMessage({ type: "error", text: res.data?.message || "Login failed" });
        }
      } else {
        const res = await axios.post(REGISTER_URL, formData, {
          headers: { "Content-Type": "application/json" },
        });

        if (res.status === 200 || res.status === 201) {
          setIsOtpStep(true);
          setResendTimer(30);
          setMessage({ type: "success", text: "OTP sent — check your phone/email." });
        } else {
          setMessage({ type: "error", text: res.data?.message || "Registration failed" });
        }
      }
    } catch (err) {
      setMessage({
        type: "error",
        text: err?.response?.data?.message || err.message || "Network error",
      });
    } finally {
      if (isMounted.current) setLoading(false);
    }
  };

  // verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp.trim()) {
      setMessage({ type: "error", text: "Please enter the OTP." });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const payload = { Email: formData.Email, MobileNumber: formData.MobileNumber, Otp: otp.trim() };
      const res = await axios.post(VERIFY_OTP_URL, payload, { headers: { "Content-Type": "application/json" } });

      if (res.status === 200 || res.status === 201) {
        const token = res.data?.token;
        const user = res.data?.user || { Name: formData.Name, Email: formData.Email };
        setMessage({ type: "success", text: res.data?.message || "Verified!" });
        finishWithSuccess(user, token, user?.Name || user?.name || formData.Name);
      } else {
        setMessage({ type: "error", text: res.data?.message || "Verification failed" });
      }
    } catch (err) {
      setMessage({
        type: "error",
        text: err?.response?.data?.message || err.message || "Verification error",
      });
    } finally {
      if (isMounted.current) setLoading(false);
    }
  };

  // resend OTP
  const resendOtp = async () => {
    if (resendTimer > 0) return;
    setLoading(true);
    setMessage(null);

    try {
      const payload = { Email: formData.Email, MobileNumber: formData.MobileNumber };
      const res = await axios.post(RESEND_OTP_URL, payload, { headers: { "Content-Type": "application/json" } });

      if (res.status === 200 || res.status === 201) {
        setResendTimer(30);
        setMessage({ type: "success", text: res.data?.message || "OTP resent." });
      } else {
        setMessage({ type: "error", text: res.data?.message || "Resend failed." });
      }
    } catch (err) {
      setMessage({ type: "error", text: err?.response?.data?.message || err.message || "Resend error" });
    } finally {
      if (isMounted.current) setLoading(false);
    }
  };

  // manual close: clear timeout to avoid later calls
  const handleManualClose = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setShowSuccessPopup(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ type: "spring", stiffness: 160, damping: 18 }}
          className="bg-white overflow-hidden w-[92%] md:w-[760px] rounded-2xl shadow-2xl flex flex-col md:flex-row relative"
        >
          {/* Left visual */}
          <div className="hidden md:flex w-1/2 relative">
            <img src={image} alt="bg" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/30 to-amber-800/30" />
            <div className="relative z-10 flex flex-col items-center justify-center text-white p-8 text-center">
              <h2 className="text-3xl font-bold mb-2">{isLogin ? "Welcome Back!" : "Join Shivyantra"}</h2>
              <p className="text-sm text-orange-100">{isLogin ? "Login to continue." : "Create an account and begin your journey."}</p>
            </div>
          </div>

          {/* Right panel */}
          <div className="flex-1 p-6 md:p-8 relative bg-gradient-to-b from-white via-amber-50 to-orange-100">
            <button onClick={handleManualClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
              <X className="w-5 h-5" />
            </button>

            {/* Form */}
            {!isOtpStep && !showSuccessPopup && (
              <>
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-800">{isLogin ? "Login to Your Account" : "Create Your Account"}</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {!isLogin && (
                    <>
                      <div className="relative">
                        <User className="absolute left-3 top-3 text-gray-400" />
                        <input name="Name" value={formData.Name} onChange={handleChange} placeholder="Full Name" required className="w-full pl-10 py-2 border rounded-lg focus:ring-2 focus:ring-amber-600" />
                      </div>

                      <div className="relative">
                        <PhoneCall className="absolute left-3 top-3 text-gray-400" />
                        <input name="MobileNumber" value={formData.MobileNumber} onChange={handleChange} placeholder="Phone Number" required className="w-full pl-10 py-2 border rounded-lg focus:ring-2 focus:ring-amber-600" />
                      </div>
                    </>
                  )}

                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" />
                    <input name="Email" type="email" value={formData.Email} onChange={handleChange} placeholder="Email" required className="w-full pl-10 py-2 border rounded-lg focus:ring-2 focus:ring-amber-600" />
                  </div>

                  <div className="relative">
                    <Lock className="absolute left-3 top-3 text-gray-400" />
                    <input name="Password" type={showPassword ? "text" : "password"} value={formData.Password} onChange={handleChange} placeholder="Password" required className="w-full pl-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-amber-600" />
                    <button type="button" onClick={() => setShowPassword((s) => !s)} className="absolute right-3 top-3 text-gray-400 hover:text-amber-600">{showPassword ? <EyeOff /> : <Eye />}</button>
                  </div>

                  {message && <div className={`text-sm font-medium ${message.type === "success" ? "text-green-600" : "text-red-500"}`}>{message.text}</div>}

                  <button type="submit" disabled={loading} className="w-full bg-amber-700 text-white py-2 rounded-lg font-semibold hover:bg-amber-800 disabled:opacity-60">
                    {loading ? (isLogin ? "Logging in..." : "Sending OTP...") : isLogin ? "Login" : "Register"}
                  </button>
                </form>

                <p className="text-center text-sm mt-4 text-gray-700">
                  {isLogin ? (
                    <>Don’t have an account? <button onClick={() => setIsLogin(false)} className="text-amber-700 font-semibold">Sign Up</button></>
                  ) : (
                    <>Already have an account? <button onClick={() => setIsLogin(true)} className="text-amber-700 font-semibold">Login</button></>
                  )}
                </p>
              </>
            )}

            {/* OTP step */}
            {isOtpStep && !showSuccessPopup && (
              <div className="space-y-5">
                <h3 className="text-2xl font-semibold text-center mb-2 text-amber-800">Verify Your OTP</h3>
                <form onSubmit={handleVerifyOtp} className="space-y-4">
                  <input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" required className="w-full text-center text-lg tracking-widest border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-600" />

                  {message && <div className={`text-sm font-medium ${message.type === "success" ? "text-green-600" : "text-red-500"}`}>{message.text}</div>}

                  <div className="flex gap-3">
                    <button type="submit" disabled={loading} className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold disabled:opacity-60">{loading ? "Verifying..." : "Verify OTP"}</button>
                    <button type="button" onClick={resendOtp} disabled={resendTimer > 0 || loading} className="flex-1 flex items-center justify-center gap-2 text-amber-700 font-semibold hover:text-amber-800 disabled:opacity-60">
                      <RotateCcw className="w-4 h-4" /> {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend OTP"}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Success overlay */}
            <AnimatePresence>
              {showSuccessPopup && (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.2 }} className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center p-6">
                  <CheckCircle2 className="text-green-500 w-16 h-16 mb-4 animate-bounce" />
                  <h4 className="text-2xl font-bold text-green-600 mb-2">{isLogin ? "Login Successful!" : "Registration Complete!"}</h4>
                  <p className="text-gray-700">Welcome, <span className="font-semibold text-amber-700">{formData.Name || formData.Email}</span></p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AuthModal;
