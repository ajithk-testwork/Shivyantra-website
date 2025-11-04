import React from "react";
import { Trash2, ArrowLeft } from "lucide-react";

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10 flex items-center gap-3">
        <button className="flex items-center text-amber-600 hover:text-amber-700">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Shop
        </button>
      </div>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Cart Items */}
        <div className="lg:col-span-2 bg-white shadow-sm rounded-2xl p-6">
          <h2 className="text-2xl font-semibold border-b pb-4 mb-6">Your Cart</h2>

          {/* Item */}
          <div className="flex flex-col divide-y">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between py-5 flex-wrap gap-6"
              >
                {/* Image + Info */}
                <div className="flex items-center gap-5">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Product"
                    className="w-24 h-24 rounded-lg object-cover shadow-sm"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      Product Name {item}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Category • Size M
                    </p>
                    <p className="text-amber-600 font-semibold mt-2">₹899.00</p>
                  </div>
                </div>

                {/* Quantity + Remove */}
                <div className="flex items-center gap-5">
                  <div className="flex items-center border rounded-full overflow-hidden">
                    <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">-</button>
                    <span className="px-4 py-1 text-gray-700 bg-gray-50">1</span>
                    <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">+</button>
                  </div>
                  <button className="text-red-500 hover:text-red-600">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Summary */}
        <div className="bg-white shadow-sm rounded-2xl p-6 h-fit sticky top-20">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

          <div className="space-y-3 text-gray-600 mb-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹2,697.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹100.00</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-800 border-t pt-3">
              <span>Total</span>
              <span>₹2,797.00</span>
            </div>
          </div>

          <input
            type="text"
            placeholder="Enter coupon code"
            className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />

          <button className="w-full bg-amber-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-amber-700 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
