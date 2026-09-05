//src/features/letters/components/LetterEmptyState.tsx
import { PenLine } from "lucide-react";
import Link from "next/link";

export function LetterEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center border border-dashed border-border rounded-xl bg-surface/50">
      <div className="w-16 h-16 rounded-full bg-surface-elevated flex items-center justify-center shadow-sm border border-border mb-4">
        <PenLine className="w-7 h-7 text-muted-foreground opacity-70" />
      </div>
      <h3 className="text-xl font-display text-foreground font-medium mb-2">
        Your ledger is quiet
      </h3>
      <p className="text-muted-foreground max-w-sm mb-6">
        You haven&apos;t inscribed any letters yet. Take your pen and begin your
        first correspondence.
      </p>
      <Link
        href="/new"
        className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium tracking-wide uppercase bg-primary text-primary-foreground rounded-full hover:bg-primary-hover shadow-sm transition-colors"
      >
        Write a Letter
      </Link>
    </div>
  );
}
