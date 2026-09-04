//src/features/marketing/components/HowItWorksVisual.tsx
"use client";

import { motion, AnimatePresence } from "motion/react";

interface HowItWorksVisualProps {
  activeStep: number;
}

export function HowItWorksVisual({ activeStep }: HowItWorksVisualProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.95 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Visual 1: Writing Lines (Tilted & Layered for Depth) */}
        {activeStep === 0 && (
          <div className="relative w-56 h-72 md:w-72 md:h-96 flex items-center justify-center">
            {/* Back Paper */}
            <div className="absolute w-full h-full border border-border/40 bg-surface/40 rounded-sm rotate-6 shadow-sm" />
            {/* Front Paper */}
            <div className="absolute w-full h-full border border-border/80 bg-surface rounded-sm shadow-xl flex flex-col p-6 md:p-8 gap-5 -rotate-2 bg-linear-to-br from-surface to-background">
              <div className="flex gap-3 items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-muted-foreground/10 animate-pulse" />
                <div className="h-2.5 w-24 bg-muted-foreground/20 rounded-full" />
              </div>
              <motion.div
                animate={{ width: ["0%", "100%"] }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="h-2.5 bg-foreground/20 rounded-full"
              />
              <motion.div
                animate={{ width: ["0%", "85%"] }}
                transition={{
                  duration: 1.5,
                  delay: 0.2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="h-2.5 bg-foreground/20 rounded-full"
              />
              <motion.div
                animate={{ width: ["0%", "95%"] }}
                transition={{
                  duration: 1.5,
                  delay: 0.4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="h-2.5 bg-foreground/20 rounded-full"
              />
              <motion.div
                animate={{ width: ["0%", "60%"] }}
                transition={{
                  duration: 1.5,
                  delay: 0.6,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="h-2.5 bg-foreground/20 rounded-full"
              />

              <div className="absolute bottom-12 right-12 z-10">
                {/* Golden dust near the pen hand */}
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={`pen-dust-${i}`}
                    animate={{
                      y: [-10, -35],
                      opacity: [0, 0.9, 0],
                      scale: [0.5, 1.2, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeInOut",
                    }}
                    className="absolute w-1.5 h-1.5 rounded-full bg-accent shadow-(--marketing-gold-particle-shadow)"
                    style={{
                      bottom: `${15 + ((i * 7) % 70)}%`,
                      right: `${5 + ((i * 6) % 65)}%`,
                    }}
                  />
                ))}
                <motion.div
                  animate={{
                    x: [0, 60, 0],
                    y: [0, 20, 0],
                    rotate: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  className="text-5xl md:text-6xl drop-shadow-xl"
                >
                  ✍️
                </motion.div>
              </div>
            </div>
          </div>
        )}

        {/* Visual 2: Realistic Envelope with Seal and Golden Details */}
        {activeStep === 1 && (
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Golden Magical Dust */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`dust-seal-${i}`}
                animate={{
                  y: [-10, -60],
                  opacity: [0, 0.9, 0],
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                  duration: 2.5 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
                className="absolute w-1.5 h-1.5 rounded-full bg-accent shadow-(--marketing-gold-particle-shadow) z-20"
                style={{
                  left: `${35 + i * 4}%`,
                  top: `${50 + (i % 2 === 0 ? 8 : -8)}%`,
                }}
              />
            ))}

            {/* Pulsing background glow */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute w-64 h-64 bg-primary/20 rounded-full blur-3xl z-0"
            />

            {/* Realistic Envelope Base */}
            <div className="relative z-10 w-64 h-40 md:w-80 md:h-56 border border-border/80 bg-linear-to-br from-background to-surface rounded-md shadow-2xl overflow-hidden flex items-center justify-center ring-1 ring-border/40">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,100 L50,52 L100,100 M0,0 L50,52 L100,0"
                  stroke="currentColor"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  strokeWidth="1"
                  className="text-border/60"
                />
                <path
                  d="M0,0 L50,52 L100,0"
                  stroke="currentColor"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  strokeWidth="1.5"
                  className="text-border/90 shadow-sm"
                />
              </svg>

              {/* Wax Seal dropping in with Golden Accents */}
              <motion.div
                initial={{ scale: 2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="absolute z-20 w-16 h-16 rounded-full bg-primary shadow-lg flex items-center justify-center border border-accent/60 ring-4 ring-accent/30"
                style={{ top: "38%" }}
              >
                <motion.div
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-10 h-10 rounded-full border border-accent/80 bg-accent/10 shadow-inner flex items-center justify-center"
                >
                  <div className="w-2 h-2 rounded-full bg-accent/60 blur-[1px]" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Visual 3: Flying Letter & Premium Share Link */}
        {activeStep === 2 && (
          <div className="relative flex flex-col items-center justify-center w-full h-full gap-8 overflow-visible">
            {/* Magic Trail Particles (Increased to 15) */}
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`trail-${i}`}
                animate={{
                  y: [0, -40 + (i % 3) * -10, -180],
                  x: [0, 20 + i * 4, 150 + i * 8],
                  opacity: [0, 0.9, 0],
                  scale: [0, 1.2, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
                className="absolute z-0 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent shadow-(--marketing-gold-particle-shadow)"
                style={{
                  top: `${45 + (i % 3) * 2}%`,
                  left: `${48 - (i % 2) * 2}%`,
                }}
              />
            ))}

            {/* Flying Letter Animation */}
            <motion.div
              animate={{
                y: [0, -20, -180],
                x: [0, 10, 150],
                rotate: [0, -5, 20],
                scale: [1, 1.1, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                times: [0, 0.3, 1],
                ease: "easeInOut",
              }}
              className="absolute z-10 w-24 h-16 border border-border bg-linear-to-br from-surface to-background rounded-sm shadow-xl flex items-center justify-center"
            >
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,100 L50,52 L100,100 M0,0 L50,52 L100,0"
                  stroke="currentColor"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  strokeWidth="1"
                  className="text-border/60"
                />
              </svg>
              <div
                className="absolute w-4 h-4 rounded-full bg-primary shadow-sm border border-primary-hover"
                style={{ top: "35%" }}
              />
            </motion.div>

            {/* Premium Link Box */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="z-20 mt-24 px-5 py-3 md:px-8 md:py-4 rounded-full bg-background/80 border-2 border-accent/20 shadow-(--marketing-share-shadow) flex items-center gap-3 md:gap-4 backdrop-blur-xl ring-1 ring-border/50"
            >
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-accent/20 to-primary/10 flex items-center justify-center text-accent text-lg shadow-inner">
                ✨
              </div>
              <span className="text-muted-foreground text-base md:text-lg hidden sm:inline font-medium">
                amour.app/l/
              </span>
              <span className="text-foreground font-display italic font-semibold text-lg md:text-xl tracking-wider bg-accent/10 px-4 py-1 rounded-md border border-accent/30 shadow-sm">
                magic
              </span>
            </motion.div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
