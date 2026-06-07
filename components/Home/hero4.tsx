"use client";

import { motion } from "motion/react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { kitchenTestimonials } from "./data";

const stats = [
  { value: "2,400+", label: "Happy customers" },
  { value: "4.9★", label: "Average rating" },
  { value: "40+", label: "Artisan products" },
];

export default function Hero4() {
  return (
    <section className="section-gap bg-[var(--color-off-white)]">
      <div className="section-container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="brand-tag">Testimonials</span>
          <h2 className="font-editorial mt-3 mb-6 text-[clamp(2rem,4vw,2.75rem)] text-[var(--color-ink)]">
            Trusted in every kitchen.
          </h2>
          <AnimatedTestimonials testimonials={kitchenTestimonials} autoplay />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 grid grid-cols-3 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="brand-card border-[var(--color-border)] text-center shadow-none">
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <span className="font-display text-2xl font-bold text-[var(--color-blue)] md:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs text-[var(--color-text-muted)]">
                    {stat.label}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
