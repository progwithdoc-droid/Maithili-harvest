"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { blogPosts, getPostsByType } from "@/components/blog/data";
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

  const filtered =
    activeTab === "all"
      ? blogPosts
      : getPostsByType(activeTab);

  return (
    <main className="bg-[var(--color-cream)]">
      {/* Hero */}
      <section className="border-b border-[var(--color-beige)] bg-[var(--color-maroon)] pb-16 pt-12">
        <div className="section-container">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="brand-tag text-[var(--color-gold)]"
          >
            Journal & Kitchen
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-editorial mt-4 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] leading-tight text-[var(--color-cream)]"
          >
            Stories from the source, recipes from the hearth.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-lg text-base italic text-[var(--color-beige)]"
          >
            Sourcing notes, community stories, and time-tested Mithila recipes —
            all in one place.
          </motion.p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="sticky top-[72px] z-30 border-b border-[var(--color-beige)] bg-[var(--color-cream)]/95 py-4 backdrop-blur-md">
        <div className="section-container flex gap-2">
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
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16">
        <div className="section-container">
          {filtered.length === 0 ? (
            <p className="text-center text-[var(--color-text-muted)]">
              No posts found.
            </p>
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
        </div>
      </section>
    </main>
  );
}
