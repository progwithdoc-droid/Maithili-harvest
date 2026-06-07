"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ChefHat, Clock, Users } from "lucide-react";
import type { BlogPost } from "./types";

export function RecipeCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block no-underline">
        <div className="brand-card overflow-hidden border-[var(--color-gold)]/20">
          <div className="relative h-52 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-maroon)]/60 to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <ChefHat className="h-4 w-4 text-[var(--color-gold)]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-cream)]">
                Recipe
              </span>
            </div>
          </div>
          <div className="bg-[var(--color-cream)] p-5">
            <h3 className="font-editorial text-xl text-[var(--color-maroon)] transition-colors group-hover:text-[var(--color-gold-dark)]">
              {post.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-[var(--color-text-secondary)]">
              {post.excerpt}
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-[var(--color-text-muted)]">
              {post.prepTime && (
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-[var(--color-gold)]" />
                  Prep {post.prepTime}
                </span>
              )}
              {post.cookTime && (
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-[var(--color-gold)]" />
                  Cook {post.cookTime}
                </span>
              )}
              {post.servings && (
                <span className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5 text-[var(--color-gold)]" />
                  {post.servings}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
