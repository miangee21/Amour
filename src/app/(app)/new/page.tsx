//src/app/(app)/new/page.tsx
"use client";

import { TEMPLATES } from "@/features/templates/types";
import { TemplateCard } from "@/features/templates/components/TemplateCard";
import { useCreateDraft } from "@/features/templates/hooks/useCreateDraft";

export default function NewLetterPage() {
  const { handleCreate, pendingId } = useCreateDraft();

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8 max-w-311.25 mx-auto w-full animate-in fade-in duration-700">
      <div className="flex flex-col mb-16 items-center text-center max-w-2xl mx-auto">
        <span className="text-[11px] uppercase tracking-[0.25em] text-primary/80 font-medium mb-3">
          ✦ Archive Selection ✦
        </span>
        <h1 className="font-display text-4xl md:text-5xl text-foreground font-medium tracking-tight">
          Choose Your <span className="italic text-primary">Canvas</span>
        </h1>
        <p className="mt-4 text-muted-foreground text-lg max-w-xl">
          Select a template to begin. Your words will be safely sealed in your
          ledger until you are ready to share them.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch w-full">
        {TEMPLATES.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            onClick={handleCreate}
            isPending={pendingId === template.id}
            isDisabled={pendingId !== null}
          />
        ))}
      </div>
    </div>
  );
}
