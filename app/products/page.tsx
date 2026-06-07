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
    <main style={{ backgroundColor: "var(--color-white-soft)" }}>
      <section
        style={{
          backgroundColor: "var(--color-obsidian)",
          paddingTop: "5rem",
          paddingBottom: "5rem",
          borderBottom: "1px solid rgba(201,169,110,0.14)",
        }}
      >
        <div className="section-container">
          <p
            className="brand-tag"
            style={{ color: "var(--color-champagne)", marginBottom: "1.25rem" }}
          >
            Our Products
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "0.05em",
              color: "var(--color-white-pure)",
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
              color: "rgba(201,169,110,0.7)",
              marginTop: "1.25rem",
              maxWidth: "480px",
            }}
          >
            Every item is traceable, FSSAI-registered, and sourced with
            intention from Bihar&apos;s farming communities.
          </p>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "var(--color-white-soft)",
          borderBottom: "1px solid var(--color-border-gold)",
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
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search by name, category or taste…"
            />
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
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
              </p>
            </div>
          </div>
        </div>
      </section>

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
