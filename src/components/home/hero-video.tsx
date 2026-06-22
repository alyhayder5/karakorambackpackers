"use client";

import { useEffect, useRef, useState } from "react";

const HERO_VIDEO_FILE =
  "Promo of Payaanlo Films _ culture of Gilgit Baltistan.mp4";

const VIDEO_SRC = `/hero-video/${encodeURIComponent(HERO_VIDEO_FILE)}`;

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85";

function useReducedMotion() {
  return useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  })[0];
}

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;
    void video.play().catch(() => setVideoError(true));
  }, [reducedMotion]);

  if (reducedMotion || videoError) {
    return (
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${FALLBACK_IMAGE})` }}
        aria-hidden
      />
    );
  }

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover object-center"
      src={VIDEO_SRC}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      onError={() => setVideoError(true)}
      aria-label="Gilgit-Baltistan culture — promotional film"
    />
  );
}
