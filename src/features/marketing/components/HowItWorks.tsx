//src/features/marketing/components/HowItWorks.tsx
"use client";

import { useState } from "react";
import { cn } from "@/shared/lib/utils";
import { HowItWorksVisual } from "./HowItWorksVisual";

const STEPS = [
  {
    id: "write",
    title: "1. Compose",
    description:
      "Pour your heart out in English or Urdu. Select an elegant typography style and let your words flow onto the digital canvas.",
  },
  {
    id: "seal",
    title: "2. Seal",
    description:
      "Secure your letter with a digital wax seal. Choose an expiry\n because some words are meant for a fleeting moment.",
  },
  {
    id: "share",
    title: "3. Share",
    description:
      "Send a magical short link. The recipient experiences a beautiful unwrapping animation without needing an account.",
  },
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="how-it-works"
      className="py-18 sm:py-20 bg-surface/30 border-t border-border/50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            The Anatomy of a Letter
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A thoughtfully designed experience that honors the timeless <br />
            tradition of letter writing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side: Interactive Steps */}
          <div className="space-y-8 relative">
            {/* Vertical connecting line */}
            <div className="absolute left-3.75 top-4 bottom-4 w-px bg-border/50 hidden md:block" />

            {STEPS.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={step.id}
                  className={cn(
                    "relative pl-8 md:pl-12 cursor-pointer transition-all duration-300",
                    isActive
                      ? "opacity-100 translate-x-2"
                      : "opacity-40 hover:opacity-70",
                  )}
                  onMouseEnter={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Animated Indicator Dot */}
                  <div
                    className={cn(
                      "absolute left-0 md:-left-px top-2.5 w-2 h-2 rounded-full transition-all duration-300",
                      isActive
                        ? "bg-primary shadow-(--marketing-primary-dot-shadow) scale-150"
                        : "bg-muted-foreground",
                    )}
                  />

                  <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Side: Animated Visuals */}
          <div className="relative aspect-square md:aspect-4/3 rounded-2xl bg-background border border-border flex items-center justify-center overflow-hidden shadow-sm">
            <HowItWorksVisual activeStep={activeStep} />
          </div>
        </div>
      </div>
    </section>
  );
}
