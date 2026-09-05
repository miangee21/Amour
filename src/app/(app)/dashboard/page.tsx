//src/app/(app)/dashboard/page.tsx
"use client";

import { useState } from "react";
import { DashboardTabs } from "@/features/letters/components/DashboardTabs";
import { LetterCard } from "@/features/letters/components/LetterCard";
import { LetterListSkeleton } from "@/features/letters/components/LetterListSkeleton";
import { LetterEmptyState } from "@/features/letters/components/LetterEmptyState";
import { useMyLetters } from "@/features/letters/hooks/useMyLetters";
import { Button } from "@/shared/components/ui/button";
import type { LetterTab } from "@/features/letters/types";
import { Edit3 } from "lucide-react";

export default function DashboardPage() {
  const [tab, setTab] = useState<LetterTab>("all");
  const { letters, isLoading, isLoadingMore, canLoadMore, loadMore } =
    useMyLetters(tab);

  return (
    <div className="px-6 py-10 md:px-12 md:py-16 max-w-7xl mx-auto w-full animate-in fade-in duration-700">
      {/* Premium Header */}
      <div className="flex flex-col mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 w-fit rounded-full bg-surface text-muted-foreground text-[10px] font-bold uppercase tracking-[0.14em] mb-4 border border-border">
          <Edit3 className="w-3 h-3" />
          Personal Archive
        </div>
        <h1 className="font-display text-4xl md:text-5xl text-foreground font-medium tracking-tight">
          Your <span className="italic text-primary">Ledger</span>
        </h1>
        <p className="mt-3 text-muted-foreground text-lg max-w-2xl">
          A quiet space for your inscribed vows and shared letters.
        </p>
      </div>

      <DashboardTabs value={tab} onValueChange={setTab} />

      {isLoading && <LetterListSkeleton />}

      {!isLoading && letters.length === 0 && <LetterEmptyState />}

      {!isLoading && letters.length > 0 && (
        <>
          {/* Responsive Grid taking advantage of the new full-width layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
            {letters.map((letter) => (
              <LetterCard key={letter._id} letter={letter} />
            ))}
          </div>

          {canLoadMore && (
            <div className="flex justify-center mt-12 pt-8 border-t border-border border-dashed">
              <Button
                variant="outline"
                onClick={loadMore}
                disabled={isLoadingMore}
                className="rounded-full px-8 text-muted-foreground border-border hover:bg-surface hover:text-foreground transition-all shadow-sm"
              >
                {isLoadingMore ? "Unsealing records..." : "Load more letters"}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
