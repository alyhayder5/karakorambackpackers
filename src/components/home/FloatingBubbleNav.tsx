"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const TABS = [
  { hash: "", label: "Home", href: "/" },
  { hash: "packages", label: "Family Tours", href: "/#packages" },
  { hash: "blog", label: "Cultural Tours", href: "/#blog" },
  { hash: "gallery", label: "Adventure Tours", href: "/#gallery" },
  { hash: "why-us", label: "About", href: "/#why-us" },
  { hash: "contact", label: "Contact", href: "/#contact" },
] as const;

function indexFromHash(raw: string) {
  const h = raw.replace(/^#/, "");
  if (!h) return 0;
  const i = TABS.findIndex((t) => t.hash === h);
  return i >= 0 ? i : 0;
}

export function FloatingBubbleNav({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sync = () => {
      if (typeof window === "undefined") return;
      setActive(indexFromHash(window.location.hash));
    };

    sync();
    window.addEventListener("hashchange", sync);

    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);

  return (
    <nav
      className={`flex w-full justify-center py-2 sm:py-2.5 ${className}`}
      aria-label="Primary"
    >
      <ul className="mx-auto flex max-w-full flex-wrap items-center justify-center gap-x-0.5 gap-y-2 rounded-full border border-black/[0.07] bg-[#fdfdfd] px-2 py-2 shadow-[0_10px_28px_-12px_rgba(0,0,0,0.22)] sm:gap-x-1 sm:gap-y-0 sm:px-4 sm:py-2.5 md:gap-x-2 md:px-5">
        {TABS.map((tab, i) => {
          const isActive = active === i;
          return (
            <li key={tab.hash || "home"}>
              <Link
                href={tab.href}
                prefetch={false}
                onClick={() => setActive(i)}
                aria-current={isActive ? "page" : undefined}
                className={`block whitespace-nowrap rounded-full px-2.5 py-1.5 text-center text-[11px] font-medium transition-colors sm:px-3 sm:py-2 sm:text-xs md:text-[0.8125rem] ${
                  isActive
                    ? "text-accent"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                }`}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
