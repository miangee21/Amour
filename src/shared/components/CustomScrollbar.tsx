//src/shared/components/CustomScrollbar.tsx
import * as React from "react";
import { cn } from "@/shared/lib/utils";

export function CustomScrollbar({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "overflow-y-auto overflow-x-hidden",
        // Theme-aware elegant scrollbar
        "[&::-webkit-scrollbar]:w-1.5",
        "[&::-webkit-scrollbar-track]:bg-transparent",
        "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border",
        "hover:[&::-webkit-scrollbar-thumb]:bg-primary/50",
        "transition-colors duration-300",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
