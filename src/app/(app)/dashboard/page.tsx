//src/app/(app)/dashboard/page.tsx
"use client";

import { useState } from "react";
import { DashboardTabs } from "@/features/letters/components/DashboardTabs";
import { LetterCard } from "@/features/letters/components/LetterCard";
import { LetterListSkeleton } from "@/features/letters/components/LetterListSkeleton";
import { LetterEmptyState } from "@/features/letters/components/LetterEmptyState";
import { useMyLetters } from "@/features/letters/hooks/useMyLetters";
import type { LetterTab } from "@/features/letters/types";
import { Edit3, ChevronDown } from "lucide-react";
import { useDebounce } from "@/shared/hooks/useDebounce";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/components/ui/pagination";

export default function DashboardPage() {
  const [tab, setTab] = useState<LetterTab>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [pageSize, setPageSize] = useState(10);

  // Debounce search query so DB isn't hit on every single keystroke
  const debouncedSearch = useDebounce(searchQuery, 400);

  const {
    letters,
    isLoading,
    handleNext,
    handlePrev,
    hasPrev,
    hasNext,
    currentPage,
  } = useMyLetters(tab, debouncedSearch, pageSize);

  return (
    <div className="px-6 py-10 md:px-12 md:py-16 max-w-7xl mx-auto w-full animate-in fade-in duration-700">
      {/* Premium Header */}
      <div className="flex flex-col mb-10">
        <div className="flex items-center gap-2 text-muted-foreground text-xs font-semibold uppercase tracking-[0.15em] mb-3">
          <Edit3 className="w-3.5 h-3.5" />
          <span>Personal Archive</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl text-foreground font-medium tracking-tight">
          Your <span className="italic text-primary">Ledger</span>
        </h1>
        <p className="mt-3 text-muted-foreground text-lg max-w-2xl">
          A quiet space for your inscribed vows and shared letters.
        </p>
      </div>

      <DashboardTabs
        value={tab}
        onValueChange={setTab}
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
      />

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

          {/* Shadcn Server-Side Pagination & Controls (Hidden if < 5 items total) */}
          {(hasPrev || hasNext || letters.length >= 5) && (
            <div className="mt-28 md:mt-36 pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-5">
              {/* Left: Page Size Dropdown */}
              <div className="flex items-center gap-2">
                <label
                  htmlFor="pageSize"
                  className="text-xs text-muted-foreground font-medium"
                >
                  Items per page:
                </label>
                <div className="relative">
                  <select
                    id="pageSize"
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                    className="appearance-none bg-background text-xs text-foreground font-medium rounded-xl pl-3 pr-8 py-1.5 focus:ring-1 focus:ring-primary focus:outline-none border border-border cursor-pointer transition-colors shadow-sm"
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5 text-muted-foreground">
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Right: Shadcn Pagination */}
              <Pagination className="mx-0 w-auto">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (hasPrev) handlePrev();
                      }}
                      className={
                        !hasPrev
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      isActive
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:text-primary"
                    >
                      {currentPage}
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (hasNext) handleNext();
                      }}
                      className={
                        !hasNext
                          ? "pointer-events-none opacity-50"
                          : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </>
      )}
    </div>
  );
}
