import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Package, Truck, AlertTriangle, RefreshCcw } from "lucide-react";

const ReplacementPolicy = () => {

     useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-amber-50 min-h-screen text-gray-800 py-16 px-6 md:px-20">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-800 mb-3">
          Replacement Policy
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          At <span className="font-semibold text-amber-700">Shriworks</span>, we’re committed to delivering high-quality, handcrafted products.
          We offer replacements only for defective or mismatched items as per the policy below.
        </p>
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-amber-100"
      >
        {/* Eligibility */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-amber-700 w-7 h-7" />
            <h2 className="text-2xl font-semibold text-amber-800">Eligibility for Replacement</h2>
          </div>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>
              Replacements are available only for items that are defective or significantly different from their product description.
            </li>
            <li>
              Custom-made items (e.g., bespoke temple jewelry, statues, or custom orders) are not eligible for replacement unless there is a manufacturing defect.
            </li>
            <li>
              Items damaged during transport are not covered. We recommend purchasing shipping insurance or contacting the transport company for claims.
            </li>
          </ul>
        </section>

        {/* Process */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <RefreshCcw className="text-amber-700 w-7 h-7" />
            <h2 className="text-2xl font-semibold text-amber-800">Replacement Process</h2>
          </div>
          <ol className="list-decimal ml-6 space-y-3 text-gray-700">
            <li>
              <span className="font-semibold text-amber-700">Contact Us:</span>  
              Email us at <span className="underline text-amber-700 cursor-pointer">[your customer service email]</span> within <strong>7 days</strong> of receiving your order.
              Include your order number, issue description, and product photos.
            </li>
            <li>
              <span className="font-semibold text-amber-700">Approval:</span>  
              We’ll review your request and confirm if the item qualifies for a replacement.
            </li>
            <li>
              <span className="font-semibold text-amber-700">Return of Defective Item:</span>  
              Approved items must be returned in their original packaging. Return shipping is the customer’s responsibility unless stated otherwise.
            </li>
            <li>
              <span className="font-semibold text-amber-700">Replacement Shipping:</span>  
              Once the returned item is inspected, we’ll send a replacement. Shipping time depends on product availability.
            </li>
          </ol>
        </section>

        {/* Exclusions */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Truck className="text-amber-700 w-7 h-7" />
            <h2 className="text-2xl font-semibold text-amber-800">Exclusions</h2>
          </div>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            <li>
              <strong>Shipping Damage:</strong> Shriworks is not responsible for transport-related damage. All items are securely packed before dispatch.
            </li>
            <li>
              <strong>Custom Orders:</strong> No replacements for custom-made or personalized items unless defective.
            </li>
          </ul>
        </section>

        {/* Important Note */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-red-500 w-7 h-7" />
            <h2 className="text-2xl font-semibold text-red-600">Important Note</h2>
          </div>
          <p className="text-gray-700 mb-2">
            All replacement requests must be made within <strong>1 day</strong> of receiving the item. Requests beyond this period will not be accepted.
          </p>
          <p className="text-gray-700">
            Replacement items are subject to availability. If the same product is unavailable, we may offer an alternative or refund at our discretion.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default ReplacementPolicy;
