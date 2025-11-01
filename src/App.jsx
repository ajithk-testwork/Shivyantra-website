import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import OfferToasts from "./components/OfferToster";
import Home from "./pages/Home"
import About from "./pages/About";
import Shop from "./pages/Shop";
import Blog from "./pages/Blogs/Blog";
import Contactus from "./pages/Contactus"
import Card from "./components/Card";
import Profile from "./components/Profile";
import BlogContent from "./pages/Blogs/BlogContent";
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import { Toaster } from "react-hot-toast";
import ReplacementPolicy from "./pages/Insights/ReplacementPolicy";
import ShippingPolicy from "./pages/Insights/ShippingPolicy";
import CancellationPolicy from "./pages/Insights/CancellationPolicy";
import StrategicVision from "./pages/Insights/StrategicVision";
import Login from "./pages/Auth/Login";


function App() {


  return (
    <Router>
      <MainNavbar />

      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/card" element={<Card />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/blogcontent" element={<BlogContent />} />
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="/reset-password" element={<ResetPassword />} /> 
        <Route path="/replacement-policy" element={<ReplacementPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />}/>
       <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        <Route path="/strategic-vision" element={<StrategicVision />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
