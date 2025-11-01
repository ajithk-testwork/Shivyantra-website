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
import image from "../../assets/About.webp";

const REGISTER_URL = "https://shivyantra.onrender.com/api/register";
const VERIFY_OTP_URL = "https://shivyantra.onrender.com/api/register/otp-verify";
const RESEND_OTP_URL = "https://shivyantra.onrender.com/api/register/resend-otp";

const Register = ({ onClose, onSuccess, onSwitch }) => {
  const [isOtpStep, setIsOtpStep] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(null);
  const [resendTimer, setResendTimer] = useState(0);
  const [otp, setOtp] = useState("");
  const timeoutRef = useRef(null);
  const isMounted = useRef(true);

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    MobileNumber: "",
    Password: "",
  });

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (resendTimer <= 0) return;
    const t = setTimeout(() => setResendTimer((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [resendTimer]);

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

 const finishSuccess = (user, token) => {
  setShowSuccessPopup(true);
  timeoutRef.current = setTimeout(() => {
   

  
    setShowSuccessPopup(false);

    
    onSwitch(); 

  }, 2000);
};


  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await axios.post(REGISTER_URL, formData);
      if (res.status === 200 || res.status === 201) {
        setIsOtpStep(true);
        setResendTimer(30);
        setMessage({ type: "success", text: "OTP sent — check your phone/email." });
      } else {
        setMessage({ type: "error", text: res.data?.message || "Registration failed" });
      }
    } catch (err) {
      setMessage({ type: "error", text: err.response?.data?.message || err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp.trim()) {
      setMessage({ type: "error", text: "Please enter OTP." });
      return;
    }

    setLoading(true);
    try {
      const payload = {
        Email: formData.Email,
        MobileNumber: formData.MobileNumber,
        Otp: otp.trim(),
      };
      const res = await axios.post(VERIFY_OTP_URL, payload);
      if (res.status === 200 || res.status === 201) {
        const token = res.data?.token;
        const user = res.data?.user || formData;
        setMessage({ type: "success", text: "OTP verified successfully!" });
        finishSuccess(user, token);
      } else {
        setMessage({ type: "error", text: res.data?.message || "Verification failed" });
      }
    } catch (err) {
      setMessage({ type: "error", text: err.response?.data?.message || err.message });
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    if (resendTimer > 0) return;
    setLoading(true);
    try {
      await axios.post(RESEND_OTP_URL, {
        Email: formData.Email,
        MobileNumber: formData.MobileNumber,
      });
      setResendTimer(30);
      setMessage({ type: "success", text: "OTP resent successfully." });
    } catch {
      setMessage({ type: "error", text: "Failed to resend OTP." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="bg-white overflow-hidden w-[92%] md:w-[760px] rounded-2xl shadow-2xl flex flex-col md:flex-row relative"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white w-[92%] md:w-[760px] rounded-2xl shadow-2xl flex flex-col md:flex-row relative overflow-hidden"
        >
          {/* Left */}
          <div className="hidden md:flex w-1/2 relative">
            <img src={image} alt="bg" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/50 to-amber-800/50" />
            <div className="relative z-10 flex flex-col items-center justify-center text-white p-8 text-center">
              <h2 className="text-3xl font-bold mb-2">Join Shivyantra</h2>
              <p className="text-sm text-orange-100">Unleash your potential with Shivyantra. Create your account now.</p>
            </div>
          </div>

          {/* Right */}
          <div className="flex-1 p-6 md:p-8 relative bg-gradient-to-b from-white via-amber-50 to-orange-100">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Registration form */}
            {!isOtpStep && !showSuccessPopup && (
              <>
                <h3 className="text-2xl font-semibold text-center mb-6 text-amber-800">
                  Create Your Account
                </h3>
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" />
                    <input
                      name="Name"
                      value={formData.Name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                      className="w-full pl-10 py-2 border rounded-lg focus:ring-2 focus:ring-amber-600"
                    />
                  </div>

                  <div className="relative">
                    <PhoneCall className="absolute left-3 top-3 text-gray-400" />
                    <input
                      name="MobileNumber"
                      value={formData.MobileNumber}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      required
                      className="w-full pl-10 py-2 border rounded-lg focus:ring-2 focus:ring-amber-600"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" />
                    <input
                      name="Email"
                      type="email"
                      value={formData.Email}
                      onChange={handleChange}
                      placeholder="Email"
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
                  </div>

                  {message && (
                    <p
                      className={`text-sm ${
                        message.type === "success" ? "text-green-600" : "text-red-500"
                      }`}
                    >
                      {message.text}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-amber-700 text-white py-2 rounded-lg font-semibold hover:bg-amber-800 disabled:opacity-60"
                  >
                    {loading ? "Sending OTP..." : "Register"}
                  </button>
                </form>

                <p className="text-center text-sm mt-4 text-gray-700">
                  Already have an account?{" "}
                  <button onClick={onSwitch} className="text-amber-700 font-semibold">
                    Login
                  </button>
                </p>
              </>
            )}

            {/* OTP */}
            {isOtpStep && !showSuccessPopup && (
              <form onSubmit={handleVerifyOtp} className="space-y-5">
                <h3 className="text-2xl font-semibold text-center mb-2 text-amber-800">
                  Verify Your OTP
                </h3>
                <input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  required
                  className="w-full text-center text-lg tracking-widest border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-600"
                />
                {message && (
                  <p
                    className={`text-sm ${
                      message.type === "success" ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {message.text}
                  </p>
                )}
                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold disabled:opacity-60"
                  >
                    {loading ? "Verifying..." : "Verify OTP"}
                  </button>
                  <button
                    type="button"
                    onClick={resendOtp}
                    disabled={resendTimer > 0 || loading}
                    className="flex-1 flex items-center justify-center gap-2 text-amber-700 font-semibold hover:text-amber-800 disabled:opacity-60"
                  >
                    <RotateCcw className="w-4 h-4" />
                    {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend OTP"}
                  </button>
                </div>
              </form>
            )}

            {/* Success */}
            <AnimatePresence>
              {showSuccessPopup && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center p-6"
                >
                  <CheckCircle2 className="text-green-500 w-16 h-16 mb-4 animate-bounce" />
                  <h4 className="text-2xl font-bold text-green-600 mb-2">
                    Registration Complete!
                  </h4>
                  <p className="text-gray-700">
                    Welcome,{" "}
                    <span className="font-semibold text-amber-700">
                      {formData.Name || formData.Email}
                    </span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Register;
