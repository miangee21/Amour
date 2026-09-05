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
    <div className="flex items-center gap-2 border-b border-border mb-6 pb-px">
      <button
        onClick={() => onValueChange("all")}
        className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors focus:outline-none ${
          value === "all"
            ? "border-primary text-primary"
            : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
        }`}
      >
        <ScrollText className="w-4 h-4" />
        All Letters
      </button>
      <button
        onClick={() => onValueChange("shared")}
        className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors focus:outline-none ${
          value === "shared"
            ? "border-primary text-primary"
            : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
        }`}
      >
        <Send className="w-4 h-4" />
        Shared
      </button>
    </div>
  );
}
