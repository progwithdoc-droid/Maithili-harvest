"use client";

import { useState } from "react";
import Image from "next/image";

type VideoBackgroundProps = {
  /** Prefer local path e.g. /videos/hero1.mp4 */
  src: string;
  /** Remote or alternate URL if local file is missing */
  fallbackSrc?: string;
  /** Shown if all video sources fail */
  poster?: string;
  overlayClassName?: string;
  className?: string;
};

export function VideoBackground({
  src,
  fallbackSrc,
  poster,
  overlayClassName = "bg-[var(--color-maroon)]/12",
  className = "",
}: VideoBackgroundProps) {
  const [activeSrc, setActiveSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  const mediaClass =
    "h-full w-full scale-105 object-cover brightness-[0.9] contrast-[1.06] saturate-[1.05]";

  const handleError = () => {
    if (fallbackSrc && activeSrc !== fallbackSrc) {
      setActiveSrc(fallbackSrc);
      return;
    }
    setFailed(true);
  };

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {poster && failed && (
        <Image
          src={poster}
          alt=""
          fill
          className={`${mediaClass}`}
          sizes="100vw"
          priority
        />
      )}

      {!failed && activeSrc && (
        <video
          key={activeSrc}
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          className={mediaClass}
          onError={handleError}
        >
          <source src={activeSrc} type="video/mp4" />
        </video>
      )}

      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}

function getYouTubeVideoId(url: string): string | null {
  if (!url.trim()) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([\w-]{11})/,
    /(?:youtu\.be\/)([\w-]{11})/,
    /(?:youtube\.com\/embed\/)([\w-]{11})/,
    /(?:youtube\.com\/shorts\/)([\w-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match?.[1]) return match[1];
  }
  return null;
}

export function getDemoYouTubeEmbedUrl(url: string): string | null {
  const id = getYouTubeVideoId(url);
  if (!id) return null;
  return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;
}
