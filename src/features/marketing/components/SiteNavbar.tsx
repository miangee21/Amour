//src/features/marketing/components/SiteNavbar.tsx
"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ThemeToggle } from "@/features/theme/components/ThemeToggle";
import { Button } from "@/shared/components/ui/button";

export function SiteNavbar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md h-12 transition-colors">
      <div className="flex h-full items-center justify-between px-6 max-w-7xl mx-auto">
        {/* Left: Logo & Brand */}
        <Link
          href="/home"
          onClick={(e) => {
            if (pathname === "/home" || pathname === "/") {
              e.preventDefault();
              window.history.replaceState(null, "", "/home");
              document
                .querySelector<HTMLElement>("[data-home-scroll]")
                ?.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2.5 group transition-transform hover:-translate-y-px"
        >
          <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-linear-to-br from-primary to-primary/80 shadow-md shadow-primary/30 group-hover:shadow-primary/50 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-primary-foreground"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <span className="font-display font-bold text-xl tracking-tighter bg-linear-to-r from-foreground via-foreground/90 to-primary/80 bg-clip-text text-transparent">
            Amour
          </span>
        </Link>

        {/* Right: Theme Toggle & Auth */}
        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggle />
          <Button
            className="rounded-full px-5 h-8 text-sm font-medium transition-transform active:scale-95"
            onClick={() => router.push("/login")}
          >
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
}
