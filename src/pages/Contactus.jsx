import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-amber-50 text-gray-800 py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div className="flex justify-center mb-4">
          <div className="w-20 h-[2px] bg-gradient-to-r from-gray-400 to-amber-600" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          <span className="text-[#3a3a3a]">Contact </span>
          <span className="text-[#b45309]">Shivyantra</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Reach out to us for inquiries, personalized assistance, or to learn
          more about our divine collections and craftsmanship.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-yellow-800 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-semibold text-amber-700">Shivyantra</span>,
            we’re always here to assist you — whether you have questions about
            Rudraksha authenticity, temple jewelry, or custom creations.
          </p>

          <div className="space-y-5 mt-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-amber-700 flex-shrink-0" />
              <p>
                <span className="font-semibold text-gray-800">Address:</span>
                <br />
                242A, Arcot Rd, Vadapalani, Chennai, Tamil Nadu 600026. <br />
                (Near Vadapalani Post Office)
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-6 h-6 text-amber-700 flex-shrink-0" />
              <p>
                <span className="font-semibold text-gray-800">Phone:</span>
                <br />
                (+91) 91765 54626
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-6 h-6 text-amber-700 flex-shrink-0" />
              <p>
                <span className="font-semibold text-gray-800">Email:</span>
                <br />
                Info@shriworks.com
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-amber-700 flex-shrink-0" />
              <p>
                <span className="font-semibold text-gray-800">Working Hours:</span>
                <br />
                Monday - Saturday: 10:00 AM - 8:30 PM
                <br />
                Sunday: 10:00 AM - 2:30 PM
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg border border-amber-200 p-8"
        >
          <h3 className="text-xl font-semibold text-yellow-800 mb-6">
            Send Us a Message
          </h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-amber-300 p-3 focus:ring-2 focus:ring-amber-400 focus:border-amber-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl border border-amber-300 p-3 focus:ring-2 focus:ring-amber-400 focus:border-amber-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full rounded-xl border border-amber-300 p-3 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-amber-600  hover:bg-amber-700 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <h3 className="text-2xl font-semibold text-center text-yellow-800 mb-6">
          Find Us on Google Maps
        </h3>
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-amber-200">
          <iframe
            title="Shivyantra Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7602734542515!2d80.21260767381165!3d13.050925513136693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267f622160271%3A0x3149fc03560d447!2sJGN%20Technologies!5e0!3m2!1sen!2sin!4v1761630425535!5m2!1sen!2sin"
            referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>

    </section>
  );
};

export default Contact;
