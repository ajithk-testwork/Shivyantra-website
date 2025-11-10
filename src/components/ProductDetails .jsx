import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";
import api from ".././Utilis/api"


const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);

  // ✅ Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(
          `/products?filters[id][$eq]=${id}&populate=*`
        );
        const productData = res.data?.data?.[0];
        setProduct(productData || null);
      } catch (err) {
        console.error("❌ Error fetching product:", err);
        toast.error("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // ✅ Helper to get user token
  const getToken = () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      return (
        user?.jwt ||
        user?.token ||
        user?.refresh_token ||
        user?.data?.refresh_token ||
        localStorage.getItem("refresh_token") ||
        null
      );
    } catch {
      return null;
    }
  };

  // ✅ Add or increase cart quantity
  const handleAddToCart = async () => {
    if (!product) return;
    const token = getToken();
    if (!token) {
      toast.error("Please log in to add items!");
      navigate("/login");
      return;
    }

    setAdding(true);

    const payload = {
      ProductName: product.ProductName,
      ProductImage:
        product.ProductImage?.[0]?.url ||
        "https://via.placeholder.com/500x500?text=No+Image",
      Quantity: 1,
      Price: product.Price,
    };

    try {
      // 1️⃣ Fetch existing cart
      const cartRes = await api.get(`/cart`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const cartItems = Array.isArray(cartRes.data?.data)
        ? cartRes.data.data
        : Array.isArray(cartRes.data?.cart)
        ? cartRes.data.cart
        : [];

      // 2️⃣ Check if product already exists
      const existing = cartItems.find(
        (item) =>
          item.ProductName === payload.ProductName ||
          item.productName === payload.ProductName
      );

      if (existing) {
        // 3️⃣ Increase quantity
        const newQty = (existing.Quantity || existing.quantity || 1) + 1;
        await api.put(
          `/cart/${existing.id || existing._id}`,
          { Quantity: newQty },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        toast.success("Increased product quantity in cart!");
      } else {
        // 4️⃣ Add new product
        await api.post(`/cart`, payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("🛒 Product added to cart!");
      }

      // 5️⃣ Update cart count in localStorage
      let count = parseInt(localStorage.getItem("cartCount") || "0", 10);
      count += 1;
      localStorage.setItem("cartCount", count);
      window.dispatchEvent(new Event("cartCountUpdated"));
    } catch (err) {
      console.error("❌ Add to Cart Error:", err);
      if (err.response?.status === 401) {
        toast.error("Please log in to add products to your cart!");
        navigate("/login");
      } else {
        toast.error("Failed to add product to cart!");
      }
    } finally {
      setAdding(false);
    }
  };

  // 🌀 Loading state
  if (loading)
    return (
      <div className="text-center py-32 text-lg text-gray-600">
        Loading product details...
      </div>
    );

  // ❌ Product not found
  if (!product)
    return (
      <div className="text-center py-32 text-lg text-gray-600">
        Product not found.
      </div>
    );

  const image =
    product.ProductImage?.[0]?.url ||
    "https://via.placeholder.com/500x500?text=No+Image";

  return (
    <section className="min-h-screen bg-[#faf7f1] py-16 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-700 hover:text-amber-700 transition mb-10"
        >
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">Back to Shop</span>
        </button>

        {/* Product Info */}
        <div className="grid md:grid-cols-2 gap-12 items-start bg-white border border-amber-100 rounded-2xl shadow-md p-8">
          {/* Image */}
          <div className="flex justify-center items-center bg-amber-50 rounded-xl p-4">
            <img
              src={image}
              alt={product.ProductName}
              className="w-auto h-[420px] object-contain rounded-lg shadow-sm border border-amber-100"
            />
          </div>

          {/* Info */}
          <div className="space-y-5">
            <h1 className="text-3xl font-serif text-gray-900">
              {product.ProductName}
            </h1>
            <p className="text-gray-600 italic">{product.SubTitle}</p>
            <p className="text-2xl font-semibold text-amber-700">
              ₹{product.Price}
            </p>

            {/* Details */}
            <ul className="mt-5 space-y-2 text-gray-700 text-sm border-t border-b border-amber-100 py-4">
              <li>
                <strong>Code:</strong> {product.SKU}
              </li>
              <li>
                <strong>Weight:</strong> {product.Weight}
              </li>
              <li>
                <strong>Dimension:</strong> {product.Dimension}
              </li>
              <li>
                <strong>Material:</strong> {product.Material || "N/A"}
              </li>
              <li>
                <strong>Available Quantity:</strong>{" "}
                {product.AvailableQuantity}
              </li>
            </ul>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-amber-800 mt-6 mb-2">
                Description
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {product.Description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-10">
              <button
                onClick={handleAddToCart}
                disabled={adding}
                className={`mt-6 flex gap-2 items-center ${
                  adding
                    ? "bg-amber-400 cursor-not-allowed"
                    : "bg-amber-600 hover:bg-amber-700"
                } text-white px-6 py-2.5 rounded-lg font-medium shadow-md transition`}
              >
                <ShoppingCart size={18} />
                {adding ? "Adding..." : "Add to Cart"}
              </button>

              <button className="mt-6 bg-amber-700 hover:bg-amber-800 text-white px-6 py-2.5 rounded-lg font-medium shadow-md transition">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
