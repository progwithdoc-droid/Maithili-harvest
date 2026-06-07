"use client";

interface CategoryFilterProps {
  /** Full list of unique category strings, derived from products data */
  categories: string[];
  /** Currently active category; "All" means no category filter */
  active: string;
  /** Called when the user clicks a category pill */
  onChange: (category: string) => void;
}

/**
 * Reusable CategoryFilter component.
 * Renders an "All" pill followed by one pill per unique category.
 * Works alongside SearchBar — both filters are ANDed in the parent.
 */
export default function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  const all = ["All", ...categories];

  return (
    <div
      role="group"
      aria-label="Filter by category"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
      }}
    >
      {all.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            aria-pressed={isActive}
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              padding: "8px 18px",
              border: isActive
                ? "0.5px solid var(--color-warm-honey)"
                : "0.5px solid var(--color-border-gold)",
              borderRadius: "2px",
              backgroundColor: isActive
                ? "var(--color-warm-honey)"
                : "transparent",
              color: isActive
                ? "var(--color-deep-cacao)"
                : "var(--color-text-muted)",
              cursor: "pointer",
              transition: "background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease",
              whiteSpace: "nowrap",
            }}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
