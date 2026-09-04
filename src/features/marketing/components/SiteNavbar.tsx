//src/features/marketing/components/SiteNavbar.tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { ThemeToggle } from "@/features/theme/components/ThemeToggle";
import { useAuthActions } from "@/features/auth/hooks/useAuthActions";
import { Button } from "@/shared/components/ui/button";
import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";

export function SiteNavbar() {
  const user = useQuery(api.users.getCurrentUser);
  const { signOut } = useAuthActions();
  const router = useRouter();

  return (
    <header className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md h-12 transition-colors">
      <div className="flex h-full items-center justify-between px-6 max-w-7xl mx-auto">
        {/* Left: Logo & Brand */}
        <Link
          href="/home"
          className="flex items-center gap-2.5 group transition-transform hover:-translate-y-px"
        >
          <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-linear-to-br from-primary to-primary/80 shadow-md shadow-primary/30 group-hover:shadow-primary/50 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-primary-foreground"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <span className="font-display font-bold text-xl tracking-tighter bg-linear-to-r from-foreground via-foreground/90 to-primary/80 bg-clip-text text-transparent">
            Amour
          </span>
        </Link>

        {/* Right: Theme Toggle & Auth */}
        <div className="flex items-center gap-2 sm:gap-4">
          <ThemeToggle />

          {user === undefined ? (
            // Loading state
            <div className="w-8 h-8 rounded-full bg-surface animate-pulse" />
          ) : user === null ? (
            // Logged out state
            <div className="flex items-center gap-2">
              <Button
                className="rounded-full px-5 h-8 text-sm font-medium transition-transform active:scale-95"
                onClick={() => router.push("/login")}
              >
                Get started
              </Button>
            </div>
          ) : (
            // Logged in state
            <DropdownMenu>
              <DropdownMenuTrigger className="relative h-8 w-8 rounded-full ml-1 outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring transition-opacity hover:opacity-80">
                <Avatar className="h-8 w-8 border border-border">
                  <AvatarFallback className="bg-surface text-foreground font-medium">
                    {user.name?.[0]?.toUpperCase() ?? "?"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mt-1" align="end">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none text-foreground">
                      Welcome, {user.name?.split(" ")[0]}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground mt-1">
                      {user.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="cursor-pointer"
                  onClick={() => router.push("/dashboard")}
                >
                  Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => void signOut()}
                  className="cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/10"
                >
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
}
