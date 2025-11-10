import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import api from "../Utilis/api";
import { useNavigate } from "react-router-dom";

const Collection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products?populate=ProductImage");
        const productData = res.data.data || [];
        const limitedProducts = productData.slice(0, 6);

        const mappedProducts = limitedProducts.map((p) => ({
          id: p.id,
          name: p.ProductName || "Unnamed Product",
          desc:
            p.Description?.slice(0, 90) ||
            "Sacred creation inspired by divine craftsmanship.",
          image1:
            p?.ProductImage?.[0]?.url ||
            "https://via.placeholder.com/400x400?text=No+Image",
          image2:
            p?.ProductImage?.[1]?.url ||
            p?.ProductImage?.[0]?.url ||
            "https://via.placeholder.com/400x400?text=No+Image",
        }));

        setProducts(mappedProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="text-center py-20 text-gray-600 text-lg">
        Loading Divine Creations...
      </div>
    );

  return (
    <section className="relative py-20 overflow-hidden bg-[#fffdf7]">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif text-[#3c2e12] tracking-wide">
          The Sacred <span className="text-amber-700">Collection</span>
        </h2>
        <p className="text-[#6e5731] mt-3 italic text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Handcrafted with devotion — where every product carries divine energy.
        </p>
        <div className="mt-4 w-24 h-[2px] bg-amber-700 mx-auto"></div>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {products.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => navigate(`/product/${item.id}`)}
            className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-lg border border-amber-200 hover:border-amber-600 bg-white transition-all duration-500 cursor-pointer"
          >
            {/* Image Section */}
            <div className="relative w-full h-64 overflow-hidden">
              <motion.img
                src={item.image1}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
              />
              <motion.img
                src={item.image2}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-50 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>

            {/* Hover Text Center Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700">
              <div className="bg-gradient-to-r from-[#fff8e6]/90 to-[#fffaf0]/90 backdrop-blur-sm px-6 py-5 rounded-2xl shadow-md border border-amber-300 text-center mx-6 sm:mx-10">
                <h3 className="text-xl font-serif text-[#3c2e12] font-semibold tracking-wide mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-[#6e5731] leading-relaxed italic">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
