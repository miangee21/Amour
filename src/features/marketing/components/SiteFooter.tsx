//src/features/marketing/components/SiteFooter.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/home"
              onClick={(event) => {
                if (pathname === "/home" || pathname === "/") {
                  event.preventDefault();
                  window.history.replaceState(null, "", "/home");
                  document
                    .querySelector<HTMLElement>("[data-home-scroll]")
                    ?.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="flex items-center gap-2.5 w-fit group"
            >
              <div className="relative flex items-center justify-center w-6 h-6 rounded-md bg-linear-to-br from-primary to-primary/80 shadow-sm transition-all group-hover:shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5 text-primary-foreground"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <span className="font-display font-bold text-lg tracking-tighter bg-linear-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Amour
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Letters, the way they used to feel. Compose, seal, and share
              digital love letters with elegance.
            </p>
          </div>

          {/* Links Section 1 */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Platform</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="#templates"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Section 2 */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">
              Legal & Social
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/miangee21/Amour"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Open Source
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Amour. All rights reserved.</p>
          <p>Designed with elegance for wordsmiths.</p>
        </div>
      </div>
    </footer>
  );
}
