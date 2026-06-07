"use client";

import { Search, X } from "lucide-react";

interface SearchBarProps {
  /** Current search query value */
  value: string;
  /** Called on every keystroke — triggers real-time filtering */
  onChange: (query: string) => void;
  placeholder?: string;
}

/**
 * Reusable SearchBar component.
 * Filters by name, category, or taste depending on parent logic.
 * Includes a clear button when input is non-empty.
 */
export default function SearchBar({
  value,
  onChange,
  placeholder = "Search by name, category or taste…",
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      {/* Search icon */}
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <Search
          size={16}
          style={{ color: "var(--color-text-muted)" }}
          aria-hidden="true"
        />
      </div>

      {/* Input */}
      <input
        type="search"
        id="product-search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="off"
        spellCheck={false}
        style={{
          width: "100%",
          paddingTop: "14px",
          paddingBottom: "14px",
          paddingLeft: "2.75rem",
          paddingRight: value ? "3rem" : "1rem",
          fontFamily: "var(--font-body)",
          fontWeight: 300,
          fontSize: "0.9rem",
          letterSpacing: "0.04em",
          color: "var(--color-text-primary)",
          backgroundColor: "var(--color-linen-white)",
          border: "0.5px solid var(--color-border-gold)",
          borderRadius: 0,
          outline: "none",
          transition: "border-color 0.2s ease",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = "var(--color-warm-honey)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = "var(--color-border-gold)";
        }}
      />

      {/* Clear button — only visible when there's input */}
      {value && (
        <button
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute inset-y-0 right-0 flex items-center pr-4"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--color-text-muted)",
            transition: "color 0.2s ease",
          }}
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
