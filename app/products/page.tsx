"use client";

import { useState, useMemo } from "react";
import SearchBar from "@/components/products/SearchBar";
import CategoryFilter from "@/components/products/CategoryFilter";
import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/components/products/data";

/**
 * Products page — orchestrates search + category filtering.
 *
 * Filtering logic (ANDed):
 *  1. If a category is active (not "All"), keep only products in that category.
 *  2. If search query is non-empty, further filter by:
 *     - product.name  (case-insensitive)
 *     - product.category (case-insensitive)
 *     - product.taste (case-insensitive)
 *
 * useMemo ensures this runs only when search or category changes,
 * not on every render.
 */
export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  /* ── Derive unique categories from data (preserves insertion order) ── */
  const categories = useMemo<string[]>(() => {
    const seen = new Set<string>();
    return products
      .map((p) => p.category)
      .filter((cat) => {
        if (seen.has(cat)) return false;
        seen.add(cat);
        return true;
      });
  }, []); // products array is static — runs once

  /* ── Combined filter ── */
  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return products.filter((product) => {
      // Step 1 — category gate
      const categoryMatch =
        activeCategory === "All" || product.category === activeCategory;

      if (!categoryMatch) return false;

      // Step 2 — search gate (only runs if there's a query)
      if (!query) return true;

      return (
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.taste.toLowerCase().includes(query)
      );
    });
  }, [searchQuery, activeCategory]);

  const resultCount = filteredProducts.length;

  return (
    <main style={{ backgroundColor: "var(--color-linen-white)" }}>

      {/* ── Page header ── */}
      <section
        style={{
          backgroundColor: "var(--color-deep-cacao)",
          paddingTop: "5rem",
          paddingBottom: "5rem",
          borderBottom: "0.5px solid var(--color-rich-walnut)",
        }}
      >
        <div className="section-container">
          <p
            className="brand-tag"
            style={{ color: "var(--color-aged-gold)", marginBottom: "1.25rem" }}
          >
            Our Products
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "0.05em",
              color: "var(--color-ivory-cream)",
              lineHeight: 1.2,
              maxWidth: "560px",
            }}
          >
            The pantry of Mithila, curated for you.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-editorial)",
              fontWeight: 300,
              fontSize: "1.05rem",
              fontStyle: "italic",
              letterSpacing: "0.03em",
              lineHeight: 1.8,
              color: "rgba(196,164,106,0.7)",
              marginTop: "1.25rem",
              maxWidth: "480px",
            }}
          >
            Every item is traceable, FSSAI-registered, and sourced with
            intention from Bihar's farming communities.
          </p>
        </div>
      </section>

      {/* ── Search & Filter Bar ── */}
      <section
        style={{
          backgroundColor: "var(--color-linen-white)",
          borderBottom: "0.5px solid var(--color-border-gold)",
          padding: "2rem 0",
          position: "sticky",
          top: "72px",
          zIndex: 30,
        }}
      >
        <div className="section-container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {/* Search input */}
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search by name, category or taste…"
            />

            {/* Category pills */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <CategoryFilter
                categories={categories}
                active={activeCategory}
                onChange={setActiveCategory}
              />

              {/* Result count */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-text-muted)",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {resultCount} {resultCount === 1 ? "product" : "products"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Grid ── */}
      <section style={{ paddingTop: "3rem", paddingBottom: "6rem" }}>
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
