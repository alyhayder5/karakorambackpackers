"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

const TABS = [
  { hash: "", label: "Home", href: "/" },
  { hash: "packages", label: "Tours", href: "/#packages" },
  { hash: "gallery", label: "Destinations", href: "/#gallery" },
  { hash: "testimonials", label: "Experiences", href: "/#testimonials" },
  { hash: "why-us", label: "About", href: "/#why-us" },
  { hash: "contact", label: "Contact", href: "/#contact" },
] as const;

type Box = { left: number; top: number; width: number; height: number };

const EMPTY_BOX: Box = { left: 0, top: 0, width: 0, height: 0 };

function indexFromHash(raw: string) {
  const h = raw.replace(/^#/, "");
  if (!h) return 0;
  const i = TABS.findIndex((t) => t.hash === h);
  return i >= 0 ? i : 0;
}

function linkClasses(isActive: boolean, mobile: boolean) {
  const radius = mobile ? "rounded-xl sm:rounded-2xl" : "rounded-full";
  const base = `relative block ${radius} px-3.5 py-2 text-[0.8125rem] font-medium tracking-[0.07em] transition-colors duration-300 ease-out sm:px-4 sm:py-2.5 sm:text-sm motion-reduce:transform-none`;
  const align = mobile ? "text-left" : "text-center";
  if (isActive) {
    return `${base} ${align} z-[2] text-white`;
  }
  return `${base} ${align} z-[2] text-zinc-400 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-zinc-100 hover:bg-white/[0.06] hover:shadow-[0_0_28px_-10px_rgba(255,92,61,0.35)]`;
}

const SLIDE_EASE =
  "cubic-bezier(0.22, 1, 0.36, 1)" as const;
const SLIDE_MS = 420;

function subscribeReducedMotion(cb: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function FloatingBubbleNav({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopBox, setDesktopBox] = useState<Box>(EMPTY_BOX);
  const [mobileBox, setMobileBox] = useState<Box>(EMPTY_BOX);

  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const mobileWrapRef = useRef<HTMLDivElement>(null);
  const desktopLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const mobileLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const measureDesktop = useCallback(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;
    const container = desktopContainerRef.current;
    const link = desktopLinkRefs.current[active];
    if (!container || !link) return;
    const c = container.getBoundingClientRect();
    const l = link.getBoundingClientRect();
    setDesktopBox({
      left: l.left - c.left + container.scrollLeft,
      top: l.top - c.top + container.scrollTop,
      width: l.width,
      height: l.height,
    });
  }, [active]);

  const measureMobile = useCallback(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(min-width: 1024px)").matches) return;
    if (!menuOpen) return;
    const container = mobileWrapRef.current;
    const link = mobileLinkRefs.current[active];
    if (!container || !link) return;
    const c = container.getBoundingClientRect();
    const l = link.getBoundingClientRect();
    setMobileBox({
      left: l.left - c.left + container.scrollLeft,
      top: l.top - c.top + container.scrollTop,
      width: l.width,
      height: l.height,
    });
  }, [active, menuOpen]);

  useLayoutEffect(() => {
    measureDesktop();
    measureMobile();
  }, [measureDesktop, measureMobile, pathname]);

  useLayoutEffect(() => {
    const onResize = () => {
      measureDesktop();
      measureMobile();
    };
    window.addEventListener("resize", onResize);
    const ro = new ResizeObserver(onResize);
    const d = desktopContainerRef.current;
    const m = mobileWrapRef.current;
    if (d) ro.observe(d);
    if (m) ro.observe(m);
    return () => {
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
  }, [measureDesktop, measureMobile]);

  useEffect(() => {
    if (!menuOpen) return;
    const id = requestAnimationFrame(() => {
      measureMobile();
    });
    return () => cancelAnimationFrame(id);
  }, [menuOpen, measureMobile]);

  useEffect(() => {
    const sync = () => {
      if (typeof window === "undefined") return;
      setActive(indexFromHash(window.location.hash));
    };

    sync();
    window.addEventListener("hashchange", sync);

    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onPointer = (e: MouseEvent | TouchEvent) => {
      const t = e.target as Node;
      if (
        panelRef.current?.contains(t) ||
        buttonRef.current?.contains(t)
      ) {
        return;
      }
      setMenuOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const slideStyle = (box: Box) => {
    const ms = prefersReducedMotion ? 0 : SLIDE_MS;
    const transition =
      ms === 0
        ? "none"
        : `left ${ms}ms ${SLIDE_EASE}, top ${ms}ms ${SLIDE_EASE}, width ${ms}ms ${SLIDE_EASE}, height ${ms}ms ${SLIDE_EASE}`;
    return {
      left: box.left,
      top: box.top,
      width: box.width,
      height: box.height,
      transition,
    } as const;
  };

  const renderLinks = (variant: "desktop" | "mobile") => {
    const isMobile = variant === "mobile";
    const setRef = (i: number) => (el: HTMLAnchorElement | null) => {
      if (isMobile) mobileLinkRefs.current[i] = el;
      else desktopLinkRefs.current[i] = el;
    };

    return (
      <ul
        className={
          variant === "desktop"
            ? "relative z-[2] flex flex-wrap items-center justify-center gap-0.5 sm:gap-1"
            : "relative z-[2] flex flex-col gap-1 p-1.5"
        }
      >
        {TABS.map((tab, i) => {
          const isActive = active === i;
          return (
            <li key={tab.hash || "home"} className={isMobile ? "w-full" : ""}>
              <Link
                ref={setRef(i)}
                href={tab.href}
                prefetch={false}
                onClick={() => {
                  setActive(i);
                  closeMenu();
                }}
                aria-current={isActive ? "page" : undefined}
                className={
                  variant === "desktop"
                    ? linkClasses(isActive, false)
                    : `${linkClasses(isActive, true)} w-full px-4 py-3`
                }
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  const desktopReady = desktopBox.width > 0 && desktopBox.height > 0;
  const mobileReady = menuOpen && mobileBox.width > 0 && mobileBox.height > 0;

  return (
    <nav
      className={`flex w-full flex-col items-stretch justify-center py-2 sm:py-2.5 lg:items-center ${className}`}
      aria-label="Primary"
    >
      {/* Mobile: glass trigger + flyout */}
      <div className="relative z-[4] w-full lg:hidden">
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="primary-nav-mobile-panel"
          id="primary-nav-mobile-trigger"
          className="group flex w-full items-center justify-between gap-3 rounded-2xl border border-white/[0.12] bg-black/35 px-4 py-3 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.65),inset_0_1px_0_0_rgba(255,255,255,0.07)] backdrop-blur-xl transition hover:border-white/20 hover:bg-black/45"
        >
          <div className="flex min-w-0 flex-col items-start text-left">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Navigate
            </span>
            <span className="truncate text-sm font-medium tracking-[0.06em] text-zinc-200">
              {TABS[active]?.label ?? "Home"}
            </span>
          </div>
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-100 shadow-inner transition group-hover:border-accent/40 group-hover:text-accent">
            {menuOpen ? (
              <X className="size-5" strokeWidth={2} aria-hidden />
            ) : (
              <Menu className="size-5" strokeWidth={2} aria-hidden />
            )}
          </span>
        </button>

        <div
          ref={panelRef}
          id="primary-nav-mobile-panel"
          role="region"
          aria-labelledby="primary-nav-mobile-trigger"
          aria-hidden={!menuOpen}
          className={`absolute left-0 right-0 top-[calc(100%+0.5rem)] origin-top overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0a0a0c]/92 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.85),inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-2xl transition-[opacity,transform,visibility] duration-300 ease-out motion-reduce:transition-none ${
            menuOpen
              ? "pointer-events-auto visible translate-y-0 opacity-100"
              : "pointer-events-none invisible -translate-y-1 opacity-0"
          }`}
        >
          <div ref={mobileWrapRef} className="relative">
            <span
              aria-hidden
              className={`pointer-events-none absolute z-[1] rounded-xl bg-gradient-to-br from-accent via-[#ff6b45] to-[#e84a2e] shadow-[0_0_28px_-6px_rgba(255,92,61,0.75),0_4px_14px_-6px_rgba(0,0,0,0.55)] ring-1 ring-white/15 motion-reduce:!transition-none ${
                mobileReady ? "opacity-100" : "opacity-0"
              }`}
              style={
                mobileReady
                  ? slideStyle(mobileBox)
                  : { ...EMPTY_BOX, visibility: "hidden" as const }
              }
            />
            {renderLinks("mobile")}
          </div>
        </div>
      </div>

      {/* Desktop: horizontal glass pill + sliding highlight */}
      <div className="hidden w-full justify-center lg:flex">
        <div
          ref={desktopContainerRef}
          className="relative inline-flex max-w-full rounded-full border border-white/[0.11] bg-black/30 px-2 py-1.5 shadow-[0_16px_48px_-20px_rgba(0,0,0,0.75),0_0_0_1px_rgba(255,255,255,0.04)_inset,inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-2xl sm:px-2.5 sm:py-1.5"
        >
          <span
            aria-hidden
            className={`pointer-events-none absolute z-[1] rounded-full bg-gradient-to-br from-accent via-[#ff6b45] to-[#e84a2e] shadow-[0_0_28px_-6px_rgba(255,92,61,0.75),0_4px_14px_-6px_rgba(0,0,0,0.55)] ring-1 ring-white/15 motion-reduce:!transition-none ${
              desktopReady ? "opacity-100" : "opacity-0"
            }`}
            style={
              desktopReady
                ? slideStyle(desktopBox)
                : { ...EMPTY_BOX, visibility: "hidden" as const }
            }
          />
          {renderLinks("desktop")}
        </div>
      </div>
    </nav>
  );
}
