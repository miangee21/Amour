//src/app/(auth)/layout.tsx
import type { ReactNode } from "react";
import { CustomScrollbar } from "@/shared/components/CustomScrollbar";
import { FloatingThemeToggle } from "@/features/theme/components/FloatingThemeToggle";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <CustomScrollbar className="h-screen w-full flex flex-col bg-paper-page-background relative overflow-x-hidden transition-colors duration-500">
      <div className="absolute top-6 right-6 sm:top-10 sm:right-10 z-50">
        <FloatingThemeToggle />
      </div>

      <main className="flex-1 px-4 sm:px-6 relative z-10 flex items-center justify-center min-h-screen">
        {children}
      </main>
    </CustomScrollbar>
  );
}
