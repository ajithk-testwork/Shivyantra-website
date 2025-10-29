import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

const CancellationPolicy = () => {

     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-amber-50 min-h-screen py-16 px-6 md:px-20 text-gray-800">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <div className="flex justify-center mb-4">
          <XCircle className="w-12 h-12 text-amber-700" />
        </div>
        <h1 className="text-4xl font-bold text-amber-800 mb-2">
          Cancellation Policy
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At <span className="font-semibold text-amber-700">Shriworks</span>, we understand that plans can change. 
          To accommodate this, we offer a 24-hour window for order cancellations.
        </p>
      </motion.div>

      {/* Policy Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg p-8 space-y-8 max-w-5xl mx-auto"
      >
        <section>
          <h2 className="text-xl font-semibold text-amber-700 mb-3">
            Order Cancellation (Within 24 Hours)
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Cancellations are allowed within <strong>24 hours</strong> of placing your order, 
            provided the order has not been processed or shipped. After 24 hours, 
            or if the order has been processed or shipped, cancellations will not be accepted.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-700 mb-3">
            Custom and Bespoke Orders
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Cancellations for <strong>custom-made or bespoke items</strong> must be made within 24 hours of placing the order.
            Once production begins after 24 hours, custom orders cannot be canceled.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-700 mb-3">
            How to Cancel an Order
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To request a cancellation, please contact Shriworks at{" "}
            <a
              href="mailto:info@shriworks.com"
              className="text-amber-700 font-medium underline hover:text-amber-800"
            >
              info@shriworks.com
            </a>{" "}
            or call us at{" "}
            <a
              href="tel:+919176554626"
              className="text-amber-700 font-medium underline hover:text-amber-800"
            >
              (+91) 91765 54626
            </a>{" "}
            within 24 hours of placing your order. Provide your order number and relevant details. 
            Shriworks will confirm whether your order is eligible for cancellation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-700 mb-3">
            Refunds for Canceled Orders
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If your order is canceled within the eligible time frame, Shriworks will issue a full refund 
            to the original payment method. Refunds typically take <strong>7-10 business days</strong> 
            to appear in your account after confirmation of cancellation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-700 mb-3">
            Non-Cancellable Orders
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Orders that have been processed, shipped, or are custom-made and in production 
            cannot be canceled after the 24-hour window. If you have received your order and there is an issue, 
            please refer to Shriworks’ <span className="font-medium">Return and Replacement Policy</span> for assistance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-amber-700 mb-3">
            Shriworks-Initiated Cancellations
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Shriworks reserves the right to cancel any order due to unforeseen circumstances 
            such as pricing errors, product unavailability, or other issues. 
            In such cases, you will be notified, and a full refund will be issued.
          </p>
        </section>

        <p className="text-gray-700 pt-4 border-t border-amber-100">
          For any questions or to request a cancellation, please contact us at{" "}
          <a
            href="mailto:info@shriworks.com"
            className="text-amber-700 font-medium underline hover:text-amber-800"
          >
            info@shriworks.com
          </a>{" "}
          or call{" "}
          <a
            href="tel:+919176554626"
            className="text-amber-700 font-medium underline hover:text-amber-800"
          >
            (+91) 91765 54626
          </a>.
        </p>
      </motion.div>
    </div>
  );
};

export default CancellationPolicy;
