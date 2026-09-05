//src/features/letters/components/AppNavbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { ThemeToggle } from "@/features/theme/components/ThemeToggle";
import { useAuthActions } from "@/features/auth/hooks/useAuthActions";
import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar";
import { ChevronDown, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";

export function AppNavbar() {
  const user = useQuery(api.users.getCurrentUser);
  const { signOut } = useAuthActions();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full flex-none border-b border-border bg-background/80 backdrop-blur-md h-12 transition-colors">
      <div className="flex h-full items-center justify-between px-6 max-w-7xl mx-auto w-full">
        {/* Left: Logo */}
        <Link
          href="/dashboard"
          onClick={(event) => {
            if (pathname === "/dashboard") {
              event.preventDefault();
              document
                .querySelector<HTMLElement>("[data-app-scroll]")
                ?.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
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

        {/* Center: Navigation Pill Links */}
        <nav className="hidden md:flex items-center gap-2">
          <Link
            href="/dashboard"
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              pathname === "/dashboard"
                ? "bg-surface text-foreground"
                : "text-muted-foreground hover:bg-surface hover:text-foreground"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/new"
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              pathname === "/new"
                ? "bg-surface text-foreground"
                : "text-muted-foreground hover:bg-surface hover:text-foreground"
            }`}
          >
            New Letter
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1.5 p-1 pr-2 rounded-full outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring hover:bg-surface border border-transparent hover:border-border transition-all">
              <Avatar className="h-7 w-7 border border-border">
                <AvatarFallback
                  className={`bg-surface-elevated text-foreground text-xs font-medium transition-all duration-300 ${user === undefined ? "blur-sm bg-border/40" : ""}`}
                >
                  {user?.name?.[0]?.toUpperCase() ?? ""}
                </AvatarFallback>
              </Avatar>
              <ChevronDown className="w-4 h-4 text-muted-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-65 mt-2 p-2 rounded-2xl bg-surface-elevated border-border shadow-md"
            >
              <DropdownMenuGroup>
                <DropdownMenuLabel className="font-normal p-2">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border border-border shadow-sm">
                      <AvatarFallback
                        className={`bg-surface text-primary text-lg font-medium transition-all duration-300 ${user === undefined ? "blur-sm bg-border/40" : ""}`}
                      >
                        {user?.name?.[0]?.toUpperCase() ?? ""}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col overflow-hidden">
                      <p className="text-sm font-medium text-foreground truncate">
                        {user?.name ?? "Writer"}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                </DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator className="bg-border/60 my-1" />
              <DropdownMenuItem
                onClick={() => void signOut()}
                className="cursor-pointer flex items-center text-destructive focus:text-destructive focus:bg-destructive/60 rounded-xl px-3 py-2.5 transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" />
                <span className="font-medium">Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
