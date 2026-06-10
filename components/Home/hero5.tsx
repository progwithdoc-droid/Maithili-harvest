"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { VideoBackground } from "./VideoBackground";
import { customerReviews, heroBackgroundVideo } from "./data";

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="mb-4 flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5"
          fill={i < rating ? "var(--color-gold)" : "transparent"}
          stroke={i < rating ? "var(--color-gold)" : "var(--color-beige)"}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof customerReviews)[0] }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="rounded-[20px] border border-[var(--color-beige)] bg-white/92 p-6 shadow-[var(--shadow-sm)] backdrop-blur-md"
    >
      <StarRow rating={review.rating} />
      <p className="mb-6 text-sm leading-relaxed text-[var(--color-text-secondary)]">
        &ldquo;{review.review}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <AnimatedTooltip
          variant="inline"
          items={[
            {
              id: review.id,
              name: review.initials,
              designation: review.location,
              product: review.product,
            },
          ]}
        />
        <div>
          <p className="font-display text-sm font-semibold text-[var(--color-maroon)]">
            {review.name}
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            {review.location}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero5() {
  return (
    <section className="section-gap relative overflow-hidden">
      <VideoBackground
        src={heroBackgroundVideo}
        overlayClassName="bg-gradient-to-b from-[var(--color-cream)]/88 via-[var(--color-beige-light)]/80 to-[var(--color-cream)]/90"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="brand-tag">Reviews</span>
          <h2 className="font-editorial mt-3 text-[clamp(2rem,4vw,3rem)] text-[var(--color-maroon)]">
            Voices from the table.
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            Hover each card to discover which product they love.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {customerReviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col items-center gap-6 text-center"
        >
          <p className="font-editorial max-w-md px-2 text-lg italic text-[var(--color-text-secondary)] sm:text-xl">
            Taste the difference that honest sourcing makes — from our farms to
            your table.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/products" className="btn-gold">
              Shop All Products →
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
