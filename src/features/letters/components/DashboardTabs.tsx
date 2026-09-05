//src/features/letters/components/DashboardTabs.tsx
"use client";

import { ScrollText, Send } from "lucide-react";
import type { LetterTab } from "../types";

interface DashboardTabsProps {
  value: LetterTab;
  onValueChange: (value: LetterTab) => void;
}

export function DashboardTabs({ value, onValueChange }: DashboardTabsProps) {
  return (
    <div className="flex items-center gap-8 border-b border-border/60 mb-8">
      <button
        onClick={() => onValueChange("all")}
        className={`flex items-center gap-2 pb-3 text-sm font-medium border-b-2 transition-all duration-300 focus:outline-none ${
          value === "all"
            ? "border-primary text-primary"
            : "border-transparent text-muted-foreground hover:text-foreground hover:border-border/80"
        }`}
      >
        <ScrollText className="w-4 h-4" />
        All Letters
      </button>
      <button
        onClick={() => onValueChange("shared")}
        className={`flex items-center gap-2 pb-3 text-sm font-medium border-b-2 transition-all duration-300 focus:outline-none ${
          value === "shared"
            ? "border-primary text-primary"
            : "border-transparent text-muted-foreground hover:text-foreground hover:border-border/80"
        }`}
      >
        <Send className="w-4 h-4" />
        Shared
      </button>
    </div>
  );
}
