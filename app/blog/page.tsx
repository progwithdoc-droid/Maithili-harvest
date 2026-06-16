"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { ChefHat, Sparkles } from "lucide-react";
import SearchBar from "@/components/products/SearchBar";
import { filterPosts, getCategories, getPostCounts } from "@/components/blog/data";
import { BlogCard } from "@/components/blog/BlogCard";
import { RecipeCard } from "@/components/blog/RecipeCard";

type Tab = "all" | "blog" | "recipe";

const tabs: { id: Tab; label: string }[] = [
  { id: "all", label: "All" },
  { id: "blog", label: "Stories" },
  { id: "recipe", label: "Recipes" },
];

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => ["All", ...getCategories()], []);
  const counts = useMemo(() => getPostCounts(), []);

  const filtered = useMemo(
    () =>
      filterPosts({
        query: searchQuery,
        type: activeTab,
        category: activeCategory,
      }),
    [searchQuery, activeTab, activeCategory],
  );

  const showComingSoon =
    activeTab === "recipe" || activeTab === "all";

  return (
    <main className="bg-(--color-cream)">
      <section className="border-b border-(--color-beige) bg-(--color-maroon) pb-12 pt-8 sm:pb-16 sm:pt-12">
        <div className="section-container">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="brand-tag text-(--color-gold)"
          >
            Journal & Kitchen
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-editorial mt-4 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] leading-tight text-(--color-cream)"
          >
            Stories from the source, recipes from the hearth.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-lg text-base italic text-(--color-beige)"
          >
            Sourcing notes, community stories, and time-tested Mithila recipes —
            all in one place.
          </motion.p>
        </div>
      </section>

      <section className="sticky top-[var(--nav-height)] z-30 border-b border-(--color-beige) bg-(--color-cream)/95 py-4 backdrop-blur-md">
        <div className="section-container flex flex-col gap-4">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search stories, recipes, categories…"
          />

          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-widest transition-all duration-200"
                style={{
                  background:
                    activeTab === tab.id ? "var(--color-maroon)" : "transparent",
                  color:
                    activeTab === tab.id
                      ? "var(--color-cream)"
                      : "var(--color-text-secondary)",
                  border:
                    activeTab === tab.id
                      ? "1.5px solid var(--color-maroon)"
                      : "1.5px solid var(--color-beige)",
                }}
              >
                {tab.label}
                <span className="ml-1.5 opacity-70">
                  ({counts[tab.id]})
                </span>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors"
                style={{
                  padding: "7px 14px",
                  borderRadius: "2px",
                  border:
                    activeCategory === cat
                      ? "0.5px solid var(--color-warm-honey)"
                      : "0.5px solid var(--color-border-gold)",
                  background:
                    activeCategory === cat
                      ? "var(--color-warm-honey)"
                      : "transparent",
                  color:
                    activeCategory === cat
                      ? "var(--color-deep-cacao)"
                      : "var(--color-text-muted)",
                  cursor: "pointer",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="section-container">
          <p className="mb-8 text-[11px] uppercase tracking-widest text-(--color-text-muted)">
            {filtered.length} {filtered.length === 1 ? "result" : "results"}
            {searchQuery && (
              <span>
                {" "}
                for &ldquo;<span className="text-(--color-maroon)">{searchQuery}</span>&rdquo;
              </span>
            )}
          </p>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-(--color-beige) bg-white px-6 py-16 text-center">
              <p className="font-display text-xl text-(--color-maroon)">
                No posts found
              </p>
              <p className="mt-2 text-sm text-(--color-text-muted)">
                Try a different search term, category, or tab.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post, i) =>
                post.type === "recipe" ? (
                  <RecipeCard key={post.slug} post={post} index={i} />
                ) : (
                  <BlogCard key={post.slug} post={post} index={i} />
                ),
              )}
            </div>
          )}

          {showComingSoon && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 overflow-hidden rounded-2xl border border-dashed border-(--color-gold)/50 bg-linear-to-br from-(--color-beige-light)/60 to-(--color-cream) p-8 text-center sm:mt-16 sm:p-12"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-(--color-gold)/40 bg-white shadow-(--shadow-sm)">
                <ChefHat className="h-6 w-6 text-(--color-gold-dark)" />
              </div>
              <div className="mb-2 flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4 text-(--color-gold)" />
                <p className="brand-tag text-(--color-gold-dark)">Coming Soon</p>
                <Sparkles className="h-4 w-4 text-(--color-gold)" />
              </div>
              <h3 className="font-editorial text-2xl text-(--color-maroon) sm:text-3xl">
                More Recipes Coming Soon
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-(--color-text-secondary) sm:text-base">
                We&apos;re cooking up authentic Mithila recipes — from festive
                thekua to seasonal snacks. Stay tuned for new kitchen stories
                and step-by-step guides.
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-(--color-gold-dark)">
                Stay Tuned
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
