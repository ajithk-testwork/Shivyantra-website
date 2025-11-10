import React, { useEffect, useState } from "react";
import { Trash2, ArrowLeft } from "lucide-react";
import api from "../../Utilis/api";
import toast from "react-hot-toast";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Fetch Cart Items
  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("refresh_token");
      const res = await api.get("/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Cart Response:", res.data);

      if (Array.isArray(res.data.cartItems)) {
        setCartItems(res.data.cartItems);
      } else {
        setCartItems([]);
      }
    } catch (err) {
      console.log(err.response);
      toast.error("Failed to load cart");
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // ✅ Handle Quantity Update (+ / -)
  const updateQuantity = async (id, newQty) => {
  if (newQty < 1) return;

  try {
    const token = localStorage.getItem("refresh_token");
    const res = await api.post(
      `/cart/${id}`,
      { Quantity: newQty },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, Quantity: newQty } : item
      )
    );

    toast.success("Quantity updated");
  } catch (err) {
    console.log("Update quantity error:", err.response);
    toast.error("Failed to update quantity");
  }
};


  // ✅ Handle Delete Cart Item
  const handleCartDelete = async (id) => {
    try {
      const token = localStorage.getItem("refresh_token");
      await api.delete(`/cart/${id}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Update frontend
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      toast.success("Item removed from cart");
    } catch (err) {
      console.log(err.response);
      toast.error("Failed to remove item");   
    }
  };

  // ✅ Calculate total
  const subtotal = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.Price) * item.Quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 100 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto mb-10 flex items-center gap-3">
        <button
          onClick={() => window.history.back()}
          className="flex items-center text-amber-600 hover:text-amber-700"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Shop
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ✅ CART ITEMS */}
        <div className="lg:col-span-2 bg-white shadow-sm rounded-2xl p-6">
          <h2 className="text-2xl font-semibold border-b pb-4 mb-6">Your Cart</h2>

          <div className="flex flex-col divide-y">
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center py-10">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-5 flex-wrap gap-6"
                >
                  <div className="flex items-center gap-5">
                    <img
                      src={item.ProductImage}
                      alt={item.ProductName}
                      className="w-24 h-24 rounded-lg object-cover shadow-sm"
                    />
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        {item.ProductName}
                      </h3>
                      <p className="text-amber-600 font-semibold mt-2">
                        ₹{item.Price}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="flex items-center border rounded-full overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, item.Quantity - 1)}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 text-gray-700 bg-gray-50">
                        {item.Quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.Quantity + 1)}
                        className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleCartDelete(item.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* ✅ ORDER SUMMARY */}
        <div className="bg-white shadow-sm rounded-2xl p-6 h-fit sticky top-20">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

          <div className="space-y-3 text-gray-600 mb-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹{shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-800 border-t pt-3">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
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
