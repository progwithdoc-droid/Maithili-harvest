"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "./types";

export function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block no-underline">
        <div className="brand-card overflow-hidden">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <span className="brand-badge--gold absolute left-4 top-4">
              {post.type === "recipe" ? "Recipe" : post.category}
            </span>
          </div>
          <div className="p-5">
            <div className="mb-3 flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
              <span>{post.date}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>
            <h3 className="font-display text-lg font-semibold leading-snug text-[var(--color-maroon)] transition-colors group-hover:text-[var(--color-gold-dark)]">
              {post.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {post.excerpt}
            </p>
            <span className="mt-4 flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[var(--color-gold-dark)]">
              Read More <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
