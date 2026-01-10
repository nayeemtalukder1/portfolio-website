// components/FeaturedProducts.js
"use client";

import { motion } from "framer-motion";
import {
  Star,
  ShoppingCart,
  Flame,
  Zap,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";
import { useState, useMemo } from "react";

const products = [
  {
    id: 1,
    title: "Sleek & Stylish E-commerce Website Template – Boost Your Online Sales",
    description: "Web Templates",
    price: 8,
    originalPrice: 12,
    discount: "-33%",
    rating: 4.8,
    reviews: 127,
    tags: ["Premium", "Fast"],
    isHot: true,
    category: "E-commerce",
  },
  {
    id: 2,
    title: "Creative Agency Website Template – Start Your Agency Today",
    description: "Web Templates",
    price: 5,
    originalPrice: 7.5,
    discount: "-33%",
    rating: 4.9,
    reviews: 127,
    tags: ["Premium", "Fast"],
    isHot: true,
    category: "Agency",
  },
  {
    id: 3,
    title: "Modern Doctor Website Template – For Clinics & Health Experts",
    description: "Web Templates",
    price: 20,
    originalPrice: 30,
    discount: "-33%",
    rating: 5.0,
    reviews: 127,
    tags: ["Premium", "Fast"],
    isHot: true,
    category: "Healthcare",
  },
  {
    id: 4,
    title: "Minimal Portfolio Template – Showcase Your Work",
    description: "Portfolio",
    price: 6,
    originalPrice: 10,
    discount: "-40%",
    rating: 4.7,
    reviews: 89,
    tags: ["Clean", "Minimal"],
    isHot: false,
    category: "Portfolio",
  },
  {
    id: 5,
    title: "Restaurant & Food Delivery Website",
    description: "Food & Drink",
    price: 15,
    originalPrice: 25,
    discount: "-40%",
    rating: 4.6,
    reviews: 102,
    tags: ["Premium", "Responsive"],
    isHot: true,
    category: "Food",
  },
];

export default function FeaturedProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    category: "All",
    price: "All",
    rating: "All",
    tag: "All",
  });

  const perPage = 3;

  // === FILTER LOGIC ===
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (filters.category !== "All" && p.category !== filters.category) return false;
      if (filters.price !== "All") {
        const [min, max] = filters.price.split("-").map(Number);
        if (p.price < min || (max && p.price > max)) return false;
      }
      if (filters.rating !== "All" && p.rating < Number(filters.rating)) return false;
      if (filters.tag !== "All" && !p.tags.includes(filters.tag)) return false;
      return true;
    });
  }, [filters]);

  const totalPages = Math.ceil(filteredProducts.length / perPage);
  const paginated = filteredProducts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const goPrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  const resetFilters = () => {
    setFilters({ category: "All", price: "All", rating: "All", tag: "All" });
    setCurrentPage(1);
  };

  return (
    <section className="py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-yellow-400 bg-clip-text text-transparent"
          >
            Featured Products <span className="text-yellow-400">Star</span>
          </motion.h2>

          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-sm flex items-center gap-2 shadow-lg"
            >
              <Flame className="w-4 h-4" />
              Hot
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold text-sm flex items-center gap-2 shadow-lg"
            >
              <Star className="w-4 h-4" />
              Best
            </motion.button>
          </div>
        </div>

        {/* FILTER BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10"
        >
          {/* Category */}
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400"
          >
            <option value="All">All Categories</option>
            <option>E-commerce</option>
            <option>Agency</option>
            <option>Healthcare</option>
            <option>Portfolio</option>
            <option>Food</option>
          </select>

          {/* Price */}
          <select
            value={filters.price}
            onChange={(e) => setFilters({ ...filters, price: e.target.value })}
            className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400"
          >
            <option value="All">All Prices</option>
            <option value="0-10">$0 - $10</option>
            <option value="10-20">$10 - $20</option>
            <option value="20-50">$20+</option>
          </select>

          {/* Rating */}
          <select
            value={filters.rating}
            onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
            className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400"
          >
            <option value="All">Any Rating</option>
            <option value="5">5 Stars</option>
            <option value="4">4+ Stars</option>
            <option value="3">3+ Stars</option>
          </select>

          {/* Tags */}
          <select
            value={filters.tag}
            onChange={(e) => setFilters({ ...filters, tag: e.target.value })}
            className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400"
          >
            <option value="All">All Tags</option>
            <option>Premium</option>
            <option>Fast</option>
            <option>Clean</option>
            <option>Responsive</option>
          </select>

          {/* Reset */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetFilters}
            className="px-4 py-3 bg-red-600/20 border border-red-500/50 rounded-xl text-red-400 font-bold flex items-center justify-center gap-2 hover:bg-red-600/30 transition"
          >
            <Filter className="w-4 h-4" />
            Reset
          </motion.button>
        </motion.div>

        {/* FILTER RESULTS COUNT */}
        <p className="text-white/70 mb-6">
          Found <strong>{filteredProducts.length}</strong> products
          {Object.values(filters).some((v) => v !== "All") && " (filtered)"}
        </p>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {paginated.length > 0 ? (
            paginated.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden"
              >
                {/* Discount */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                  {product.discount}
                </div>

                {/* Hot badge */}
                {product.isHot && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Flame className="w-3 h-3" />
                    HOT
                  </div>
                )}

                {/* Image placeholder */}
                <div className="bg-white/10 rounded-2xl h-48 mb-6 flex items-center justify-center overflow-hidden">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-32 h-32" />
                </div>

                {/* Content */}
                <p className="text-cyan-400 font-semibold text-sm mb-2">
                  {product.description}
                </p>
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                  {product.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-4 h-4 ${
                        idx < Math.floor(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                  <span className="text-white/70 text-sm ml-1">
                    ({product.reviews})
                  </span>
                </div>

                {/* Tags */}
                <div className="flex gap-2 mb-4">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
                        tag === "Premium"
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                          : tag === "Fast"
                          ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                          : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                      }`}
                    >
                      {tag === "Fast" && <Zap className="w-3 h-3" />}
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-black text-white">
                      ${product.price}
                    </span>
                    <span className="text-white/50 line-through ml-2">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </div>

                {/* Add to Cart */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold text-white flex items-center justify-center gap-2 shadow-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </motion.button>
              </motion.div>
            ))
          ) : (
            <p className="col-span-3 text-center text-white/70 py-10">
              No products match your filters.
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              Showing {paginated.length} of {filteredProducts.length} products
            </p>

            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goPrev}
                disabled={currentPage === 1}
                className="p-2 rounded-full bg-white/10 backdrop-blur-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>

              {[...Array(totalPages)].map((_, i) => (
                <motion.button
                  key={i + 1}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-full font-bold transition-all ${
                    currentPage === i + 1
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                      : "bg-white/10 text-white/70"
                  }`}
                >
                  {i + 1}
                </motion.button>
              ))}

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goNext}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full bg-white/10 backdrop-blur-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>

            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span>Quick:</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                <div className="w-3 h-3 rounded-full bg-white/30"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}