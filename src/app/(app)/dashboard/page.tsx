//src/app/(app)/dashboard/page.tsx
"use client";

import { useState } from "react";
import { DashboardTabs } from "@/features/letters/components/DashboardTabs";
import { LetterCard } from "@/features/letters/components/LetterCard";
import { LetterListSkeleton } from "@/features/letters/components/LetterListSkeleton";
import { LetterEmptyState } from "@/features/letters/components/LetterEmptyState";
import { useMyLetters } from "@/features/letters/hooks/useMyLetters";
import { Button } from "@/shared/components/ui/button";
import { PageHeader } from "@/shared/components/PageHeader";
import type { LetterTab } from "@/features/letters/types";

export default function DashboardPage() {
  const [tab, setTab] = useState<LetterTab>("all");
  const { letters, isLoading, isLoadingMore, canLoadMore, loadMore } =
    useMyLetters(tab);

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto w-full">
      <PageHeader
        title="Your Ledger"
        description="A quiet space for your inscribed vows and shared letters."
      />

      <DashboardTabs value={tab} onValueChange={setTab} />

      {isLoading && <LetterListSkeleton />}

      {!isLoading && letters.length === 0 && <LetterEmptyState />}

      {!isLoading && letters.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {letters.map((letter) => (
              <LetterCard key={letter._id} letter={letter} />
            ))}
          </div>
          {canLoadMore && (
            <div className="flex justify-center mt-10">
              <Button
                variant="outline"
                onClick={loadMore}
                disabled={isLoadingMore}
                className="rounded-full px-8 text-muted-foreground border-border hover:bg-surface transition-all"
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
