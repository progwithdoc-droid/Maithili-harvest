import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ShoppingBag, Star, Truck } from "lucide-react";

import { products } from "@/components/products/data";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "Product not found — Maithili Harvest",
    };
  }

  return {
    title: `${product.name} — Maithili Harvest`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main style={{ backgroundColor: "var(--color-linen-white)" }}>
      <section
        style={{
          backgroundColor: "var(--color-deep-cacao)",
          paddingTop: "4.5rem",
          paddingBottom: "4.5rem",
          borderBottom: "0.5px solid var(--color-rich-walnut)",
        }}
      >
        <div className="section-container">
          <Link
            href="/products"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--color-aged-gold)", textDecoration: "none", fontFamily: "var(--font-body)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase" }}
          >
            <ArrowLeft size={14} /> Back to products
          </Link>
          <div style={{ marginTop: "1.5rem", maxWidth: "760px" }}>
            <p className="brand-tag" style={{ color: "var(--color-aged-gold)", marginBottom: "1rem" }}>
              Individual Product
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(2rem, 5vw, 4rem)",
                letterSpacing: "0.04em",
                color: "var(--color-ivory-cream)",
                lineHeight: 1.1,
              }}
            >
              {product.name}
            </h1>
            <p
              style={{
                marginTop: "1rem",
                fontFamily: "var(--font-editorial)",
                fontStyle: "italic",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(196,164,106,0.8)",
                maxWidth: "54ch",
              }}
            >
              {product.description}
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "3.5rem 0 5rem" }}>
        <div className="section-container" style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", alignItems: "start" }}>
          <div className="brand-card" style={{ overflow: "hidden" }}>
            <div style={{ position: "relative", aspectRatio: "4 / 3", background: "linear-gradient(135deg, rgba(17,24,39,0.94), rgba(184,137,75,0.86))" }}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div className="brand-card" style={{ padding: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
                <div>
                  <p className="brand-tag">{product.category}</p>
                  <h2 style={{ marginTop: "0.6rem", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "1.8rem", color: "var(--color-deep-cacao)" }}>
                    {product.name}
                  </h2>
                </div>
                {product.badge && (
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--color-ivory-cream)", backgroundColor: "var(--color-spice-mahogany)", padding: "6px 12px", borderRadius: "999px" }}>
                    {product.badge}
                  </span>
                )}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "1rem", flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-editorial)", fontSize: "1.5rem", color: "var(--color-aged-gold)" }}>₹{product.price}</span>
                {product.unit && (
                  <span style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)", letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "11px" }}>
                    {product.unit}
                  </span>
                )}
              </div>

              <div style={{ display: "grid", gap: "0.75rem", marginTop: "1.25rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-text-primary)" }}>
                  <Star size={16} fill="var(--color-warm-honey)" color="var(--color-warm-honey)" />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem" }}>Zomato {product.zomatoRating}</span>
                  <span style={{ color: "var(--color-text-muted)" }}>•</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem" }}>Swiggy {product.swiggyRating}</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-text-primary)" }}>
                  <Truck size={16} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem" }}>Fresh local dispatch and premium packaging</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem", flexWrap: "wrap" }}>
                <button className="btn-primary" style={{ display: "inline-flex", alignItems: "center" }}>
                  <ShoppingBag size={14} /> Add to cart
                </button>
                <Link href="/contact" className="btn-secondary">
                  Enquire now
                </Link>
              </div>
            </div>

            <div className="brand-card" style={{ padding: "1.5rem" }}>
              <p className="brand-tag" style={{ marginBottom: "0.75rem" }}>Product Notes</p>
              <p style={{ fontFamily: "var(--font-body)", color: "var(--color-text-muted)", lineHeight: 1.8 }}>
                This page resolves directly from the product slug. It uses a local placeholder image so the route stays stable even when the original asset is missing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}