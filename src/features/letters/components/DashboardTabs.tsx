//src/features/letters/components/DashboardTabs.tsx
"use client";

import { ScrollText, Send, Search } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import type { LetterTab } from "../types";

interface DashboardTabsProps {
  value: LetterTab;
  onValueChange: (value: LetterTab) => void;
  searchValue: string;
  onSearchChange: (val: string) => void;
}

export function DashboardTabs({
  value,
  onValueChange,
  searchValue,
  onSearchChange,
}: DashboardTabsProps) {
  const counts = useQuery(api.letters.getTabCounts);

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-border/60 mb-8 pt-2">
      {/* Left: Navigation Tabs with DB Counts */}
      <div className="flex items-center gap-8 text-sm -mb-px w-full sm:w-auto">
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
          {counts && value === "all" && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium transition-colors bg-primary/10 text-primary">
              {counts.all}
            </span>
          )}
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
          {counts && value === "shared" && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium transition-colors bg-primary/10 text-primary">
              {counts.shared}
            </span>
          )}
        </button>
      </div>

      {/* Right: Search Bar */}
      <div className="relative w-full sm:w-64 mb-0.5">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-muted-foreground" />
        </div>
        <input
          type="text"
          placeholder="Search archives..."
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-background border border-border text-foreground text-sm rounded-xl pl-9 pr-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-muted-foreground/70 shadow-sm"
        />
      </div>
    </div>
  );
}
