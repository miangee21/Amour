//src/features/letters/components/LetterEmptyState.tsx
import { PenLine } from "lucide-react";
import Link from "next/link";

export function LetterEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center border border-dashed border-border/60 rounded-2xl bg-surface/20 transition-all duration-500 hover:bg-surface/30">
      <div className="w-16 h-16 rounded-full bg-surface-elevated flex items-center justify-center shadow-sm border border-border/50 mb-6 relative group">
        <div className="absolute inset-0 rounded-full border border-primary/20 scale-110 opacity-50 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700"></div>
        <PenLine className="w-7 h-7 text-muted-foreground opacity-70 group-hover:text-primary transition-colors duration-300" />
      </div>
      <h3 className="text-2xl font-display text-foreground font-medium mb-3">
        Your ledger remains quiet
      </h3>
      <p className="text-muted-foreground max-w-sm mb-8 italic">
        The pages are blank, waiting for your thoughts. Take up your pen and
        begin the first correspondence.
      </p>
      <Link
        href="/new"
        className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold tracking-[0.15em] uppercase bg-primary text-primary-foreground rounded-full hover:bg-primary-hover shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
      >
        Write a Letter
      </Link>
    </div>
  );
}
