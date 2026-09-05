//src/app/(app)/layout.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { CustomScrollbar } from "@/shared/components/CustomScrollbar";
import { AppNavbar } from "@/features/letters/components/AppNavbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/dashboard") {
      document
        .querySelector<HTMLElement>("[data-app-scroll]")
        ?.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-background">
      {/* Top Navbar */}
      <AppNavbar />

      {/* Main Content Area */}
      <main className="hidden md:block min-h-0 flex-1 relative">
        <CustomScrollbar className="h-full w-full" data-app-scroll>
          {children}
        </CustomScrollbar>
      </main>

      {/* Mobile Warning */}
      <div className="md:hidden p-8 flex flex-col items-center justify-center h-[calc(100vh-48px)] text-center space-y-4">
        <span className="font-display text-4xl text-primary/20">❦</span>
        <p className="text-muted-foreground">
          Amour is designed for the focused environment of a desktop. Please
          open on a larger screen to write and read your letters.
        </p>
      </div>
    </div>
  );
}
