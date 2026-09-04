//src/app/error.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Plane, Heart, AlertTriangle, RotateCcw, Home } from "lucide-react";
import { FloatingThemeToggle } from "@/features/theme/components/FloatingThemeToggle";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-paper-page-background transition-colors duration-500 relative select-none">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 sm:top-10 sm:right-10 z-50">
        <FloatingThemeToggle />
      </div>

      {/* Subtle Postal Background Watermarks & Delicate Texture */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Faint Vintage Circular Postal Cancellation Stamp */}
        <svg
          className="absolute top-[8%] left-[8%] w-80 h-80 text-(--not-found-ink) opacity-[0.025] -rotate-12 transition-colors duration-500"
          fill="currentColor"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            fill="none"
            r="92"
            stroke="currentColor"
            strokeDasharray="6,4"
            strokeWidth="3"
          ></circle>
          <circle
            cx="100"
            cy="100"
            fill="none"
            r="80"
            stroke="currentColor"
            strokeWidth="1.5"
          ></circle>
          <path
            d="M 30, 100 A 70, 70 0 1, 1 170, 100 A 70, 70 0 1, 1 30, 100"
            fill="none"
            id="circlePath"
          ></path>
          <text
            fill="currentColor"
            fontFamily="monospace"
            fontSize="11"
            letterSpacing="4"
          >
            <textPath href="#circlePath" startOffset="5%">
              POSTE RESTANTE • ARCHIVE DE PARIS •
            </textPath>
          </text>
          <line
            stroke="currentColor"
            strokeWidth="2"
            x1="45"
            x2="155"
            y1="92"
            y2="92"
          ></line>
          <line
            stroke="currentColor"
            strokeWidth="1.5"
            x1="38"
            x2="162"
            y1="100"
            y2="100"
          ></line>
          <line
            stroke="currentColor"
            strokeWidth="2"
            x1="45"
            x2="155"
            y1="108"
            y2="108"
          ></line>
        </svg>

        {/* Lower Right Postmark & Transit Waves */}
        <svg
          className="absolute -bottom-10 right-[5%] w-96 h-64 text-(--not-found-petal) opacity-[0.04] rotate-6 transition-colors duration-500"
          fill="currentColor"
          viewBox="0 0 300 150"
        >
          <path
            d="M10,40 Q40,20 70,40 T130,40 T190,40 T250,40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
          <path
            d="M10,60 Q40,40 70,60 T130,60 T190,60 T250,60"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
          <path
            d="M10,80 Q40,60 70,80 T130,80 T190,80 T250,80"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
          <circle
            cx="210"
            cy="65"
            fill="none"
            r="45"
            stroke="currentColor"
            strokeWidth="2"
          ></circle>
        </svg>

        {/* Drifting Rose Petals */}
        <svg
          className="absolute top-[14%] left-[20%] w-5 h-7 text-(--not-found-petal) opacity-30 rotate-12 transition-transform duration-1000 animate-pulse"
          fill="currentColor"
          viewBox="0 0 24 32"
        >
          <path d="M12 0 C2 8 0 22 12 32 C24 22 22 8 12 0 Z"></path>
        </svg>
        <svg
          className="absolute bottom-[24%] left-[10%] w-4 h-6 text-(--not-found-wax-dark) opacity-25 -rotate-45"
          fill="currentColor"
          viewBox="0 0 24 32"
        >
          <path d="M12 0 C4 9 2 20 12 32 C22 20 20 9 12 0 Z"></path>
        </svg>
        <svg
          className="absolute top-[22%] right-[16%] w-6 h-8 text-(--not-found-petal) opacity-25 rotate-35"
          fill="currentColor"
          viewBox="0 0 24 32"
        >
          <path d="M12 0 C1 10 3 24 12 32 C21 24 23 10 12 0 Z"></path>
        </svg>
        <svg
          className="absolute bottom-[18%] right-[22%] w-3 h-5 text-(--not-found-petal) opacity-35 -rotate-12"
          fill="currentColor"
          viewBox="0 0 24 32"
        >
          <path d="M12 0 C3 7 1 20 12 32 C23 20 21 7 12 0 Z"></path>
        </svg>

        {/* Fine Golden Dust Particles */}
        <div className="absolute top-1/4 left-[32%] w-1.5 h-1.5 rounded-full bg-accent/60 shadow-(--marketing-gold-particle-shadow)"></div>
        <div className="absolute bottom-1/3 right-[30%] w-1 h-1 rounded-full bg-accent/70 shadow-(--marketing-gold-particle-shadow)"></div>
        <div className="absolute top-2/3 left-[18%] w-1.5 h-1.5 rounded-full bg-accent/50 shadow-(--marketing-gold-particle-shadow)"></div>
      </div>

      {/* Central Vintage Envelope Motif */}
      <main className="relative z-20 flex flex-col items-center justify-center max-w-162.5 w-[90%] mx-auto my-auto translate-y-5 sm:translate-y-6">
        <div className="relative w-full bg-(--not-found-card) rounded-sm p-5 sm:p-7 md:p-9 shadow-(--not-found-card-shadow) border border-(--not-found-card-border) transition-all duration-500">
          {/* Folded Envelope Flap Shadow Line */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-48 h-3.5 bg-(--not-found-soft-border)/70 rounded-t-full blur-[1.5px] pointer-events-none transition-colors duration-500"></div>

          {/* Torn Edge Styling */}
          <div className="absolute inset-y-0 left-0 w-0.75 bg-linear-to-b from-transparent via-(--not-found-soft-border)/80 to-transparent pointer-events-none transition-colors duration-500"></div>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-(--not-found-card-border) pointer-events-none transition-colors duration-500"></div>

          {/* Top Right Postal Stamp Mark */}
          <div className="absolute top-4 right-4 sm:top-5 sm:right-6 border border-primary/40 bg-(--not-found-soft-surface) px-2.5 py-1.5 rounded-sm shadow-sm rotate-2 pointer-events-none flex flex-col items-center transition-colors duration-500">
            <div className="flex items-center gap-1.5 text-(--not-found-stamp-ink)">
              <Plane className="w-3.5 h-3.5" />
              <span className="text-[9px] tracking-widest font-mono uppercase font-bold text-(--not-found-stamp-ink)">
                SYSTEM ARCHIVE
              </span>
            </div>
            <div className="w-full my-0.5 h-px bg-primary/30"></div>
            <div className="text-[8px] font-mono tracking-tighter text-(--not-found-ink)/80">
              DISPATCH ERROR
            </div>
            <div className="text-[10px] font-mono font-bold text-primary tracking-wider">
              ERR. 500
            </div>
          </div>

          {/* Cracked Carmine Wax Seal */}
          <div className="relative -mt-14 sm:-mt-16 mx-auto w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-linear-to-br from-primary via-(--not-found-wax-dark) to-(--not-found-wax-deep) flex items-center justify-center shadow-(--not-found-card-shadow) group cursor-default">
            <div className="relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-linear-to-tr from-(--not-found-wax-deep) to-primary flex items-center justify-center shadow-inner border border-accent/30 overflow-hidden">
              <Heart className="w-6 h-6 text-(--not-found-wax-highlight) fill-current drop-shadow-sm" />
              {/* Realistic Fracture Lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none stroke-(--not-found-wax-deep) opacity-65"
                viewBox="0 0 50 50"
              >
                <path
                  d="M 25 2 L 23 16 L 27 22 L 21 34 L 26 48"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth="1.2"
                ></path>
                <path
                  d="M 23 16 L 14 19 L 8 15"
                  fill="none"
                  strokeWidth="0.9"
                ></path>
                <path
                  d="M 27 22 L 36 26 L 44 23"
                  fill="none"
                  strokeWidth="0.9"
                ></path>
                <path d="M 21 34 L 12 37" fill="none" strokeWidth="0.8"></path>
              </svg>
            </div>
            <div className="absolute -top-0.5 right-1 w-2 h-2 rounded-full bg-primary opacity-80"></div>
            <div className="absolute -bottom-1 left-2 w-3 h-2 rounded-full bg-(--not-found-wax-dark) opacity-90"></div>
          </div>

          {/* Main Content Area */}
          <div className="text-center flex flex-col items-center mt-3 sm:mt-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-(--not-found-soft-border)/70 text-(--not-found-deep-rose) text-[10px] font-mono tracking-widest uppercase mb-1 transition-colors duration-500">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>System Anomaly • Dispatch Failed</span>
            </div>

            <h1 className="text-6xl sm:text-7xl font-display text-(--not-found-ink) font-medium tracking-tight leading-none my-1 transition-colors duration-500">
              500
            </h1>

            <div className="my-2 flex items-center justify-center gap-3 opacity-60 text-(--not-found-stamp-ink) transition-colors duration-500">
              <div className="w-14 h-px bg-(--not-found-stamp-ink)"></div>
              <span className="text-sm font-display italic text-(--not-found-petal)">
                ❦
              </span>
              <div className="w-14 h-px bg-(--not-found-stamp-ink)"></div>
            </div>

            <h2 className="text-base sm:text-lg font-mono text-(--not-found-ink) font-normal tracking-wide max-w-lg mb-2 transition-colors duration-500">
              An unexpected storm interrupted the delivery.
            </h2>

            <p className="text-base sm:text-lg text-(--not-found-ink)/90 italic font-normal max-w-120 leading-relaxed mb-6 font-letter-en transition-colors duration-500">
              “The ink smudged, the wax cracked, and our system encountered{" "}
              <br /> an unexpected error.”
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-2">
              <button
                onClick={() => reset()}
                className="inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-3 text-sm tracking-widest uppercase font-medium bg-transparent text-(--not-found-ink) border border-(--not-found-stamp-ink)/40 hover:bg-(--not-found-stamp-ink)/10 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Try Again</span>
              </button>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-3 text-sm tracking-widest uppercase font-medium bg-primary text-primary-foreground border border-accent/80 hover:bg-primary-hover shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Return Home</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Poetic Postscript */}
        <div className="mt-6 flex flex-col items-center text-center opacity-75 max-w-115">
          <p className="text-sm sm:text-base text-(--not-found-ink)/90 italic font-normal leading-relaxed font-letter-en transition-colors duration-500">
            “Even the most carefully sealed letters sometimes tear, <br /> but a
            steady hand can always write them anew.”
          </p>
          <span className="font-mono text-[9px] tracking-widest uppercase text-(--not-found-petal) font-semibold mt-1 transition-colors duration-500">
            — Amour Archives
          </span>
        </div>
      </main>
    </div>
  );
}
