import React, { useState, useEffect } from "react";
import { ChevronDown, ArrowLeft, Star, Search, Heart } from "lucide-react";
import { motion } from "framer-motion";
import image from "../assets/About.webp";

const Shop = () => {
  const [selectedSort, setSelectedSort] = useState("Default");
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState(new Set());
  const [isScrolled, setIsScrolled] = useState(false);

  const sortOptions = [
    "Default",
    "Price: Low to High",
    "Price: High to Low",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Latest",
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sampleProducts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    name: `Sacred Rudraksha Mala ${i + 1}`,
    description: "Handcrafted with divine energy and traditional wisdom.",
    image: `https://images.unsplash.com/photo-1594736797933-d0401ba94693?w=400&h=400&fit=crop&auto=format`,
    price: `₹${(i + 1) * 499 + 99}`,
    rating: (4 + Math.random()).toFixed(1),
    isNew: i % 4 === 0,
  }));

  const toggleFavorite = (productId) => {
    setFavorites((prev) => {
      const newFavs = new Set(prev);
      newFavs.has(productId) ? newFavs.delete(productId) : newFavs.add(productId);
      return newFavs;
    });
  };

  const filterSections = [
    {
      title: "CATEGORY",
      items: ["Rudraksha Mala", "Gemstones", "Bracelets", "Yantras", "Incense", "Meditation Tools"],
    },
    {
      title: "PRICE RANGE",
      items: ["Under ₹500", "₹500 – ₹2000", "₹2000 – ₹5000", "₹5000 – ₹10000", "Above ₹10000"],
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Header */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-amber-800 hover:text-amber-900"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-serif font-semibold text-lg">Back</span>
          </button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center bg-white border border-amber-200 rounded-full px-4 py-2"
          >
            <Search className="w-4 h-4 text-amber-600 mr-2" />
            <input
              type="text"
              placeholder="Search sacred items..."
              className="bg-transparent outline-none text-sm text-amber-900"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-amber-800"
          >
            {favorites.size} ❤️ Loved
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        className="h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${image})` }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-black/50 p-8 rounded-xl text-center"
        >
          <h1 className="text-white font-serif text-4xl md:text-5xl font-bold mb-2">
            Divine Collection
          </h1>
          <p className="text-white/80 text-lg">
            Explore sacred items that inspire peace and positivity
          </p>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-10">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-72 bg-white border border-amber-200 rounded-2xl shadow-sm p-6 h-fit"
        >
          <h2 className="font-serif text-xl text-amber-900 mb-6">Filters</h2>
          {filterSections.map((section) => (
            <div key={section.title} className="mb-8">
              <h3 className="text-sm font-semibold text-amber-800 mb-3 border-b border-amber-200 pb-1">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center text-sm text-amber-800">
                    <input type="checkbox" className="w-4 h-4 text-amber-600 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-amber-600 text-white font-semibold py-2 rounded-lg hover:bg-amber-700 transition"
          >
            Apply Filters
          </motion.button>
        </motion.aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl text-amber-900 font-bold">Divine Collection</h2>
              <p className="text-sm text-amber-700/70">
                {sampleProducts.length} sacred items available
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center bg-white border border-amber-200 rounded-lg px-4 py-2 shadow-sm"
            >
              <span className="text-sm text-amber-700 mr-2">Sort by:</span>
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="bg-transparent outline-none text-amber-900 cursor-pointer font-medium"
              >
                {sortOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              
            </motion.div>
          </div>

          {/* Animated Product Cards */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {sampleProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl border border-amber-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-md font-semibold">
                      New
                    </span>
                  )}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-3 right-3 bg-white/80 p-2 rounded-full shadow-sm hover:shadow-md"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        favorites.has(product.id)
                          ? "text-red-500 fill-red-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-amber-900 text-sm mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-amber-700/70 mb-2 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-yellow-500 text-sm">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      {product.rating}
                    </div>
                    <p className="text-amber-800 font-bold">{product.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center py-12 text-amber-800/80 italic"
          >
            “May these sacred items bring peace, prosperity, and light to your path.”
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
