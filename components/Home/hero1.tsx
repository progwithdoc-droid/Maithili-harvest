"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { VideoBackground } from "./VideoBackground";
import { heroVideos, heroDemoVideo } from "./data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function getYouTubeEmbedUrl(url: string): string | null {
  if (!url.trim()) return null;

  const patterns = [
    /(?:youtube\.com\/watch\?v=)([\w-]{11})/,
    /(?:youtu\.be\/)([\w-]{11})/,
    /(?:youtube\.com\/embed\/)([\w-]{11})/,
    /(?:youtube\.com\/shorts\/)([\w-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) {
      return `https://www.youtube.com/embed/${match[1]}?rel=0&modestbranding=1`;
    }
  }

  return null;
}

export default function Hero1() {
  const embedUrl = getYouTubeEmbedUrl(heroDemoVideo.url);

  return (
    <section className="relative min-h-[calc(100dvh-72px)] overflow-hidden">
      <VideoBackground
        src={heroVideos.hero1}
        overlayClassName="bg-gradient-to-r from-[var(--color-maroon)]/88 via-[var(--color-maroon)]/72 to-[var(--color-maroon)]/55"
      />

      <div className="section-container relative z-10 grid min-h-[calc(100dvh-72px)] items-center gap-10 py-16 lg:grid-cols-2 lg:gap-14 lg:py-24">
        <div className="max-w-xl">
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="brand-tag text-[var(--color-gold)]"
          >
            Artisan Food · Mithila, Bihar
          </motion.span>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-editorial mt-5 text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.08] text-[var(--color-cream)]"
          >
            From the heart of{" "}
            <span className="italic text-[var(--color-gold-light)]">Mithila</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-5 max-w-md text-base leading-relaxed text-[var(--color-beige)]"
          >
            Stone-ground spices, cold-pressed oils, and heirloom grains — curated
            directly from the farms of Bihar.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link href="/products" className="btn-gold">
              Explore Products
            </Link>
            <Link
              href="/about"
              className="btn-secondary border-[var(--color-gold)]/50 text-[var(--color-cream)] hover:border-[var(--color-gold)] hover:bg-white/10"
            >
              Our Story
            </Link>
          </motion.div>
        </div>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="w-full lg:justify-self-end"
        >
          <div className="overflow-hidden rounded-2xl border-2 border-[var(--color-gold)]/45 bg-[var(--color-maroon-dark)]/40 shadow-[var(--shadow-lg)] backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <p className="brand-tag text-[var(--color-gold)]">Brand Demo</p>
              <span className="text-[10px] uppercase tracking-[0.14em] text-[var(--color-beige)]/70">
                Watch now
              </span>
            </div>

            <div className="relative aspect-video w-full bg-black/30">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title={heroDemoVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-gold)]/50 bg-[var(--color-maroon)]/60 text-[var(--color-gold)]">
                    <Play size={22} fill="currentColor" />
                  </div>
                  <p className="font-display text-lg text-[var(--color-cream)]">
                    {heroDemoVideo.title}
                  </p>
                  <p className="max-w-xs text-sm leading-relaxed text-[var(--color-beige)]/80">
                    Add your YouTube link in{" "}
                    <code className="text-[var(--color-gold-light)]">components/Home/data.ts</code>{" "}
                    under <code className="text-[var(--color-gold-light)]">heroDemoVideo.url</code>
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
