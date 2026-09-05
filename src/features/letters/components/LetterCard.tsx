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
    // Temporary logic until useCopyShareLink hook is built
    navigator.clipboard.writeText(
      `${window.location.origin}/letter/${letter._id}`,
    );
    toast.success("Link copied to clipboard", { icon: "🔗" });
  };

  const handleDelete = () => {
    // Temporary placeholder until DeleteLetterDialog (Step 22) is ready
    toast.info("Delete functionality will be added in Step 22.");
  };

  return (
    <div className="group relative flex flex-col h-55 rounded-xl border border-border bg-surface-elevated p-5 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-start mb-2">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-surface text-muted-foreground border border-border">
          <Mail className="w-3 h-3" />
          {isShared ? "Shared" : "Draft"}
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-surface border-0 focus:outline-none transition-colors">
            <MoreHorizontal className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-48 bg-surface-elevated border-border"
          >
            {isShared && (
              <DropdownMenuItem
                onClick={handleCopyLink}
                className="cursor-pointer text-muted-foreground hover:text-foreground"
              >
                <LinkIcon className="w-4 h-4 mr-2" />
                Copy Link
              </DropdownMenuItem>
            )}
            <DropdownMenuItem className="cursor-pointer p-0 text-muted-foreground hover:text-foreground">
              <Link
                href={`/write/${letter._id}`}
                className="flex w-full items-center px-1.5 py-1"
              >
                <Edit2 className="w-4 h-4 mr-2" />
                Edit Letter
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={handleDelete}
              className="cursor-pointer text-destructive focus:text-destructive"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Body */}
      <div className="mb-auto">
        <h3 className="font-display text-xl text-foreground font-medium line-clamp-2">
          {letter.recipientName
            ? `To ${letter.recipientName}`
            : "Untitled Letter"}
        </h3>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2 italic">
          A quiet letter waiting in the ledger...
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
        <span className="text-xs text-muted-foreground font-mono">
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
