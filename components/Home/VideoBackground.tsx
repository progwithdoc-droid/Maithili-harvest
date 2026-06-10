"use client";

import { useState } from "react";
import { getYouTubeEmbedUrl, getYouTubeVideoId } from "./youtube";

type VideoBackgroundProps = {
  src: string;
  /** Tailwind gradient classes for the overlay */
  overlayClassName?: string;
  className?: string;
};

export function VideoBackground({
  src,
  overlayClassName = "bg-[var(--color-cream)]/85",
  className = "",
}: VideoBackgroundProps) {
  const [failed, setFailed] = useState(false);
  const youtubeId = getYouTubeVideoId(src);
  const youtubeEmbed = youtubeId
    ? getYouTubeEmbedUrl(src, {
        autoplay: true,
        mute: true,
        loop: true,
        controls: false,
      })
    : null;

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
          onError={() => setFailed(true)}
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
