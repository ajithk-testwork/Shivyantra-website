import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../Utilis/api";
import { ArrowLeft, Star, ShoppingCart  } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products?filters[id][$eq]=${id}&populate=*`);
        const productData = res.data.data?.[0];
        setProduct(productData);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading)
    return (
      <div className="text-center py-32 text-lg text-gray-600">
        Loading product details...
      </div>
    );

  if (!product)
    return (
      <div className="text-center py-32 text-lg text-gray-600">
        Product not found.
      </div>
    );

  const attributes = product;
  const image =
    attributes?.ProductImage?.[0]?.url ||
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

        {/* Product Info Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start bg-white border border-amber-100 rounded-2xl shadow-md p-8">
          {/* Left - Image */}
          <div className="flex justify-center items-center bg-amber-50 rounded-xl p-4">
            <img
              src={image}
              alt={attributes.ProductName}
              className="w-auto h-[420px] object-contain rounded-lg shadow-sm border border-amber-100"
            />
          </div>

          {/* Right - Info */}
          <div className="space-y-5">
            <h1 className="text-3xl font-serif text-gray-900">
              {attributes.ProductName}
            </h1>
            <p className="text-gray-600 italic">{attributes.SubTitle}</p>

            <p className="text-2xl font-semibold text-amber-700">
              ₹{attributes.Price}
            </p>

            <ul className="mt-5 space-y-2 text-gray-700 text-sm border-t border-b border-amber-100 py-4">
              <li>
                <strong>Code:</strong> {attributes.SKU}
              </li>
              <li>
                <strong>Weight:</strong> {attributes.Weight}
              </li>
              <li>
                <strong>Dimension:</strong> {attributes.Dimension}
              </li>
              <li>
                <strong>Material:</strong> {attributes.Material || "N/A"}
              </li>
              <li>
                <strong>Available Quantity:</strong>{" "}
                {attributes.AvailableQuantity}
              </li>
            </ul>

            <div>
              <h3 className="text-lg font-semibold text-amber-800 mt-6 mb-2">
                Description
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {attributes.Description}
              </p>
            </div>
            <div className=" flex gap-10">
            <button className="mt-6 bg-amber-600 flex gap-2 hover:bg-amber-700 text-white px-6 py-2.5 rounded-lg font-medium shadow-md transition">
              <ShoppingCart /> Add to Cart
            </button>
            <button className="mt-6 bg-amber-600 hover:bg-amber-700 text-white px-6 py-2.5 rounded-lg font-medium shadow-md transition">
             Buy Now
            </button>
            </div> 
          </div>
        </div>

        {/* Additional Details */}
        <div className="mt-14 grid md:grid-cols-2 gap-10">
          {/* Shipping Info */}
          <div className="bg-white rounded-xl border border-amber-100 shadow-sm p-6">
            <h2 className="text-xl font-serif text-amber-800 mb-3">
              Shipping Info
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Dispatched in a maximum of <strong>7–10 business days.</strong>{" "}
              This item is <strong>not eligible for return.</strong> Cancellation
              requests will be accepted within 24 hours of placing the order
              only. This product is made on order.
            </p>
            <p className="text-gray-600 text-xs mt-3 italic">
              (For ordering out of India, please contact us on WhatsApp.
              Shipping currently available only within India.)
            </p>
          </div>

          {/* Highlights */}
          <div className="bg-white rounded-xl border border-amber-100 shadow-sm p-6">
            <h2 className="text-xl font-serif text-amber-800 mb-3">
              Highlights
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              At <strong>Shriworks</strong>, brass idols are meticulously crafted
              by skilled artisans with a deep understanding of traditional
              techniques. Each piece is designed to embody divine craftsmanship
              and timeless heritage.
            </p>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-14 bg-white rounded-xl border border-amber-100 shadow-sm p-6">
          <h2 className="text-xl font-serif text-amber-800 mb-4">
            Write a Review
          </h2>

          <div className="flex gap-2 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-amber-500" />
            ))}
          </div>

          <textarea
            placeholder="Write your comment..."
            className="w-full border border-amber-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            rows="4"
          ></textarea>

          <button className="mt-4 bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-lg shadow-md transition">
            Submit Review
          </button>
        </div>

        {/* Customer Reviews */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold text-amber-800 mb-2">
            Customer Reviews
          </h3>
          <p className="text-gray-600 text-sm">
            No reviews yet. Be the first to review!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
