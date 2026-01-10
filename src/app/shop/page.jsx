// app/shop/page.js
"use client";

import ShopNavbar from "../components/ShopNavbar";
import FeaturedProducts from "../components/FeaturedProducts";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <ShopNavbar />
      <FeaturedProducts />
    </div>
  );
}