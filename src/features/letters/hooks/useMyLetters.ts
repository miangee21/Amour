//src/features/letters/hooks/useMyLetters.ts
import { usePaginatedQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import type { LetterTab } from "@/features/letters/types";

const PAGE_SIZE = 12;

export function useMyLetters(tab: LetterTab) {
  const { results, status, loadMore } = usePaginatedQuery(
    api.letters.getMyLetters,
    { tab },
    { initialNumItems: PAGE_SIZE },
  );

  return {
    letters: results,
    isLoading: status === "LoadingFirstPage",
    isLoadingMore: status === "LoadingMore",
    canLoadMore: status === "CanLoadMore",
    loadMore: () => loadMore(PAGE_SIZE),
  };
}
