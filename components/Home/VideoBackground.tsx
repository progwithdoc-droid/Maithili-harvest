"use client";

import { useState } from "react";

type VideoBackgroundProps = {
  src: string;
  overlayClassName?: string;
  className?: string;
};

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

function getYouTubeBackgroundEmbed(url: string): string | null {
  const id = getYouTubeVideoId(url);
  if (!id) return null;
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: id,
    controls: "0",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    showinfo: "0",
    iv_load_policy: "3",
    disablekb: "1",
  });
  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}

export function VideoBackground({
  src,
  overlayClassName = "bg-[var(--color-cream)]/85",
  className = "",
}: VideoBackgroundProps) {
  const [failed, setFailed] = useState(false);
  const youtubeEmbed = getYouTubeBackgroundEmbed(src);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {!failed && youtubeEmbed && (
        <iframe
          src={youtubeEmbed}
          title=""
          allow="autoplay; encrypted-media; picture-in-picture"
          className="absolute top-1/2 left-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 scale-105 border-0"
        />
      )}

      {!failed && !youtubeEmbed && src && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full scale-105 object-cover"
          onError={() => setFailed(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}

export function getDemoYouTubeEmbedUrl(url: string): string | null {
  const id = getYouTubeVideoId(url);
  if (!id) return null;
  return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;
}
