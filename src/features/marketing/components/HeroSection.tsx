//src/features/marketing/components/HeroSection.tsx
"use client";

import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Button } from "@/shared/components/ui/button";

export function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-24 sm:pt-24 sm:pb-32 flex flex-col items-center justify-center text-center px-6">
      {/* Subtle Floating Paper Background (Design: Refined Enchanted Unfolding) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-90 dark:opacity-100">
        {/* Abundant Golden Magical Dust */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`dust-${i}`}
            animate={{
              y: [-20, -90],
              opacity: [0, 0.9, 0],
              scale: [0.4, 1.2, 0.4],
            }}
            transition={{
              duration: 2.5 + (i % 3),
              repeat: Infinity,
              delay: i * 0.25,
              ease: "easeInOut",
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-accent shadow-(--marketing-gold-particle-shadow) z-20"
            style={{
              left: `${32 + i * 2.5}%`,
              top: `${55 + (i % 3 === 0 ? 8 : i % 2 === 0 ? -6 : 4)}%`,
            }}
          />
        ))}

        {/* Subtle Background Glow */}
        <div className="absolute w-64 h-40 sm:w-85 sm:h-56 bg-accent/5 dark:bg-accent/10 blur-3xl rounded-full" />

        {/* Shorter Enhanced Envelope */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [-2, 1, -2] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-64 h-40 sm:w-85 sm:h-56 border border-border/80 bg-linear-to-br from-background to-surface rounded-md shadow-2xl overflow-hidden flex items-center justify-center ring-1 ring-border/40"
        >
          {/* Realistic Envelope Flap Lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Bottom and side flaps converging to center */}
            <path
              d="M0,100 L50,52 L100,100 M0,0 L50,52 L100,0"
              stroke="currentColor"
              fill="none"
              vectorEffect="non-scaling-stroke"
              strokeWidth="1"
              className="text-border/50"
            />
            {/* Top flap overlapping others */}
            <path
              d="M0,0 L50,52 L100,0"
              stroke="currentColor"
              fill="none"
              vectorEffect="non-scaling-stroke"
              strokeWidth="1.5"
              className="text-border/90 shadow-sm"
            />
          </svg>

          {/* Animated Wax Seal */}
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-20 w-11 h-11 rounded-full bg-primary shadow-xl flex items-center justify-center border border-primary-hover ring-2 ring-accent/40"
            style={{ top: "40%" }}
          >
            {/* Blank inner seal detail */}
            <div className="w-7 h-7 rounded-full border border-primary-foreground/20 shadow-inner" />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto space-y-5">
        {/* Main Typography */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-foreground leading-[1.1]">
          Letters, the way they <br className="hidden sm:block" />
          <span className="italic text-muted-foreground">used to feel.</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Compose in English or Urdu, seal it with wax, and share a digital
          letter that unwraps like the real thing.
        </p>

        {/* CTA Area */}
        <div className="flex flex-col sm:flex-row items-center justify-center pt-2">
          <Button
            size="lg"
            className="h-12 px-10 rounded-full text-base font-medium shadow-sm transition-transform active:scale-95 cursor-pointer"
            onClick={() => router.push("/signup")}
          >
            Write your first letter
          </Button>
        </div>
      </div>
    </section>
  );
}
