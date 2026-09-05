//src/features/templates/hooks/useCreateDraft.ts
"use client";

import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { api } from "../../../../convex/_generated/api";
import type { TemplateId } from "../types";
import { useState } from "react";

export function useCreateDraft() {
  const createDraft = useMutation(api.letters.createDraft);
  const router = useRouter();
  const [pendingId, setPendingId] = useState<TemplateId | null>(null);

  const handleCreate = async (template: TemplateId) => {
    setPendingId(template);
    try {
      const draftId = await createDraft({ template });
      toast.success("Canvas Ready", {
        description: "Your parchment awaits your words.",
        icon: "📜",
      });
      router.push(`/write/${draftId}`);
    } catch {
      toast.error("Failed to prepare canvas. Please try again.");
      setPendingId(null);
    }
  };

  return { handleCreate, pendingId };
}
