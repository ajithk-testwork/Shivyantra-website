import React from "react";
import { MapPinIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-amber-600 text-amber-50 py-14 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-5 tracking-wide">
            Shivyantra
          </h2>
          <p className="text-amber-100 text-base leading-relaxed">
            At <span className="font-semibold text-yellow-400">Shriworks</span>,
            we create exquisite handcrafted temple jewelry and sacred artifacts
            inspired by South Indian temple traditions. Our skilled artisans
            blend devotion with craftsmanship to ensure authenticity and divine
            beauty in every creation.
          </p>
        </div>

        {/* Insights */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Insights</h3>
          <ul className="space-y-2 text-base">
            {[
              "Replacement Policy",
              "Shipping Policy",
              "Cancellation Policy",
              "Strategic Vision",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block px-3 py-1 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-base">
            {["Home", "Shop", "About", "Blog", "Contact"].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block px-3 py-1 rounded-lg hover:bg-white hover:text-black transition-all duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-base">
            <li className="flex items-start gap-3">
              <MapPinIcon className="w-6 h-6 text-yellow-400 mt-1" />
              <span>
                242A, Arcot Rd, Vadapalani, Chennai - 600026
                <br />
                (Near Vadapalani Post Office)
              </span>
            </li>
          </ul>

          {/* 🌐 Social Media Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-blue-400/50"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 rounded-full hover:scale-110 transition-all duration-300 shadow-md hover:shadow-pink-400/50"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
            <a
              href="https://wa.me/919176554626"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-green-600 rounded-full hover:bg-green-500 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-green-400/50"
            >
              <FaWhatsapp className="text-white text-lg" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-red-600 rounded-full hover:bg-red-500 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-red-400/50"
            >
              <FaYoutube className="text-white text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-amber-700 mt-10"></div>

      {/* Bottom Section */}
      <div className="text-center py-5 text-sm md:text-base text-amber-100">
        <p>
          © 2024 Copyright :{" "}
          <span className="font-semibold text-yellow-400">Shivyantra</span>
        </p>
        <p className="text-xs md:text-sm mt-1">
          Developed by{" "}
          <span className="font-semibold text-yellow-400">
            JGN TECHNOLOGIES
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
