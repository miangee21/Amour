//src/features/letters/hooks/useMyLetters.ts
import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import type { LetterTab } from "@/features/letters/types";

export function useMyLetters(tab: LetterTab, searchQuery = "", pageSize = 10) {
  const [cursorHistory, setCursorHistory] = useState<(string | null)[]>([null]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentKey = `${tab}-${searchQuery}-${pageSize}`;
  const [prevKey, setPrevKey] = useState(currentKey);

  if (currentKey !== prevKey) {
    setPrevKey(currentKey);
    setCursorHistory([null]);
    setCurrentIndex(0);
  }

  const currentCursor = cursorHistory[currentIndex];

  const queryResult = useQuery(api.letters.getMyLetters, {
    tab,
    ...(searchQuery ? { searchQuery } : {}),
    paginationOpts: {
      numItems: pageSize,
      cursor: currentCursor ?? null,
    },
  });

  const handleNext = () => {
    if (queryResult && !queryResult.isDone && queryResult.continueCursor) {
      setCursorHistory((prev) => {
        const newHistory = [...prev];
        newHistory[currentIndex + 1] = queryResult.continueCursor;
        return newHistory;
      });
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return {
    letters: queryResult?.page || [],
    isLoading: queryResult === undefined,
    handleNext,
    handlePrev,
    hasPrev: currentIndex > 0,
    hasNext: queryResult ? !queryResult.isDone : false,
    currentPage: currentIndex + 1,
  };
}
