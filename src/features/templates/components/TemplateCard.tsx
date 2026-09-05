//src/features/templates/components/TemplateCard.tsx
"use client";

import { Heart, Feather, Sparkles, Loader2, ArrowRight } from "lucide-react";
import type { TemplateMeta } from "../types";

interface TemplateCardProps {
  template: TemplateMeta;
  onClick: (id: TemplateMeta["id"]) => void;
  isPending: boolean;
  isDisabled: boolean;
}

export function TemplateCard({
  template,
  onClick,
  isPending,
  isDisabled,
}: TemplateCardProps) {
  const Icon =
    template.icon === "heart"
      ? Heart
      : template.icon === "feather"
        ? Feather
        : Sparkles;

  // Primary (Love) template gets solid button, others get outline button
  const isPrimary = template.id === "love";

  return (
    <button
      onClick={() => onClick(template.id)}
      disabled={isDisabled}
      className="relative flex flex-col justify-between p-7 rounded-3xl bg-surface-elevated/70 backdrop-blur-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500 group overflow-hidden text-left w-full h-full focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {/* Subtle Top-Corner Glow Accent */}
      <div
        className={`absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700 ${template.glowStyle}`}
      />

      <div>
        {/* Top Row: Icon and Highlight Pill */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-surface border border-border/80 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300 shadow-sm">
            {isPending ? (
              <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
            ) : (
              <Icon
                className="w-6 h-6 group-hover:text-primary transition-colors"
                strokeWidth={1.8}
              />
            )}
          </div>
          <span className="inline-flex items-center text-[11px] font-semibold px-3 py-1 rounded-full bg-surface text-primary border border-border/80">
            {template.tagline}
          </span>
        </div>

        {/* Card Content */}
        <h2 className="font-display text-3xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {template.title}
        </h2>
        <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
          {template.description}
        </p>

        {/* Interactive Micro-Preview Element */}
        <div className="p-4 rounded-2xl bg-background/60 border border-border/60 shadow-inner relative overflow-hidden group-hover:border-border transition-colors">
          <div className="flex items-center justify-between border-b border-border/40 pb-2 mb-2.5 text-[11px] text-muted-foreground font-mono">
            <span className="flex items-center space-x-1.5">
              <span
                className={`w-1.5 h-1.5 rounded-full ${template.previewDotClass}`}
              />
              <span>{template.previewLabel1}</span>
            </span>
            <span>{template.previewLabel2}</span>
          </div>
          <p className="font-display italic text-foreground/80 text-sm leading-snug">
            &quot;{template.previewQuote}&quot;
          </p>
        </div>
      </div>

      {/* Action Button */}
      <div
        className={`w-full inline-flex items-center justify-center space-x-2 py-3 px-5 rounded-2xl font-medium text-sm shadow-sm transition-all duration-300 mt-6 ${
          isPrimary
            ? "bg-primary hover:bg-primary-hover text-primary-foreground border border-transparent shadow-primary/20 group-hover:shadow-md"
            : "bg-surface hover:bg-surface-elevated text-foreground border border-border group-hover:border-primary/40 group-hover:shadow-md"
        }`}
      >
        <span>{template.buttonText}</span>
        <ArrowRight
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          strokeWidth={2}
        />
      </div>
    </button>
  );
}
