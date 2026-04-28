"use client";

import { useEffect, useRef, useState } from "react";

const HERO_VIDEO_FILE =
  "Promo of Payaanlo Films _ culture of Gilgit Baltistan.mp4";

const VIDEO_SRC = `/hero-video/${encodeURIComponent(HERO_VIDEO_FILE)}`;

function useLightweightMedia() {
  return useState(() => {
    if (typeof window === "undefined") return false;
    const conn = (
      navigator as Navigator & {
        connection?: { saveData?: boolean };
      }
    ).connection;
    return Boolean(conn?.saveData);
  })[0];
}

function useReducedMotion() {
  return useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  })[0];
}

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const saveData = useLightweightMedia();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;
    if (!document.hidden) {
      void video.play().catch(() => {
        /* muted autoplay should succeed; IO below handles scroll */
      });
    }
  }, [reducedMotion]);

  useEffect(() => {
    const video = videoRef.current;
    const root = video?.closest("section");
    if (!video || !root || reducedMotion) return;

    const tryPlay = () => {
      if (document.hidden) return;
      void video.play().catch(() => {
        /* autoplay policies — muted should succeed */
      });
    };

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) tryPlay();
        else video.pause();
      },
      { root: null, rootMargin: "96px 0px", threshold: 0 },
    );
    obs.observe(root);

    const onVis = () => {
      if (document.hidden) video.pause();
      else tryPlay();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      obs.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <div
        className="absolute inset-0 bg-zinc-950"
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
      preload={saveData ? "metadata" : "auto"}
      controls={false}
      disablePictureInPicture
      aria-label="Gilgit-Baltistan culture — promotional film"
    />
  );
}
