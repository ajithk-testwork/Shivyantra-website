import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, X, SlidersHorizontal } from "lucide-react";
import api from "../Utilis/api";
import image from "../assets/About.webp";
import { motion, AnimatePresence } from "framer-motion";

const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [sortOption, setSortOption] = useState("default");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get("category");
  const subcategoryParam = queryParams.get("subcategory");

  // 🟤 Fetch categories and products
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(
          "/categories?populate[products][populate]=ProductImage&populate[subcategories][populate][products][populate]=ProductImage"
        );

        const categoriesData = data.data || [];
        setCategories(categoriesData);

        let filteredProducts = [];

        // Subcategory selected
        if (subcategoryParam) {
          const foundCategory = categoriesData.find((cat) =>
            cat.subcategories?.some(
              (sub) =>
                sub.text?.toLowerCase() === subcategoryParam.toLowerCase()
            )
          );
          if (foundCategory) {
            const sub = foundCategory.subcategories.find(
              (s) =>
                s.text?.toLowerCase() === subcategoryParam.toLowerCase()
            );
            setSelectedCategory(foundCategory);
            setSelectedSubcategory(sub);
            filteredProducts =
              sub?.products?.map((p) => ({
                id: p.id,
                name: p.ProductName,
                price: parseFloat(p.Price) || 0,
                image:
                  p?.ProductImage?.[0]?.url ||
                  "https://via.placeholder.com/300x300?text=No+Image",
              })) || [];
          }
        }
        // Category selected
        else if (categoryParam) {
          const foundCategory = categoriesData.find(
            (cat) => cat.Name?.toLowerCase() === categoryParam.toLowerCase()
          );
          if (foundCategory) {
            setSelectedCategory(foundCategory);
            setSelectedSubcategory(null);
            filteredProducts =
              foundCategory.products?.map((p) => ({
                id: p.id,
                name: p.ProductName,
                price: parseFloat(p.Price) || 0,
                image:
                  p?.ProductImage?.[0]?.url ||
                  "https://via.placeholder.com/300x300?text=No+Image",
              })) || [];
          }
        }
        // All products
        else {
          filteredProducts = categoriesData.flatMap(
            (cat) =>
              cat.products?.map((p) => ({
                id: p.id,
                name: p.ProductName,
                price: parseFloat(p.Price) || 0,
                image:
                  p?.ProductImage?.[0]?.url ||
                  "https://via.placeholder.com/300x300?text=No+Image",
              })) || []
          );
        }

        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [categoryParam, subcategoryParam]);

  // 🟠 Sort + Filter
  const filteredAndSortedProducts = products
    .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
    .sort((a, b) => {
      if (sortOption === "price_low_high") return a.price - b.price;
      if (sortOption === "price_high_low") return b.price - a.price;
      if (sortOption === "name_asc") return a.name.localeCompare(b.name);
      return 0;
    });

  if (loading)
    return (
      <div className="text-center py-20 text-lg text-gray-600">
        Loading Divine Products...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fffaf3] to-[#fdf5e6]">
      {/* 🟡 Hero Banner */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={image}
          alt="Divine Collection"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
          <h1 className="text-4xl font-serif tracking-wide drop-shadow-lg">
            {selectedSubcategory?.text ||
              selectedCategory?.Name ||
              "Divine Collection"}
          </h1>
          <p className="italic text-lg mt-2 opacity-90">
            Explore sacred beauty and divine energy
          </p>
          <div className="w-24 h-[2px] bg-amber-400 mt-3"></div>
        </div>
      </div>

      {/* 🧱 Main Layout */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row py-14 px-6 gap-10">
        {/* Sidebar */}
        <aside className="lg:w-1/4 bg-white rounded-2xl shadow-md border border-amber-100 p-6 h-fit">
          {/* 🔙 Back to Home */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 cursor-pointer text-amber-700 hover:text-amber-800 mb-5 font-medium transition-all duration-300"
          >
            <span className="text-lg">←</span>
            <span className="text-sm tracking-wide">Back to Home</span>
          </button>

          <h3 className="text-xl font-semibold text-amber-800 mb-4 border-b pb-2 flex items-center gap-2">
            <SlidersHorizontal className="text-amber-600" />
            Filters
          </h3>

          {/* Price Range */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">Price Range</h4>
            <div className="flex items-center gap-3">
              <input
                type="number"
                value={priceRange[0]}
                min="0"
                max="10000"
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                className="w-20 border border-gray-200 rounded-md px-2 py-1 text-sm"
              />
              <span className="text-gray-500">to</span>
              <input
                type="number"
                value={priceRange[1]}
                min="0"
                max="10000"
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                className="w-20 border cursor-pointer border-gray-200 rounded-md px-2 py-1 text-sm"
              />
            </div>
            <input
              type="range"
              min="0"
              max="10000"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              className="w-full mt-3 cursor-pointer accent-amber-600"
            />
            <p className="text-sm cursor-pointer text-gray-600 mt-1">
              ₹{priceRange[0]} - ₹{priceRange[1]}
            </p>
          </div>

          {/* Categories */}
          <h4 className="font-semibold text-gray-800 mb-2 border-b pb-2">
            Categories
          </h4>
          <ul className="space-y-2">
            {categories.map((cat) => {
              const catName = cat.Name;
              const isExpanded = expandedCategory === cat.id;
              const isSelected = selectedCategory?.id === cat.id;
              const hasSubs = cat.subcategories?.length > 0;

              return (
                <li key={cat.id} className="border-b border-amber-50 pb-2">
                  <div className="flex items-center justify-between px-4 py-2 rounded-lg text-gray-700 hover:bg-amber-50 transition">
                    <span
                      onClick={() =>
                        navigate(`/shop?category=${encodeURIComponent(catName)}`)
                      }
                      className={`flex-1 cursor-pointer ${
                        isSelected
                          ? "font-semibold text-amber-800 border-l-4 border-amber-600 pl-2"
                          : ""
                      }`}
                    >
                      {catName}
                    </span>
                    <div className="flex items-center gap-2">
                      {hasSubs &&
                        (isExpanded ? (
                          <ChevronUp
                            size={18}
                            className="text-amber-700 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedCategory(null);
                            }}
                          />
                        ) : (
                          <ChevronDown
                            size={18}
                            className="text-amber-700 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedCategory(cat.id);
                            }}
                          />
                        ))}

                      {isSelected && (
                        <X
                          size={16}
                          className="text-amber-700 hover:text-red-600 cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedCategory(null);
                            setSelectedSubcategory(null);
                            navigate("/shop");
                          }}
                        />
                      )}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && hasSubs && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-6 mt-2 space-y-2"
                      >
                        {cat.subcategories.map((sub) => (
                          <li
                            key={sub.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(
                                `/shop?subcategory=${encodeURIComponent(
                                  sub.text
                                )}`
                              );
                            }}
                            className="px-3 py-2 text-sm rounded-md text-gray-600 hover:bg-amber-50 hover:text-amber-800 cursor-pointer transition"
                          >
                            {sub.text}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* 🟣 Product Grid */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <div className="flex items-center justify-between border border-amber-200 rounded-xl px-6 py-3 shadow-sm">
              <h2 className="text-2xl font-serif px-2.5 text-amber-900 tracking-wide">
                {selectedSubcategory?.text ||
                  selectedCategory?.Name ||
                  "All Products"}
              </h2>

              {(selectedCategory || selectedSubcategory) && (
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedSubcategory(null);
                    navigate("/shop");
                  }}
                  className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-lg shadow transition"
                >
                  <X size={16} className="cursor-pointer" />
                </button>
              )}
            </div>
          </div>

          {/* Product Cards */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredAndSortedProducts.length > 0 ? (
              filteredAndSortedProducts.map((prod, index) => (
                <motion.div
                  layout
                  key={prod.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group bg-white rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden"
                >
                  <div className="relative w-full h-64 overflow-hidden bg-amber-50">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-contain transform group-hover:scale-105 transition duration-700 ease-in-out"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-amber-800 transition">
                      {prod.name}
                    </h3>
                    <p className="text-xl font-bold text-amber-700 mb-4">
                      ₹{prod.price}
                    </p>
                    <button
                      onClick={() => navigate(`/product/${prod.id}`)}
                      className="w-full cursor-pointer bg-gradient-to-r  from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-medium py-2.5 rounded-lg shadow-sm hover:shadow-md transition"
                    >
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                No products found in this price range.
              </p>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Shop;
