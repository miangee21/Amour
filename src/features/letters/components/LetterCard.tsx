//src/features/letters/components/LetterCard.tsx
import Link from "next/link";
import {
  MoreHorizontal,
  Link as LinkIcon,
  Edit2,
  Trash2,
  Mail,
} from "lucide-react";
import type { Letter } from "../types";
import { toast } from "sonner";
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

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/letter/${letter._id}`,
    );
    toast.success("Link copied to clipboard", { icon: "🔗" });
  };

  const handleDelete = () => {
    toast.info("Delete functionality will be added in Step 22.");
  };

  return (
    <div className="group relative flex flex-col h-55 rounded-2xl border border-border bg-surface-elevated p-6 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 overflow-hidden">
      {/* Subtle Top Fold Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-border/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-surface text-muted-foreground border border-border/50 transition-colors group-hover:bg-background">
          <Mail className="w-3 h-3" />
          {isShared ? "Shared" : "Draft"}
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-surface border-0 focus:outline-none transition-all">
            <MoreHorizontal className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-48 bg-surface-elevated border-border rounded-xl shadow-lg"
          >
            {isShared && (
              <DropdownMenuItem
                onClick={handleCopyLink}
                className="cursor-pointer text-muted-foreground hover:text-foreground focus:bg-surface rounded-md m-1"
              >
                <LinkIcon className="w-4 h-4 mr-2" />
                Copy Link
              </DropdownMenuItem>
            )}
            <DropdownMenuItem className="cursor-pointer p-0 text-muted-foreground hover:text-foreground focus:bg-surface rounded-md m-1">
              <Link
                href={`/write/${letter._id}`}
                className="flex w-full items-center px-2 py-1.5"
              >
                <Edit2 className="w-4 h-4 mr-2" />
                Edit Letter
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={handleDelete}
              className="cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/10 rounded-md m-1"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Body */}
      <div className="mb-auto mt-2">
        <h3 className="font-display text-2xl text-foreground font-medium line-clamp-2 leading-tight group-hover:text-primary transition-colors duration-300">
          {letter.recipientName
            ? `To ${letter.recipientName}`
            : "Untitled Letter"}
        </h3>
        <p className="text-sm text-muted-foreground mt-3 line-clamp-2 italic leading-relaxed">
          A quiet letter waiting in the ledger...
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-border/50">
        <span className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold">
          {new Date(letter._creationTime).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>
    </div>
  );
}
