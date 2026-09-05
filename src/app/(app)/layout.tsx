//src/app/(app)/layout.tsx
"use client";

import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { ThemeToggle } from "@/features/theme/components/ThemeToggle";
import { useAuthActions } from "@/features/auth/hooks/useAuthActions";
import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar";
import { Button } from "@/shared/components/ui/button";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  // Fetch current user from Convex database
  const user = useQuery(api.users.getCurrentUser);
  const { signOut } = useAuthActions();

  return (
    <div className="min-h-screen bg-background md:grid md:grid-cols-[240px_1fr]">
      {/* Sidebar (Hidden on mobile, visible on desktop) */}
      <aside className="hidden md:flex md:flex-col border-r border-border p-4 gap-2">
        <Link
          href="/dashboard"
          className="font-display text-2xl text-primary px-2 py-4 tracking-tight"
        >
          Amour
        </Link>

        <nav className="flex flex-col gap-1 mt-2">
          <Link
            href="/dashboard"
            className="px-3 py-2 rounded-md hover:bg-surface text-sm font-medium transition-colors"
          >
            Dashboard
          </Link>
          <Link
            href="/new"
            className="px-3 py-2 rounded-md hover:bg-surface text-sm font-medium transition-colors"
          >
            New Letter
          </Link>
        </nav>

        {/* Logout Button at the bottom */}
        <Button
          variant="ghost"
          className="mt-auto justify-start text-muted-foreground hover:text-foreground"
          onClick={() => void signOut()}
        >
          Log out
        </Button>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="flex items-center justify-between border-b border-border px-6 py-4 bg-background z-10">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9 border border-border">
              <AvatarFallback className="bg-surface text-primary font-medium">
                {user?.name?.[0]?.toUpperCase() ?? "?"}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col sm:flex">
              <span className="text-sm font-medium leading-none mb-1">
                {user?.name}
              </span>
              <span className="text-xs text-muted-foreground leading-none">
                {user?.email}
              </span>
            </div>
          </div>
          <ThemeToggle />
        </header>

        {/* Scrollable Content Area */}
        <main className="hidden md:block flex-1 overflow-y-auto">
          {children}
        </main>

        {/* Mobile Warning - Consistent with Step 23 */}
        <div className="md:hidden p-8 flex flex-col items-center justify-center h-full text-center space-y-4">
          <span className="font-display text-4xl text-primary/20">❦</span>
          <p className="text-muted-foreground">
            Amour is designed for the focused environment of a desktop. Please
            open on a larger screen to write and read your letters.
          </p>
        </div>
      </div>
    </div>
  );
}
