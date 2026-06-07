"use client";

import { useState } from "react";

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

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {!failed && (
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
      <div
        className={`absolute inset-0 ${overlayClassName}`}
      />
    </div>
  );
}
