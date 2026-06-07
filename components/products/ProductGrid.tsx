import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Product } from "./types";

interface ProductGridProps {
  /** Filtered products array to render */
  products: Product[];
  /** Current search query — shown in empty state message */
  searchQuery?: string;
  /** Current active category — shown in empty state message */
  activeCategory?: string;
}

/**
 * Renders a responsive grid of ProductCard items.
 * Shows an empty state when no products match the current filters.
 */
export default function ProductGrid({
  products,
  searchQuery = "",
  activeCategory = "All",
}: ProductGridProps) {
  /* ── Empty state ── */
  if (products.length === 0) {
    return (
      <div
        style={{
          padding: "5rem 2rem",
          textAlign: "center",
          border: "0.5px solid var(--color-border-gold)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "1.4rem",
            letterSpacing: "0.04em",
            color: "var(--color-deep-cacao)",
            lineHeight: 1.3,
            marginBottom: "0.75rem",
          }}
        >
          No Products Found
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "0.875rem",
            letterSpacing: "0.05em",
            lineHeight: 1.8,
            color: "var(--color-text-muted)",
          }}
        >
          {searchQuery && activeCategory !== "All"
            ? `No "${searchQuery}" results in "${activeCategory}".`
            : searchQuery
            ? `No products matching "${searchQuery}".`
            : `No products in "${activeCategory}".`}
          <br />
          Try a different search term or category.
        </p>
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      style={{ gap: "1px", border: "0.5px solid var(--color-border-gold)" }}
    >
      {products.map((product) => (
        <ProductCardInline key={product.id} product={product} />
      ))}
    </div>
  );
}

/* ── Inline card — keeps ProductGrid self-contained ── */
function ProductCardInline({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      style={{ textDecoration: "none", display: "block" }}
    >
      <div
        style={{
          backgroundColor: "var(--color-linen-white)",
          borderRight: "0.5px solid var(--color-border-gold)",
          borderBottom: "0.5px solid var(--color-border-gold)",
          padding: "0",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          transition: "background-color 0.2s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.backgroundColor =
            "var(--color-ivory-cream)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.backgroundColor =
            "var(--color-linen-white)";
        }}
      >
        {/* Product image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "4/3",
            overflow: "hidden",
            borderBottom: "0.5px solid var(--color-border-gold)",
          }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            style={{ objectFit: "cover" }}
          />

          {/* Badge */}
          {product.badge && (
            <span
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "9px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--color-ivory-cream)",
                backgroundColor: "var(--color-spice-mahogany)",
                padding: "4px 10px",
                borderRadius: "2px",
              }}
            >
              {product.badge}
            </span>
          )}
        </div>

        {/* Card body */}
        <div
          style={{
            padding: "1.25rem 1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            flex: 1,
          }}
        >
          {/* Category tag */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              fontSize: "9px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--color-aged-gold)",
            }}
          >
            {product.category}
          </p>

          {/* Name */}
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "1rem",
              letterSpacing: "0.03em",
              color: "var(--color-deep-cacao)",
              lineHeight: 1.3,
            }}
          >
            {product.name}
          </h3>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "0.8rem",
              letterSpacing: "0.04em",
              lineHeight: 1.75,
              color: "var(--color-text-muted)",
              flex: 1,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {product.description}
          </p>
        </div>

        {/* Price + rating footer */}
        <div
          style={{
            padding: "0.9rem 1.25rem",
            borderTop: "0.5px solid var(--color-border-gold)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.5rem",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-editorial)",
                fontWeight: 500,
                fontSize: "1.1rem",
                letterSpacing: "0.02em",
                color: "var(--color-aged-gold)",
              }}
            >
              ₹{product.price}
            </span>
            {product.unit && (
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "10px",
                  letterSpacing: "0.06em",
                  color: "var(--color-text-muted)",
                  marginLeft: "5px",
                }}
              >
                / {product.unit}
              </span>
            )}
          </div>

          {/* Zomato rating */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Star
              size={11}
              fill="var(--color-warm-honey)"
              color="var(--color-warm-honey)"
            />
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: "11px",
                letterSpacing: "0.04em",
                color: "var(--color-text-muted)",
              }}
            >
              {product.zomatoRating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
