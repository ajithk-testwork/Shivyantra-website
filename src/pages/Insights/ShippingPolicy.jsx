import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Truck, Globe2, Package, AlertCircle, Mail } from "lucide-react";

const ShippingPolicy = () => {

     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-amber-50 text-gray-800 min-h-screen py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
          Shipping Policy
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At Shriworks, we strive to ensure that all our handcrafted temple
          items and jewelry are securely packaged and delivered to you on time.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-amber-700"
        >
          <div className="flex items-center gap-3 mb-3">
            <Globe2 className="text-amber-700 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-amber-900">
              Shipping Locations
            </h2>
          </div>
          <p>
            Shriworks offers shipping within India and to select international
            countries. For international orders, please contact Shriworks’
            customer service team for available shipping options and costs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-amber-700"
        >
          <div className="flex items-center gap-3 mb-3">
            <Package className="text-amber-700 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-amber-900">
              Processing Time
            </h2>
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>All orders are processed within 5–7 business days.</li>
            <li>
              Custom or bespoke orders may take additional time depending on
              complexity.
            </li>
            <li>
              Orders will not be processed, shipped, or delivered on weekends or
              holidays.
            </li>
            <li>
              Shriworks will notify you when your order is ready for dispatch.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-amber-700"
        >
          <div className="flex items-center gap-3 mb-3">
            <Truck className="text-amber-700 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-amber-900">
              Shipping Rates & Delivery Estimates
            </h2>
          </div>
          <p>
            Shipping rates are calculated at checkout based on location and
            order weight. Estimated delivery times:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Domestic Orders: 5–10 business days after dispatch.</li>
            <li>
              International Orders: 10–20 business days, depending on customs
              and destination country.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-amber-700"
        >
          <div className="flex items-center gap-3 mb-3">
            <Mail className="text-amber-700 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-amber-900">
              Shipment Confirmation & Tracking
            </h2>
          </div>
          <p>
            Once shipped, you’ll receive a confirmation email with tracking
            details. If you don’t receive tracking info within 7 business days,
            please reach out to us at{" "}
            <span className="font-medium text-amber-800">
              support@shriworks.com
            </span>
            .
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-amber-700"
        >
          <div className="flex items-center gap-3 mb-3">
            <AlertCircle className="text-amber-700 w-6 h-6" />
            <h2 className="text-2xl font-semibold text-amber-900">
              Customs, Duties, and Packaging
            </h2>
          </div>
          <p>
            Shriworks is not responsible for customs fees, taxes, or duties on
            international shipments. All such charges are the customer’s
            responsibility. Items are securely packaged, but damage during
            shipping is beyond our control. For valuable or delicate items,
            consider opting for shipping insurance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-amber-700"
        >
          <h2 className="text-2xl font-semibold text-amber-900 mb-3">
            Undeliverable or Incorrect Address
          </h2>
          <p>
            Please provide accurate shipping details at checkout. Shriworks is
            not responsible for undeliverable shipments due to incorrect
            addresses provided by customers.
          </p>

          <h2 className="text-2xl font-semibold text-amber-900 mt-6 mb-3">
            Lost or Delayed Shipments
          </h2>
          <p>
            If your shipment is delayed or lost, contact the carrier using your
            tracking information. While we cannot control carrier delays, our
            team will assist in resolving issues promptly.
          </p>
          <p className="mt-4">
            For further assistance, please contact us at{" "}
            <span className="font-medium text-amber-800">
              info@shriworks.com
            </span>
            .
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
