//src/features/letters/components/LetterCard.tsx
import { MoreHorizontal, Edit2, Link as LinkIcon, Trash2 } from "lucide-react";
import type { Letter } from "../types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";

interface LetterCardProps {
  letter: Letter;
}

export function LetterCard({ letter }: LetterCardProps) {
  const isShared = letter.status === "shared";

  // Dynamic mapping based on template
  const themeConfig = {
    love: {
      tag: "ROMANCE",
      glow: "bg-primary/20 group-hover:bg-primary/40",
      dot: "bg-primary animate-pulse",
    },
    sorry: {
      tag: "APOLOGY",
      glow: "bg-accent/30 group-hover:bg-accent/50",
      dot: "bg-accent",
    },
    milestone: {
      tag: "TIME CAPSULE",
      glow: "bg-primary-hover/20 group-hover:bg-primary-hover/40",
      dot: "bg-foreground",
    },
  }[letter.template || "love"];

  const wordCount = (letter.rawContent || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const excerpt = letter.rawContent?.trim()
    ? letter.rawContent
    : "A quiet letter waiting in the ledger, with thoughts yet to be fully formed...";

  return (
    <article className="relative flex flex-col justify-between p-5 rounded-2xl bg-surface-elevated/70 backdrop-blur-xl border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group overflow-hidden h-60">
      {/* Ambient subtle glow corner */}
      <div
        className={`absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl transition-all pointer-events-none ${themeConfig.glow}`}
      ></div>

      <div>
        {/* Card Header: Status & Menu */}
        <div className="flex items-center justify-between mb-3.5 relative z-10">
          {isShared ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-accent/10 text-accent-foreground border border-accent/20 shadow-xs">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"></path>
              </svg>
              Sealed with Wax
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-surface text-foreground border border-border shadow-xs">
              <span
                className={`w-1.5 h-1.5 rounded-full ${themeConfig.dot}`}
              ></span>
              Draft
            </span>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground p-1.5 rounded-lg bg-transparent hover:bg-surface transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <MoreHorizontal className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-36 bg-surface-elevated border-border/60 rounded-2xl shadow-xl p-1.5 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            >
              <DropdownMenuItem className="cursor-pointer flex items-center gap-2.5 px-3 py-2.5 text-xs font-medium text-muted-foreground hover:text-foreground focus:text-foreground focus:bg-surface rounded-xl transition-colors">
                <Edit2 className="w-3.5 h-3.5" />
                Edit Canvas
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer flex items-center gap-2.5 px-3 py-2.5 text-xs font-medium text-muted-foreground hover:text-foreground focus:text-foreground focus:bg-surface rounded-xl transition-colors">
                <LinkIcon className="w-3.5 h-3.5" />
                Share
              </DropdownMenuItem>
              <div className="h-px w-full bg-border/40 my-1"></div>
              <DropdownMenuItem className="cursor-pointer flex items-center gap-2.5 px-3 py-2.5 text-xs font-medium text-destructive focus:text-destructive focus:bg-destructive/10 rounded-xl transition-colors">
                <Trash2 className="w-3.5 h-3.5" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Micro category tag */}
        <p className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase mb-1.5 relative z-10">
          {themeConfig.tag}
        </p>

        {/* Letter Title */}
        <h2 className="font-display text-2xl font-medium text-foreground leading-snug tracking-tight mb-2 group-hover:text-primary transition-colors relative z-10 line-clamp-1">
          {letter.title ||
            (letter.recipientName
              ? `${letter.recipientName}`
              : "Untitled Note")}
        </h2>

        {/* Excerpt */}
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed font-light mb-4 relative z-10">
          {excerpt}
        </p>
      </div>

      {/* Footer / Metadata & Discreet Action */}
      <div className="pt-4 border-t border-border/50 flex items-center justify-between text-[11px] text-muted-foreground relative z-10">
        <div className="flex items-center gap-2">
          <span className="font-medium tracking-wide">
            {new Date(letter._creationTime)
              .toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
              .toUpperCase()}
          </span>
          <span className="text-border">•</span>
          <span>{wordCount} words</span>
        </div>
        <div className="opacity-0 group-hover:opacity-100 font-medium text-primary hover:text-primary-hover transition flex items-center gap-0.5">
          {isShared ? "Inspect" : "Open"} →
        </div>
      </div>
    </article>
  );
}
