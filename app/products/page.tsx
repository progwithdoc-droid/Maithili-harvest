"use client";

import { useState, useMemo } from "react";
import SearchBar from "@/components/products/SearchBar";
import CategoryFilter from "@/components/products/CategoryFilter";
import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/components/products/data";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo<string[]>(() => {
    const seen = new Set<string>();
    return products
      .map((p) => p.category)
      .filter((cat) => {
        if (seen.has(cat)) return false;
        seen.add(cat);
        return true;
      });
  }, []);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return products.filter((product) => {
      const categoryMatch =
        activeCategory === "All" || product.category === activeCategory;

      if (!categoryMatch) return false;
      if (!query) return true;

      return (
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.taste.toLowerCase().includes(query)
      );
    });
  }, [searchQuery, activeCategory]);

  return (
    <main className="bg-[var(--color-cream)]">
      <section className="border-b border-[var(--color-beige)] bg-[var(--color-maroon)] pb-16 pt-12">
        <div className="section-container">
          <p className="brand-tag mb-4 text-[var(--color-gold)]">Our Products</p>
          <h1 className="font-editorial max-w-xl text-[clamp(2rem,5vw,3.5rem)] leading-tight text-[var(--color-cream)]">
            The pantry of Mithila, curated for you.
          </h1>
          <p className="mt-4 max-w-md text-base italic text-[var(--color-beige)]">
            Every item is traceable, FSSAI-registered, and sourced with
            intention from Bihar&apos;s farming communities.
          </p>
        </div>
      </section>

      <section className="sticky top-[72px] z-30 border-b border-[var(--color-beige)] bg-[var(--color-cream)]/95 py-6 backdrop-blur-md">
        <div className="section-container flex flex-col gap-4">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search by name, category or taste…"
          />
          <div className="flex flex-wrap items-center justify-between gap-4">
            <CategoryFilter
              categories={categories}
              active={activeCategory}
              onChange={setActiveCategory}
            />
            <p className="whitespace-nowrap text-[11px] uppercase tracking-widest text-[var(--color-text-muted)]">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="section-container">
          <ProductGrid
            products={filteredProducts}
            searchQuery={searchQuery}
            activeCategory={activeCategory}
          />
        </div>
      </section>
    </main>
  );
}
